"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        <Link href="/">Electro<span className="text-[#113F67]">Mart</span></Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Products
        </Link>

        {/* Toggle Login / Logout */}
        {!session ? (
          <button
            onClick={() => signIn()}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            Logout
          </button>
        )}

        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-700 dark:text-gray-200 focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
