import { Dot } from "lucide-react";
import React from "react";
import Image from "next/image";

import { NewsItem } from "@/types/news";

export default function PopularNews({ news }: { news: NewsItem[] }) {
  const popularNews = news.slice(0, 3);
  return (
    <section className="py-18 flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="bg-primary w-1 h-8 rounded-xl"></div>
        <h2 className="text-section-title">Popular News</h2>
      </div>
      <ul className="flex flex-col lg:flex-row gap-6 items-center">
        {popularNews.map((item, i) => (
          <React.Fragment key={item.title + i}>
            <li className="w-full lg:w-1/3 relative flex gap-4 p-4 cursor-pointer hover:bg-primary/15 hover:scale-105 rounded-xl transition-all duration-250">
              <span className="rounded-full bg-foreground absolute left-1 top-1 p-2 text-background z-10 w-9 h-9 items-center justify-center flex text-body-lg">
                {i + 1}
              </span>
              <div className="relative h-40 w-48 lg:h-32 lg:w-40 shrink-0">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-body-md line-clamp-3">{item.title}</h2>
                <div className="flex md:flex-row flex-col tracking-tight">
                  <span className="text-body-sm text-primary">
                    {item.category.slice(0, 1).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                  <Dot className="hidden md:block text-secondary-text" />
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
              <div className="hidden lg:block w-px h-20 bg-secondary-text shrink-0"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
