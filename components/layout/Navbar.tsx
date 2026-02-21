"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../icons/Logo";
import { navItems } from "@/constants/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex flex-row py-7 justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="text-primary" />
          <span className="flex text-xl font-semibold">Berita Kini</span>
        </Link>
        <ul className="hidden lg:flex gap-8 text-body-medium items-center text-secondary-text">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.text}>
                <Link
                  className={`hover:text-primary transition-colors ${isActive ? "text-primary text-body-md" : ""}`}
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
