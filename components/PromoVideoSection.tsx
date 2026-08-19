// "use client";

// import { Sparkles } from "lucide-react";

// /**
//  * Autoplaying, muted, looping brand showreel — compact browser-mockup
//  * frame so it reads as a polished product highlight rather than a big
//  * slab of video taking over the page.
//  */
// export default function PromoVideoSection() {
//   return (
//     <section className="relative max-w-[1440px] mx-auto px-16 py-16 max-xl:px-10 max-lg:px-6 max-lg:py-12 max-sm:px-5 max-sm:py-10">
//       <div className="text-center mb-8 max-lg:mb-6">
//         <span className="text-brand-400 font-semibold tracking-wider uppercase text-xs md:text-sm bg-brand-500/10 px-4 py-2 rounded-full border border-brand-500/20 inline-flex items-center mb-4">
//           <Sparkles className="w-3.5 h-3.5 mr-2" />
//           See Zandrelix in Motion
//         </span>
//         <h2 className="font-extrabold text-2xl md:text-3xl lg:text-[38px] tracking-[-0.5px]">
//           Built by a Team That{" "}
//           <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
//             Delivers
//           </span>
//         </h2>
//       </div>

//       <div className="max-w-[660px] mx-auto">
//         <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0e1f] shadow-2xl shadow-brand-500/10">
//           {/* browser chrome */}
//           <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
//             <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
//             <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
//             <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
//             <div className="flex-1 flex justify-center">
//               <span className="text-[11px] text-muted bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-[3px]">
//                 zandrelix.com
//               </span>
//             </div>
//           </div>

//           <video
//             className="w-full h-auto block"
//             src="/videos/zandrelix-promo.mp4"
//             poster="/videos/zandrelix-promo-poster.jpg"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="metadata"
//             aria-label="Zandrelix showreel — trusted by growing businesses, expert talent and modern tech stack, our services, and how to get started"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function PromoVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let observer: IntersectionObserver | null = null;

    const playVideo = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;

        if (video.paused) {
          await video.play();
        }
      } catch {
        // Some mobile browsers can block autoplay.
        // Poster remains visible as a fallback.
      }
    };

    const handleLoadedData = () => {
      playVideo();
    };

    video.addEventListener("loadeddata", handleLoadedData);

    // Start loading the video.
    video.load();

    // Play when the section is near the viewport.
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playVideo();
            } else {
              video.pause();
            }
          });
        },
        {
          rootMargin: "300px 0px",
          threshold: 0.1,
        }
      );

      observer.observe(video);
    } else {
      playVideo();
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="relative max-w-[1440px] mx-auto px-16 py-16 max-xl:px-10 max-lg:px-6 max-lg:py-12 max-sm:px-5 max-sm:py-10">
      <div className="text-center mb-8 max-lg:mb-6">
        <span className="text-brand-400 font-semibold tracking-wider uppercase text-xs md:text-sm bg-brand-500/10 px-4 py-2 rounded-full border border-brand-500/20 inline-flex items-center mb-4">
          <Sparkles className="w-3.5 h-3.5 mr-2" />
          See Zandrelix in Motion
        </span>

        <h2 className="font-extrabold text-2xl md:text-3xl lg:text-[38px] tracking-[-0.5px]">
          Built by a Team That{" "}
          <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
            Delivers
          </span>
        </h2>
      </div>

      <div className="max-w-[660px] mx-auto">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0e1f] shadow-2xl shadow-brand-500/10">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />

            <div className="flex-1 flex justify-center">
              <span className="text-[11px] text-muted bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-[3px]">
                zandrelix.com
              </span>
            </div>
          </div>

          <video
            ref={videoRef}
            className="w-full aspect-video object-cover block"
            src="/videos/zandrelix-promo.mp4"
            poster="/videos/zandrelix-promo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-label="Zandrelix showreel"
          />
        </div>
      </div>
    </section>
  );
}