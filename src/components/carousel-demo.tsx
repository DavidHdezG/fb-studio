"use client";

import Carousel from "@/components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Client Alpha",
      src: "https://picsum.photos/seed/logo1/200/100",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
    {
      title: "Client Bravo",
      src: "https://picsum.photos/seed/logo2/200/100",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
    {
      title: "Client Charlie",
      src: "https://picsum.photos/seed/logo3/200/100",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
    {
      title: "Client Delta",
      src: "https://picsum.photos/seed/logo4/200/100",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
    {
      title: "Client Echo",
      src: "https://picsum.photos/seed/logo5/200/100",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  );
}
