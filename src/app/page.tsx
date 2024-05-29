'use client';

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState(0);

  const titles = ['code', 'design', 'build', 'create'];

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(title);
      setTitle(title => title + 1);
      
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (title > 3) {
    setTitle(title => title = 0);
  }
  return (
    <div className="h-screen w-screen bg-black overflow-auto overflow-x-hidden">
      <Navbar />
      <div className="pt-32 max-w-5xl text-left mx-auto relative min-h-screen w-screen flex flex-col">
        <h2 className="font-bold text-6xl text-white font-inter pt-20" >
          Hi! 👋
        </h2>
        <div className="flex flex-row items-center">
          <h2 className="font-bold text-2xl text-white font-inter pt-5" >
            My name is Ryan Flynn and I like to
          </h2>
          <h2 className="font-bold text-2xl text-white font-inter">
          {titles[title]}
          </h2>
        </div>
      </div>
    </div>
  );
}
