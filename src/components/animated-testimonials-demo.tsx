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
      src: "/jka.jpg",
    },
];
  return <AnimatedTestimonials testimonials={testimonials} />;
}