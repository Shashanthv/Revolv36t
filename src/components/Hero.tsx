// src/components/Hero.tsx
'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden pb-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Elevate Your Brand in Bangalore with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-pink-500 dark:from-purple-300 dark:to-pink-200">
                Digital Excellence
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We help ambitious businesses grow with innovative digital marketing, creative content, and data-driven strategies.
            </p>
          </>
        }
      >
        <div className="relative w-full h-full">
          <Image
            src="/hero-image.jpg"
            alt="Digital marketing agency hero"
            fill
            className="mx-auto rounded-2xl object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
};