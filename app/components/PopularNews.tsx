import { NewsItem } from "@/types/news";
import { Dot } from "lucide-react";
import React from "react";

export default function PopularNews({ news }: { news: NewsItem[] }) {
  const popularNews = news.slice(0, 3);
  return (
    <section className="py-18 flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="bg-primary w-1 h-8 rounded-xl"></div>
        <h2 className="text-section-title">Popular News</h2>
      </div>
      <ul className="flex gap-6 items-center">
        {popularNews.map((item, i) => (
          <React.Fragment key={item.title + i}>
            <li className="min-w-100 relative flex gap-4 p-4 cursor-pointer">
              <span className="rounded-full bg-foreground absolute left-1 top-1 p-2 text-background z-10 w-9 h-9 items-center justify-center flex text-body-lg">
                {i + 1}
              </span>
              <img
                className="h-32 w-40 rounded-xl"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-body-md">{item.title}</h2>
                <div className="flex gap-1">
                  <span className="text-body-sm text-primary">Politik</span>
                  <Dot className="text-secondary-text" />
                  <span className="text-body-sm text-secondary-text">
                    {new Date(item.isoDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </li>
            {i < popularNews.length - 1 && (
              <div className="w-px h-20 bg-secondary-text shrink-0"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
