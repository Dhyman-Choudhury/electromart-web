"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {/* Google Login */}
      <button 
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
      >
        Sign in with Google
      </button>

      {/* Static Admin Login */}
      <button 
        onClick={() => signIn("credentials", { 
          username: "admin", password: "pass123", callbackUrl: "/products" 
        })}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign in as Admin
      </button>
    </div>
  );
}
