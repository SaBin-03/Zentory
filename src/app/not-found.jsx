"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-100 px-4">
      <div className="text-center max-w-md space-y-6">
        <h1 className="text-8xl font-black tracking-widest text-transparent bg-clip-text  drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Lost in the grid?
          </h2>
          <p className="text-black">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <p className="text-xs text-gray-500 italic">
            Redirecting to home page automatically in 5 seconds...
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 bg-shop_btn_dark_green rounded-lg hover:bg-shop_light_green active:scale-95 shadow-[0_4px_20px_rgba(37,99,235,0.2)]"
          >
            Take Me Home
          </Link>
        </div>
      </div>
    </div>
  );
}
