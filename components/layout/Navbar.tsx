"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import Logo from "../icons/Logo";
import { navItems } from "@/constants/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollDirection, isAtTop } = useScrollDirection();

  const isVisibleClass =
    scrollDirection === "down" ? "-translate-y-full" : "translate-y-0";

  const isStickyActive = scrollDirection === "up" && !isAtTop;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ease-in-out ${isVisibleClass} ${isStickyActive ? "bg-primary text-background shadow-lg" : "bg-background text-secondary-text"}`}
    >
      <nav className="mx-auto lg:max-w-330 flex flex-row px-6 lg:px-4 py-7 justify-between">
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
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

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
        <Menu className="lg:hidden text-secondary-text" />
      </nav>
    </header>
  );
}
