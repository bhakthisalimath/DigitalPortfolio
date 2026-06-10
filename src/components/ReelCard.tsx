import type { ContentItem } from "@/data/mediaAmbassador";
import ReelPlayer from "@/components/ReelPlayer";
import { getEmbeddableVideo } from "@/utils/videoEmbed";

type ReelCardProps = {
  item: ContentItem;
};

function externalLinkLabel(platform: ContentItem["platform"]): string {
  if (platform === "TikTok") return "Open on TikTok →";
  if (platform === "Instagram") return "Open on Instagram →";
  return "View video →";
}

export default function ReelCard({ item }: ReelCardProps) {
  const isPlaceholderLink = item.link.startsWith("[insert");
  const canPlayInline = getEmbeddableVideo(item.link) != null;

  return (
    <article className="reel-card">
      <ReelPlayer link={item.link} title={item.title} />

      <div className="reel-card-header">
        <div className="reel-card-meta">
          <span className="reel-card-platform">{item.platform}</span>
          <span className="reel-card-role">{item.role}</span>
        </div>
        <h3 className="reel-card-title">{item.title}</h3>
        <p className="reel-card-desc">{item.description}</p>
      </div>

      {canPlayInline ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="reel-card-link reel-card-link--secondary"
        >
          {externalLinkLabel(item.platform)}
        </a>
      ) : !isPlaceholderLink ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="reel-card-link"
        >
          {externalLinkLabel(item.platform)}
        </a>
      ) : null}

      <dl className="reel-card-stats">
        <div className="reel-card-stat">
          <dt>Views</dt>
          <dd>{item.stats.views}</dd>
        </div>
        <div className="reel-card-stat">
          <dt>Likes</dt>
          <dd>{item.stats.likes}</dd>
        </div>
        <div className="reel-card-stat">
          <dt>Comments</dt>
          <dd>{item.stats.comments}</dd>
        </div>
      </dl>
      {item.stats.engagementNote ? (
        <p className="reel-card-engagement">{item.stats.engagementNote}</p>
      ) : null}
    </article>
  );
}
