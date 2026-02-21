"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Logo from "../icons/Logo";
import { navItems } from "@/constants/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollDirection, isAtTop } = useScrollDirection();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const isVisibleClass =
    scrollDirection === "down" ? "-translate-y-full" : "translate-y-0";

  const isStickyActive = scrollDirection === "up" && !isAtTop;

  const checkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ease-in-out ${isVisibleClass} ${isStickyActive ? "bg-primary text-background shadow-lg" : "bg-background text-secondary-text"}`}
      >
        <nav className="mx-auto lg:max-w-330 flex flex-row px-6 lg:px-4 py-7 justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Logo
              className={isStickyActive ? "text-background" : "text-primary"}
            />
            <span
              className={`text-xl font-semibold ${isStickyActive ? "text-background" : "text-foreground"}`}
            >
              Berita Kini
            </span>
          </Link>
          <ul
            className={`hidden lg:flex gap-8 text-body-medium items-center ${isStickyActive ? "text-background" : "text-secondary-text"}`}
          >
            {navItems.map((item) => {
              const isActive = checkActive(item.href);

              const activeColor = isStickyActive
                ? "text-background font-bold"
                : "text-primary font-medium";
              const hoverColor = isStickyActive
                ? "hover:text-background/60"
                : "hover:text-primary";
              return (
                <li key={item.text}>
                  <Link
                    className={`transition-colors ${hoverColor} ${isActive ? activeColor : ""}`}
                    href={item.href}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden cursor-pointer ${isStickyActive ? "text-background" : "text-secondary-text"}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <div
        className={`
          fixed inset-0 top-[88px] z-40 bg-background transition-all duration-300 ease-in-out lg:hidden
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <ul className="flex flex-col p-10 gap-8 h-full overflow-y-auto">
          {navItems.map((item) => {
            const isActive = checkActive(item.href);
            return (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className={`text-body-xl hover:text-primary transition-colors ${isActive ? "text-primary" : "text-secondary-text"}`}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
