import { PaginationItemTypes } from "@/types/common";

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
