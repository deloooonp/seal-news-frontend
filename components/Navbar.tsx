import Link from "next/link";

import { navItems } from "@/constants/navigation";

export default function Navbar() {
  return (
    <div className="flex flex-row py-7 justify-between">
      <Link href="/" className="flex gap-3">
        <img src="/logo.svg" alt="Berita Kini" className="h-11 w-auto" />
        <p className="flex items-center text-xl font-semibold">Berita Kini</p>
      </Link>
      <ul className="flex gap-8 text-body-medium items-center">
        {navItems.map((item) => (
          <Link
            className="hover:text-primary transition-colors duration-300"
            href={item.href}
            key={item.text}
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
}
