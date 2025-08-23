"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/products"; // fallback

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-96 h-96 shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {/* Google Login */}

      {/* Static Admin Login */}
      <button 
        onClick={() => signIn("credentials", { 
          username: "admin", password: "pass123", callbackUrl 
        })}
        className="btn_primary px-4 py-2 rounded-lg"
      >
        Sign in as Admin
      </button>
    </div>
  );
}
