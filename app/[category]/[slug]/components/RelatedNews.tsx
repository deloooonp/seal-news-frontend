import NewsCard from "@/components/news/NewsCard";
import { slugify } from "@/lib/utils";

export default function RelatedNews({
  relatedNews,
  currentSlug,
}: {
  relatedNews: any[];
  currentSlug: string;
}) {
  return (
    <section className="my-20">
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary w-1 h-8 rounded-xl"></div>
          <h2 className="text-section-title">Berita Terkait</h2>
        </div>
        <button className="text-body-md text-primary bg-primary/20 border border-primary rounded-lg px-5 py-3 hover:bg-primary hover:text-background transition-all hover:scale-110 duration-200 cursor-pointer">
          Lihat Semua
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 list-none">
        {relatedNews
          .filter((item) => slugify(item.title) !== currentSlug)
          .slice(0, 3)
          .map((item, i) => {
            const href = `/${item.category}/${slugify(item.title)}`;
            return <NewsCard key={item.title + i} item={item} href={href} />;
          })}
      </ul>
    </section>
  );
}
