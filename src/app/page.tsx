import Navbar from "@/components/navbar";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import CarouselDemo from "@/components/carousel-demo";
import ThreeDCardDemo from "@/components/3d-card-demo";
import SignupFormDemo from "@/components/signup-form-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TypewriterEffect from "@/components/typewriter-effect";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import OurServices from "@/components/our-services";

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full">
      <Navbar />
      <section id="home">
        <HeroParallaxDemo />
      </section>

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 id="about-header" className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline">
            Acerca de Bifrost Code
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 id="vision-header" className="text-3xl font-bold font-headline text-primary">Nuestra Visión</h3>
              <TypewriterEffect text="Ser el nexo perfecto entre ideas innovadoras y tecnología transformadora, empoderando a las empresas para prosperar en la era digital." />
              <p className="text-muted-foreground">
                Imaginamos un mundo donde la tecnología no es una barrera sino un catalizador para el crecimiento. Nuestro objetivo es hacer que la tecnología sofisticada sea accesible y práctica para empresas de todos los tamaños, ayudándolas no solo a competir sino a liderar en sus respectivas industrias.
              </p>
            </div>
            <div>
              <ThreeDCardDemo
                title="El Futuro es Ahora"
                description="Libera el poder de la tecnología del mañana, hoy."
                imageUrl="https://picsum.photos/seed/vision/1000/1000"
                imageHint="futuristic technology"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div className="order-2 md:order-1">
              <ThreeDCardDemo
                title="Construido sobre Confianza"
                description="Soluciones confiables para tus necesidades más críticas."
                imageUrl="https://picsum.photos/seed/mission/1000/1000"
                imageHint="handshake deal"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 id="mission-header" className="text-3xl font-bold font-headline text-primary">Nuestra Misión</h3>
               <TypewriterEffect text="Crear soluciones de software elegantes, eficientes y efectivas que conecten los desafíos empresariales con las posibilidades tecnológicas." />
              <p className="text-muted-foreground">
                Nuestra misión es entender los desafíos únicos de nuestros clientes y entregar soluciones tecnológicas personalizadas que generen resultados. Estamos comprometidos con la excelencia, innovación y colaboración, asegurando que cada proyecto que emprendemos sea un éxito rotundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <h2 id="services-header" className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline">
          Nuestros Servicios
        </h2>
        <OurServices />
      </section>

      <section id="testimonials" className="py-20">
        <h2 id="testimonials-header" className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline">
          Nuestros Clientes
        </h2>
        {/* <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Escucha a quienes han experimentado la diferencia de Bifrost Code.
        </p> */}
        <AnimatedTestimonialsDemo />
      </section>
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 id="contact-header" className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline">
            Construyamos Juntos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Envíanos un mensaje y te responderemos lo antes posible.
          </p>
          <SignupFormDemo />
        </div>
      </section>

      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Bifrost Code. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
