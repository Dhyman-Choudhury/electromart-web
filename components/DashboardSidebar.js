"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
 

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-[#C5B0CD] text-white p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
                <Image
                  src="/icon2.png"
                  alt="ElectroMart Logo"
                  width={62}
                  height={62}
                  className="rounded"
                />
                <Link href="/">
                  Electro<span className="text-[#113F67]">Mart</span>
                </Link>
              </div>
        <nav className="flex flex-col ml-5 mt-10 gap-4">
          <Link href="/dashboard/add-product" className="text-black btn_primary rounded-lg py-1 px-2 hover:underline">
            Add Product
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-left hover:underline"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Theme toggle at the bottom */}
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
}
