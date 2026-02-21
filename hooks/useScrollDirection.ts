"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const threshold = 10;
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      setIsAtTop(scrollY < 10);

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection && scrollY > 0) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return { scrollDirection, isAtTop };
}
