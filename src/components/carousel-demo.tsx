"use client";

import Carousel from "@/components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Japan Karate Association México",
      src: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/475162836_1167055355021387_5306796760412903960_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=fPDTvelhZe8Q7kNvwEej8Zo&_nc_oc=AdmDf-Sn-4VDCDBcNS8bpHSH1XmVnlBL8RZ5bVbawhhyBdDRT6ESsbUzl8zyL5dvGv68SXiHARRehayugTuZlaya&_nc_zt=23&_nc_ht=scontent.fcuu2-1.fna&_nc_gid=M-I1uL1FDkFYQiBlQdyeBw&oh=00_AfYOKZxYuFIytbmsw3mA81lvCW91s3weDyrc1qejdD6MBQ&oe=68D8CBD5",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
    {
      title: "Paoyoga",
      src: "https://paoyoga.fit/_next/image?url=%2Fassets%2Frespira_y_conecta.JPG&w=1920&q=75",
      width: 200,
      height: 100,
      imageHint: "company logo",
    },
    {
      title: "Groupo Arga",
      src: "https://media.licdn.com/dms/image/v2/D563DAQFp8kI4oA9TOg/image-scale_191_1128/image-scale_191_1128/0/1705694394772/grupo_arga_cover?e=2147483647&v=beta&t=GYW_rLvXw6aX92O-t89Mn62CAJFEID-qTsaOy-1nct0",
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
