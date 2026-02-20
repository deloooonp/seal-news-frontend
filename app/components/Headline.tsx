import Image from "next/image";

import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { NewsItem } from "@/types/news";

export default function Headline({ news }: { news: NewsItem[] }) {
  const headlineNews = news.slice(0, 5);
  return (
    <section className="py-18">
      <div className="flex justify-between mb-11">
        <div className="flex flex-col gap-4 max-w-lg">
          <h2 className="text-body-md text-secondary-text">Headline</h2>
          <h1 className="text-display text-primary-text">
            {headlineNews[0].title}
          </h1>
          <p className="text-body text-secondary-text">
            {headlineNews[0].description}
          </p>
          <span className="flex items-center gap-2 text-body-md text-secondary-text">
            <Calendar />
            {new Date(headlineNews[0].isoDate).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <button className="flex items-center gap-2 text-body-md text-primary">
            Baca Selengkapnya
            <ArrowRight />
          </button>
        </div>
        <Image
          src={headlineNews[0].image}
          alt={headlineNews[0].title}
          width={550}
          height={300}
          className="rounded-2xl"
        />
      </div>
      <div className="flex justify-center gap-4 text-body-md text-primary-text">
        <ChevronLeft />
        <span>1</span>
        <span>dari</span>
        <span>{headlineNews.length}</span>
        <ChevronRight />
      </div>
    </section>
  );
}
