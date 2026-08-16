export default function AmbientBackground() {
  return (
    <div aria-hidden className="ambient-bg" style={{ zIndex: -1 }}>
      <span className="ambient-orb ambient-orb--a" />
      <span className="ambient-orb ambient-orb--b" />
      <span className="ambient-orb ambient-orb--c" />
      <div className="ambient-grid" />
    </div>
  );
}
