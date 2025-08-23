"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import Loader from "@/components/Loader";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // redirect if not logged in
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader/>;
  }

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
