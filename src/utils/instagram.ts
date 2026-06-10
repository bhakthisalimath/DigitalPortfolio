/** Extract Instagram reel shortcode from a post URL. */
export function getInstagramReelShortcode(url: string): string | null {
  const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
  return match?.[1] ?? null;
}

/** Build the Instagram embed URL for inline playback. */
export function getInstagramEmbedUrl(url: string): string | null {
  const shortcode = getInstagramReelShortcode(url);
  if (!shortcode) return null;
  return `https://www.instagram.com/reel/${shortcode}/embed`;
}

export function isInstagramReelUrl(url: string): boolean {
  return !url.startsWith("[insert") && getInstagramReelShortcode(url) != null;
}
