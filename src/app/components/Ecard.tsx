"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import icon from "@/public/ecommors.png"

export function EcardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[27rem] rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    eCommerce UI:
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm "
                >
                    A clean, intuitive eCommerce user interface crafted to enhance the online shopping experience. With easy navigation and product displays, this project prioritizes user engagement and accessibility.
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
                        href="https://e-commerce-ui-six-theta.vercel.app/"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://e-commerce-ui-six-theta.vercel.app/"
                        className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                    >
                        Visit Now
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
