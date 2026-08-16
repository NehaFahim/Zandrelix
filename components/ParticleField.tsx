"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleFieldProps {
  /** Roughly how many particles to render. */
  count?: number;
  /** Base particle colors (hex). A couple of tones are blended in for depth. */
  colors?: [number, number];
}

export default function ParticleField({ count = 260, colors = [0x5b8def, 0x9b6bff] }: ParticleFieldProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = mount.clientWidth || 1;
    let height = mount.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 50);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // build two interleaved particle groups (two tones for depth)
    const groups: THREE.Points[] = [];
    const velocities: Float32Array[] = [];

    colors.forEach((hex, gi) => {
      const n = Math.round(count / colors.length);
      const positions = new Float32Array(n * 3);
      const vel = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - gi;
        vel[i * 3] = (Math.random() - 0.5) * 0.004;
        vel[i * 3 + 1] = (Math.random() - 0.5) * 0.004 + 0.0015;
        vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: hex,
        size: gi === 0 ? 0.045 : 0.03,
        transparent: true,
        opacity: gi === 0 ? 0.55 : 0.4,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);
      groups.push(points);
      velocities.push(vel);
    });

    let raf = 0;
    const clock = new THREE.Clock();

    function animate() {
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!reduced) {
        groups.forEach((points, gi) => {
          const pos = points.geometry.getAttribute("position") as THREE.BufferAttribute;
          const vel = velocities[gi];
          for (let i = 0; i < pos.count; i++) {
            let y = pos.getY(i) + vel[i * 3 + 1] * dt * 60;
            let x = pos.getX(i) + vel[i * 3] * dt * 60;
            if (y > 4) y = -4;
            if (x > 7) x = -7;
            if (x < -7) x = 7;
            pos.setXY(i, x, y);
          }
          pos.needsUpdate = true;
          points.rotation.y += 0.0006;
        });
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      width = mount.clientWidth || 1;
      height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      groups.forEach((points) => {
        points.geometry.dispose();
        (points.material as THREE.Material).dispose();
        scene.remove(points);
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [count, colors]);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}
