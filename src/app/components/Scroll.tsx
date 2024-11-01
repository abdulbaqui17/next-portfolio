"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import icon from "@/app/Screenshot.png"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold dark:text-white">
              Abdul Baqui <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none dark:text-white">
                Software Developer
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={icon}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto bg-black rounded-xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
