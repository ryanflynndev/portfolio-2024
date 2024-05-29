import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div className="max-w-screen-xl mx-auto text-white font-bold py-4 font-inter">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/portfolio-2022"className='flex items-center py-2 px-3'>
                                <Image 
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    priority
                                    src="/svgs/rfLogo.svg"
                                    height={64}
                                    width={64}
                                    alt="Ryan Flynn Logo"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a href="/portfolio-2022#projects" className="flex items-center space-x-1">
                            <Image 
                                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                priority
                                src="/svgs/projectsLogo.svg"
                                height={32}
                                width={32}
                                alt="My Projects Logo"
                            />
                            <text className='hover:text-red-300 duration-300'>Projects</text>
                        </a>
                        <a href="https://github.com/ryanflynndev" className="flex items-center space-x-1">
                            <Image 
                                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                priority
                                src="/svgs/githubLogo.svg"
                                height={32}
                                width={32}
                                alt="GitHub Logo"
                            />
                            <text className='hover:text-green-300 duration-300'>GitHub</text>
                        </a>
                        <a href="https://ryanflynndev.medium.com/" className="flex items-center space-x-1">
                            <Image 
                                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                priority
                                src="svgs/blogLogo.svg"
                                height={32}
                                width={32}
                                alt="Medium Logo"
                            />
                            <text className='hover:text-yellow-300 duration-300'>Blog</text>
                        </a>
                        <a href="https://www.linkedin.com/in/ryanflynnofficial/" className="flex items-center space-x-1">
                            <Image 
                                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                priority
                                src="/svgs/linkedinLogo.svg"
                                height={32}
                                width={32}
                                alt="LinkedIn Logo"
                            />
                            <text className='hover:text-blue-300 duration-300'>Linkedin</text>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center px-3">
                    </div>
                </div>
            </div>
        </nav>
    );
}