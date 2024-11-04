"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[25rem] md:h-[30rem]  flex items-center justify-center ">
      <PinContainer
        title="Students Confession"
        href="https://mrcet-confession.vercel.app"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] sm:basis-1/2 md:w-[60rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Students Confession
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              "Students Confession" is an anonymous platform for college students to share thoughts, experiences, and secrets, fostering open, judgment-free communication and connection.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-xl mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
