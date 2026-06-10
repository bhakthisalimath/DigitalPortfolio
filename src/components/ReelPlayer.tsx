"use client";

import { useEffect, useRef, useState } from "react";
import { getEmbeddableVideo } from "@/utils/videoEmbed";

type ReelPlayerProps = {
  link: string;
  title: string;
};

export default function ReelPlayer({ link, title }: ReelPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const embed = getEmbeddableVideo(link);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !embed) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [embed]);

  if (!embed) {
    return (
      <div className="reel-player reel-player--placeholder">
        <span className="reel-player-placeholder-label">Reel preview</span>
        <p className="reel-player-placeholder-hint">Add reel link to enable playback</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`reel-player reel-player--embed reel-player--${embed.type}`}
    >
      {shouldLoad ? (
        <iframe
          src={embed.embedUrl}
          title={`${embed.type === "tiktok" ? "TikTok" : "Instagram"}: ${title}`}
          className="reel-player-iframe"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
        />
      ) : (
        <div className="reel-player-loading" aria-hidden="true">
          <span className="reel-player-loading-label">Loading preview…</span>
        </div>
      )}
    </div>
  );
}
