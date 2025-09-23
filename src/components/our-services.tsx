"use client";
import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function OurServices() {
  const items = [
    {
      title: "Desarrollo Web",
      image: "https://picsum.photos/seed/web-dev/1000/1000",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      imageHint: "abstract lines",
    },
    {
      title: "Desarrollo de Aplicaciones",
      image: "https://picsum.photos/seed/app-dev/1000/1000",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      imageHint: "mobile screen",
    },
    {
      title: "Diseño UI/UX",
      image: "https://picsum.photos/seed/ui-ux/1000/1000",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      imageHint: "wireframe sketch",
    },
    {
      title: "Soluciones en la Nube",
      image: "https://picsum.photos/seed/cloud/1000/1000",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      imageHint: "cloud computing",
    },
    {
      title: "Integración de IA",
      image: "https://picsum.photos/seed/ai/1000/1000",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      imageHint: "robot brain",
    },
    {
      title: "DevOps",
      image: "https://picsum.photos/seed/devops/1000/1000",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      imageHint: "infinity loop",
    },
    {
      title: "Comercio Electrónico",
      image: "https://picsum.photos/seed/ecommerce/1000/1000",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      imageHint: "shopping cart",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex h-[600px] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Arrastra las tarjetas para explorar nuestros servicios
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            height="1000"
            width="1000"
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            data-ai-hint={item.imageHint}
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
