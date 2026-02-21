import { PaginationItemTypes } from "@/types/common";
import { NewsItem } from "@/types/news";

export const getPaginationItems = ({
  currentPage,
  totalPages,
}: PaginationItemTypes) => {
  const pages: (number | string)[] = [];

  const delta = 1;
  const rangeStart = Math.max(0, currentPage - delta);
  const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

  if (rangeStart > 0) {
    pages.push(0);
    if (rangeStart > 1) pages.push("...");
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i);
  }

  if (rangeEnd < totalPages - 1) {
    if (rangeEnd < totalPages - 2) pages.push("...");
    pages.push(totalPages - 1);
  }

  return pages;
};

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export const getNewsHref = (category: string, title: string) =>
  `/${category}/${slugify(title)}`;

export const filterCurrentNews = (
  news: NewsItem[],
  currentSlug: string,
  limit?: number,
) => {
  const filtered = news.filter((item) => !item.href.endsWith(currentSlug));

  return limit ? filtered.slice(0, limit) : filtered;
};
