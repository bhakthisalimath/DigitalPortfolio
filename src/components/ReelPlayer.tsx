"use client";

import { useState } from "react";
import {
  getInstagramEmbedUrl,
  isInstagramReelUrl,
} from "@/utils/instagram";

type ReelPlayerProps = {
  link: string;
  title: string;
};

export default function ReelPlayer({ link, title }: ReelPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = getInstagramEmbedUrl(link);
  const canEmbed = isInstagramReelUrl(link) && embedUrl != null;

  if (!canEmbed) {
    return (
      <div className="reel-player reel-player--placeholder">
        <span className="reel-player-placeholder-label">Reel preview</span>
        <p className="reel-player-placeholder-hint">Add reel link to enable playback</p>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="reel-player reel-player--active">
        <iframe
          src={`${embedUrl}?autoplay=1`}
          title={`Instagram reel: ${title}`}
          className="reel-player-iframe"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="reel-player reel-player--preview"
      onClick={() => setPlaying(true)}
      aria-label={`Play reel: ${title}`}
    >
      <div className="reel-player-preview-bg" aria-hidden="true" />
      <span className="reel-player-play-icon" aria-hidden="true">
        ▶
      </span>
      <span className="reel-player-play-label">Play reel</span>
    </button>
  );
}
