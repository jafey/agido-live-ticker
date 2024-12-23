"use client"

import { SignalIcon } from "@heroicons/react/24/solid";
import LiveTicker from "@/app/components/LiveTicker";
import React, { useEffect, useState } from "react";

export default function Home() {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000)
  }, []);

  return (
    <div>
      <header className="bordered">
        <div className="container mx-auto my-2">
          <div className="flex flex-wrap justify-between items-center mx-4">
            <div className="flex gap-2">
              <SignalIcon className="size-8"/> <h1> Agido Live Ticker</h1>
            </div>
            <div className="w-[160px] ml-10">{now.toLocaleString("de-de")}</div>
          </div>
        </div>
      </header>
      <main className="bordered">
        <div className="container mx-auto my-2 ">
          <LiveTicker/>
        </div>
      </main>
      <main className="bordered">
        <div className="container mx-auto my-2">
          <div className="mx-4">
            <div className="bg-gray-300 rounded w-5/12 h-6 mb-3 mt-4"></div>
            <div className="bg-gray-300 rounded w-11/12 h-4 mb-2"></div>
            <div className="bg-gray-300 rounded w-8/12 h-4 mb-6"></div>
            <div className="flex flex-col sm:flex-row gap-8 mb-6">
              <div className="w-full">
                <div className="bg-gray-300 rounded w-full h-60 mb-4"></div>
                <div className="bg-gray-300 rounded w-11/12 h-6 mb-3"></div>
                <div className="bg-gray-300 rounded w-3/4 h-4 mb-2"></div>
                <div className="bg-gray-300 rounded w-1/2 h-4"></div>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 rounded w-full h-60 mb-4"></div>
                <div className="bg-gray-300 rounded w-11/12 h-6 mb-3"></div>
                <div className="bg-gray-300 rounded w-3/4 h-4 mb-2"></div>
                <div className="bg-gray-300 rounded w-1/2 h-4"></div>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 rounded w-full h-60 mb-4"></div>
                <div className="bg-gray-300 rounded w-11/12 h-6 mb-3"></div>
                <div className="bg-gray-300 rounded w-3/4 h-4 mb-2"></div>
                <div className="bg-gray-300 rounded w-1/2 h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="text-xs my-2 flex justify-center">Made with ♡ by Jannis Fey</div>
      </footer>
    </div>
  );
}
