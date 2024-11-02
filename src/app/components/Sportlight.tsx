import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { HeroScrollDemo } from "@/app/components/Scroll";
import { AnimatedPinDemo } from "./Card";


export function SpotlightPreview() {
    return (
        <div className="">
            <div className="max-h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className=" mx-auto relative w-full md:pt-20">

                    <HeroScrollDemo />
                    <div className="flex flex-col items-center text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            My Projects
                        </span>
                        <div className="md:grid grid-cols-3">
                            <AnimatedPinDemo />
                            <AnimatedPinDemo />
                            <AnimatedPinDemo />
                            <AnimatedPinDemo />
                            <AnimatedPinDemo />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
