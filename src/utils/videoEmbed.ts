/** Extract Instagram reel shortcode from a post URL. */
export function getInstagramReelShortcode(url: string): string | null {
  const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
  return match?.[1] ?? null;
}

export function getInstagramEmbedUrl(url: string): string | null {
  const shortcode = getInstagramReelShortcode(url);
  if (!shortcode) return null;
  return `https://www.instagram.com/reel/${shortcode}/embed`;
}

export function isInstagramReelUrl(url: string): boolean {
  return !url.startsWith("[insert") && getInstagramReelShortcode(url) != null;
}

/** Extract TikTok video ID from a video URL. */
export function getTikTokVideoId(url: string): string | null {
  const match = url.match(/\/video\/(\d+)/);
  return match?.[1] ?? null;
}

export function getTikTokEmbedUrl(url: string): string | null {
  const videoId = getTikTokVideoId(url);
  if (!videoId) return null;
  return `https://www.tiktok.com/embed/v2/${videoId}`;
}

export function isTikTokVideoUrl(url: string): boolean {
  return !url.startsWith("[insert") && getTikTokVideoId(url) != null;
}

export type EmbeddableVideo =
  | { type: "instagram"; embedUrl: string }
  | { type: "tiktok"; embedUrl: string };

export function getEmbeddableVideo(link: string): EmbeddableVideo | null {
  const instagram = getInstagramEmbedUrl(link);
  if (instagram) return { type: "instagram", embedUrl: instagram };

  const tiktok = getTikTokEmbedUrl(link);
  if (tiktok) return { type: "tiktok", embedUrl: tiktok };

  return null;
}
