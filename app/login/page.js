"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/products";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {/* Google Login */}
      <button 
        onClick={() => signIn("google", { callbackUrl })}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
      >
        Sign in with Google
      </button>

      {/* Static Admin Login */}
      <button 
        onClick={() => signIn("credentials", { 
          username: "admin", password: "pass123", callbackUrl 
        })}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign in as Admin
      </button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginContent />
    </Suspense>
  );
}
