import NewsCard from "@/components/news/NewsCard";
import { SectionHeader } from "@/components/ui";
import { filterCurrentNews } from "@/lib/utils";
import { NewsItem } from "@/types/news";

export default function RelatedNews({
  relatedNews,
  currentSlug,
}: {
  relatedNews: NewsItem[];
  currentSlug: string;
}) {
  return (
    <section className="my-20">
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <SectionHeader>Berita Terkait</SectionHeader>
        <button className="text-body-md text-primary bg-primary/20 border border-primary rounded-lg px-5 py-3 hover:bg-primary hover:text-background transition-all hover:scale-110 duration-200 cursor-pointer">
          Lihat Semua
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 list-none">
        {filterCurrentNews(relatedNews, currentSlug, 3).map((item, i) => {
          return <NewsCard key={item.title + i} item={item} />;
        })}
      </ul>
    </section>
  );
}
