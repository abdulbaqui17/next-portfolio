"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import icon from "@/public/idea.png"

export function IcardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[27rem] rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    Idea Submission Website:
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm "
                >
                    A collaborative platform for sharing and submitting ideas, aimed at encouraging user participation and feedback. It simplifies the process of idea sharing and provides a space for innovative thinking.
                </CardItem>
                <CardItem translateZ="100" className="w-full">
                    <Image
                        src={icon}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://mern-project-tau-six.vercel.app/sign-up"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://mern-project-tau-six.vercel.app/sign-up"
                        className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                    >
                        Visit Now
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
