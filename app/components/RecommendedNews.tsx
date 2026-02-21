"use client";

import { ChevronLeft, ChevronRight, Dot, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { NewsItem } from "@/types/news";
import { getPaginationItems, slugify } from "@/lib/utils";
import Link from "next/link";

export default function RecommendedNews({ news }: { news: NewsItem[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage >= totalPages - 1) return;
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage <= 0) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (i: number) => {
    setCurrentPage(i);
  };

  return (
    <section className="py-18 flex flex-col gap-8">
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary w-1 h-8 rounded-xl"></div>
          <h2 className="text-section-title">Rekomendasi Untuk Anda</h2>
        </div>
        <div className="flex justify-between gap-2 p-4 border border-stroke rounded-lg md:w-1/3">
          <input
            type="text"
            placeholder="Cari disini..."
            className="outline-none"
          />
          <Search />
        </div>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
        {currentNews.map((item, i) => {
          const href = `/${item.category}/${slugify(item.title)}`;
          return (
            <li key={item.title + i}>
              <Link
                href={href}
                className="hover:bg-primary/15 hover:scale-105 cursor-pointer transition-all duration-250 flex flex-col p-2 rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={276}
                  height={197}
                  className="rounded-xl object-cover"
                />
                <h2 className="text-body-lg text-primary-text line-clamp-3 mt-4 mb-3">
                  {item.title}
                </h2>
                <div className="flex flex-col md:flex-row">
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
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center text-secondary-text">
        <span className="text-body">
          Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {news.length}{" "}
          results
        </span>
        <ul className="flex items-center gap-1 md:gap-5 text-body-sm md:text-body-md">
          <li
            onClick={handlePrev}
            className={`flex items-center md:gap-2 cursor-pointer ${currentPage === 0 ? "opacity-50 pointer-events-none" : ""}`}
          >
            <ChevronLeft />
            Previous
          </li>
          {getPaginationItems({ currentPage, totalPages }).map(
            (page, index) => {
              if (page === "...") {
                return (
                  <li key={`dots-${index}`} className="cursor-default">
                    ...
                  </li>
                );
              }
              return (
                <li
                  key={index}
                  onClick={() => handlePageClick(page as number)}
                  className={`w-10 h-10 flex cursor-pointer justify-center items-center rounded-xl transition-all duration-200
          ${currentPage === page ? "bg-primary text-background" : "hover:bg-stroke/50"}`}
                >
                  {(page as number) + 1}
                </li>
              );
            },
          )}
          <li
            onClick={handleNext}
            className={`flex items-center md:gap-2 cursor-pointer ${currentPage === totalPages - 1 ? "opacity-50 pointer-events-none" : ""}`}
          >
            Next
            <ChevronRight />
          </li>
        </ul>
      </div>
    </section>
  );
}
