import type { ContentCategory } from "@/data/mediaAmbassador";
import ReelCard from "@/components/ReelCard";

type ContentCategorySectionProps = {
  category: ContentCategory;
};

export default function ContentCategorySection({
  category,
}: ContentCategorySectionProps) {
  return (
    <div className="content-category">
      <header className="content-category-header">
        <h3 className="content-category-title">{category.title}</h3>
        <p className="content-category-desc">{category.description}</p>
      </header>
      <div className="reel-grid">
        {category.items.map((item) => (
          <ReelCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
