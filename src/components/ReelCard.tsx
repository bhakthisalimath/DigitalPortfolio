import type { ContentItem } from "@/data/mediaAmbassador";

type ReelCardProps = {
  item: ContentItem;
};

export default function ReelCard({ item }: ReelCardProps) {
  const isPlaceholderLink = item.link.startsWith("[insert");

  return (
    <article className="reel-card">
      <div className="reel-card-header">
        <div className="reel-card-meta">
          <span className="reel-card-platform">{item.platform}</span>
          <span className="reel-card-role">{item.role}</span>
        </div>
        <h3 className="reel-card-title">{item.title}</h3>
        <p className="reel-card-desc">{item.description}</p>
      </div>

      {/* REPLACE: set item.link in src/data/mediaAmbassador.ts */}
      {isPlaceholderLink ? (
        <div className="reel-card-embed reel-card-embed--placeholder">
          <span className="reel-card-embed-label">Reel preview</span>
          <p className="reel-card-embed-hint">
            Add reel link in <code>mediaAmbassador.ts</code>
          </p>
        </div>
      ) : (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="reel-card-link"
        >
          View reel →
        </a>
      )}

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
      <p className="reel-card-engagement">{item.stats.engagementNote}</p>
    </article>
  );
}
