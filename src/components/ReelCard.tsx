import type { ContentItem } from "@/data/mediaAmbassador";
import ReelPlayer from "@/components/ReelPlayer";
import { isInstagramReelUrl } from "@/utils/instagram";

type ReelCardProps = {
  item: ContentItem;
};

export default function ReelCard({ item }: ReelCardProps) {
  const isPlaceholderLink = item.link.startsWith("[insert");
  const canPlayInline = isInstagramReelUrl(item.link);

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
          Open on Instagram →
        </a>
      ) : !isPlaceholderLink ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="reel-card-link"
        >
          View reel →
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
        <div className="reel-card-stat">
          <dt>Shares / Saves</dt>
          <dd>{item.stats.sharesSaves}</dd>
        </div>
      </dl>
      {item.stats.engagementNote ? (
        <p className="reel-card-engagement">{item.stats.engagementNote}</p>
      ) : null}
    </article>
  );
}
