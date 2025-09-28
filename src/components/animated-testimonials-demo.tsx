import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Desarrollo de sitio web corporativo para empresa manufacturera especializada en contenedores para transformadores eléctricos. Incluye catálogo de productos, información técnica y sistema de cotizaciones automático.",
      name: "Grupo Arga",
      designation: "Empresa Manufacturera - Contenedores para Transformadores",
      src: "https://media.licdn.com/dms/image/v2/D560BAQGCtM55VE47Qw/company-logo_400_400/company-logo_400_400/0/1705693868614/grupo_arga_logo?e=2147483647&v=beta&t=ZHrlBNtTMtTpLEOiijYm4acquF9-qfcbr2IveSAj6hs",
    },
    {
      quote:
        "Creación de plataforma web personal para instructora de yoga independiente. Sitio incluye horarios de clases, información sobre diferentes tipos de yoga, sistema de reservas online y blog con contenido wellness.",
      name: "Paoyoga",
      designation: "Instructora Personal de Yoga",
      src: "/paoyoga.jpg",
    },
    {
      quote:
        "Configuración de sitio existente para la integración de una plataforma de aprendizaje online. Incluye contenido educativo, sistema de cursos y acceso a recursos de aprendizaje en distintos formatos, como videos, pdfs y enlaces externos.",
      name: "Love & Wellness Counseling",
      designation: "Asesoramiento en salud mental",
      src: "/love-wellness.jpg",
    },
    {
      quote:
        "Diseño y desarrollo de sitio web institucional para la asociación oficial de karate japonés. Plataforma incluye información sobre dojos afiliados, calendario de eventos, sistema de graduaciones y recursos educativos sobre karate tradicional.",
      name: "JKA Mexico",
      designation: "Japan Karate Association - México",
      src: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/297834521_607948257598769_8605366451287967204_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=h0i7IweEIy4Q7kNvwEJb5B3&_nc_oc=Adkafjhb22RkGsBVx0zrj6zR9SV1Cv0LEdqP1aPvkDqrhcwbSAhpZxwAM611b9oUJt_kLgCd5XubLKi7FsNcQEb5&_nc_zt=23&_nc_ht=scontent.fcuu2-1.fna&_nc_gid=6A6Zewsxhu7PU7LLo8NZvQ&oh=00_AfbX8__C0e3O_rLF7LjYHLW4jzN53vmn7KksGpPP4_416g&oe=68D8B749",
    },
];
  return <AnimatedTestimonials testimonials={testimonials} />;
}