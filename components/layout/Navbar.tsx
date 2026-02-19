import Link from "next/link";

import Logo from "../icons/Logo";
import { navItems } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header>
      <nav className="flex flex-row py-7 justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="text-primary" />
          <span className="flex text-xl font-semibold">Berita Kini</span>
        </Link>
        <ul className="flex gap-8 text-body-medium items-center text-primary-text">
          {navItems.map((item) => (
            <li key={item.text}>
              <Link
                className="hover:text-primary transition-colors duration-300"
                href={item.href}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
