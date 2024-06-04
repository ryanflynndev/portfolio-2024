'use client';

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className='flex flex-col md:flex-row mx-auto min-h-screen max-w-6xl items-center md:items-start py-40'>
        <div className="pt-32 md:pt-20 flex-1 animate-float-in-left">
          <h2 className="font-bold text-6xl text-white font-inter">
            Hi! 👋
          </h2>
          <div className="pt-8">
            <h3 className="font-bold text-2xl text-white font-inter inline-block">
              My name is Ryan Flynn and I like to
            </h3>
            <h3 className="font-bold text-2xl text-white font-inter px-1 bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-orange-500 via-purple-500 animate-gradient-x inline-block">
              {titles[title]}
            </h3>
            <h3 className="font-bold text-2xl text-white font-inter inline-block">
              great experiences.
            </h3>
          </div>
          <p className='pt-8 text-white pb-4'>
            I'm currently a full-stack engineer at Envoy where I help build the future of the workplace. I'm passionate about building products that help make people's lives easier. I'm also a huge fan of design and love to create beautiful and functional interfaces.
          </p>
          <a
            href="https://github.com/ryanflynndev" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-4 border border-green-300 text-green-300 font-semibold rounded-md transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
          >
            Check out my GitHub
          </a>
        </div>
        <div className="relative flex-1 flex justify-center md:justify-end md:pl-8 animate-float-in-right">
          <div className='relative z-20 p-1 pt-8'>
            <Image
              height={400}
              width={400}
              src='/pngs/me.png'
              alt='Picture of Ryan Flynn'
              className='rounded-md object-cover shadow-lg border-1'
            />
          </div>
          <div className="absolute top-6 left-16 w-[400px] h-[400px] border-4 border-purple-300 hover:bg-purple-300 rounded-md z-10"></div>
        </div>
      </div>
    </div>
  );
}
