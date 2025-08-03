"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import GoogleCalendarButton from "@/components/Shared/GoogleCalender";

const navItems = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "What we do",
    href: "/#what-we-do",
  },

  {
    title: "Services",
    href: "/#services",
  },

  {
    title: "Team",
    href: "/#team",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contacts",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-10 py-4 bg-[#050B16] text-white flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-green-600 p-2 rounded-xl"></div>
        <Link href="/" className="text-green-500 font-semibold text-xl">
          Shah Mubarak
        </Link>
      </div>

      {/* Middle: Nav Links (Desktop) */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
        {navItems.map(({ title, href }) => (
          <li key={title}>
            <Link href={href} className="hover:text-white transition-colors">
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Button (Desktop) */}
      <div className="hidden md:block space-x-2.5">
        <GoogleCalendarButton targetId="google-clander-button" />
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#050B16] text-white flex flex-col items-center space-y-4 py-4 md:hidden z-40 shadow-md">
          {navItems.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
          <Link href="/login">
            <Button onClick={() => setMenuOpen(false)}>Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
