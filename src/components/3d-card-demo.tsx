"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

type ThreeDCardDemoProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export default function ThreeDCardDemo({ title, description, imageUrl, imageHint }: ThreeDCardDemoProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const navbarHeight = 80; // h-20 = 80px
      const elementPosition = elem.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <CardContainer className="inter-var w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-600 dark:text-white font-headline"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm md:text-base max-w-full mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-3 sm:mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-40 sm:h-48 md:h-56 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            data-ai-hint={imageHint}
          />
        </CardItem>
        <div className="flex justify-end items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {/* <CardItem
            translateZ={20}
            as="a"
            href="#"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Aprende más →
          </CardItem> */}
          <CardItem
            translateZ={20}
            as="div"
          >
            <Link href="#contact" onClick={handleScroll}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2"
              >
                Contáctanos
              </HoverBorderGradient>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
