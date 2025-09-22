import Navbar from "@/components/navbar";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import CarouselDemo from "@/components/carousel-demo";
import ThreeDCardDemo from "@/components/3d-card-demo";
import SignupFormDemo from "@/components/signup-form-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TypewriterEffect from "@/components/typewriter-effect";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full">
      <Navbar />
      <HeroParallaxDemo />

      <section id="clients" className="py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline">
          Trusted by the Best
        </h2>
        <CarouselDemo />
      </section>

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline">
            About Bifrost Code
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-headline text-primary">Our Vision</h3>
              <TypewriterEffect text="To be the seamless nexus between innovative ideas and transformative technology, empowering businesses to thrive in the digital age." />
              <p className="text-muted-foreground">
                We envision a world where technology is not a barrier but a catalyst for growth. Our goal is to make sophisticated technology accessible and actionable for businesses of all sizes, helping them to not just compete but to lead in their respective industries.
              </p>
            </div>
            <div>
              <ThreeDCardDemo
                title="Future is Now"
                description="Unleash the power of tomorrow's technology, today."
                imageUrl="https://picsum.photos/seed/vision/1000/1000"
                imageHint="futuristic technology"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div className="order-2 md:order-1">
              <ThreeDCardDemo
                title="Built on Trust"
                description="Reliable solutions for your most critical needs."
                imageUrl="https://picsum.photos/seed/mission/1000/1000"
                imageHint="handshake deal"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl font-bold font-headline text-primary">Our Mission</h3>
               <TypewriterEffect text="To craft elegant, efficient, and effective software solutions that bridge the gap between business challenges and technological possibilities." />
              <p className="text-muted-foreground">
                Our mission is to understand the unique challenges of our clients and to deliver bespoke technology solutions that drive results. We are committed to excellence, innovation, and partnership, ensuring that every project we undertake is a resounding success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Hear from those who have experienced the Bifrost Code difference.
        </p>
        <AnimatedTestimonialsDemo />
      </section>
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline">
            Let&apos;s Build Together
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind? Or just want to say hello? Drop us a line and we&apos;ll get back to you as soon as possible.
          </p>
          <SignupFormDemo />
        </div>
      </section>

      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bifrost Code. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
