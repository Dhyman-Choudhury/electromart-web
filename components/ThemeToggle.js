"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  // Ensure this runs only on client
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch by rendering a static button first
    return (
      <button className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700">
        ...
      </button>
    );
  }

  return (
    <button
      className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
