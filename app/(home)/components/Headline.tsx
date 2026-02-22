"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { NewsItem } from "@/types/news";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function Headline({ news }: { news: NewsItem[] }) {
  const headlineNews = news;

  const [currentNews, setCurrentNews] = useState(0);

  const handleNext = () => {
    setCurrentNews((prev) => (prev + 1) % headlineNews.length);
  };

  const handlePrevious = () => {
    setCurrentNews((prev) => (prev === 0 ? headlineNews.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentNews]);

  return (
    <section className="py-18">
      <div className="flex flex-col lg:flex-row justify-between mb-11 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-body-md text-secondary-text">Headline</h2>
          <h1 className="text-display text-primary-text">
            {headlineNews[currentNews].title}
          </h1>
          <p className="text-body text-secondary-text">
            {headlineNews[currentNews].contentSnippet}
          </p>
          <span className="flex items-center gap-2 text-body-md text-secondary-text">
            <Calendar />
            {formatDate(headlineNews[currentNews].isoDate, "long")}
          </span>
          <Link
            href={headlineNews[currentNews].href}
            className="flex items-center gap-2 text-body-md text-primary hover:underline"
          >
            Baca Selengkapnya
            <ArrowRight />
          </Link>
        </div>
        <Image
          src={headlineNews[currentNews].image}
          alt={headlineNews[currentNews].title}
          width={550}
          height={300}
          className="rounded-2xl object-cover w-full lg:w-1/2 "
        />
      </div>
      <div className="flex justify-center gap-4 text-body-md text-primary-text">
        <ChevronLeft
          onClick={handlePrevious}
          className="cursor-pointer hover:text-primary transition-colors"
        />
        <span>{currentNews + 1}</span>
        <span>dari</span>
        <span>{headlineNews.length}</span>
        <ChevronRight
          onClick={handleNext}
          className="cursor-pointer hover:text-primary transition-colors"
        />
      </div>
    </section>
  );
}
