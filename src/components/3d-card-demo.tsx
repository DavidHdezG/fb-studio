"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "./ui/button";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

type ThreeDCardDemoProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export default function ThreeDCardDemo({ title, description, imageUrl, imageHint }: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white font-headline"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            data-ai-hint={imageHint}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="#"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Aprende más →
          </CardItem>
          <CardItem
            translateZ={20}
            as="div"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              Contáctanos
            </HoverBorderGradient>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
