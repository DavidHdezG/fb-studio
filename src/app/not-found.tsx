"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen w-full flex flex-col">
      {/* Header similar to navbar */}
      <header className="w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Bifrost Code Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold font-headline text-foreground">
                Bifrost <span className="text-primary">Code</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold font-headline text-primary/20 leading-none">
              404
            </h1>
          </div>

          {/* Error message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              Página No Encontrada
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Parece que el puente hacia esta página se ha desconectado. No te preocupes,
              te ayudamos a encontrar el camino de vuelta.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center space-x-2 px-2 py-1">
                <Home className="w-4 h-4" />
                <span>Ir al Inicio</span>
              </Link>
            </HoverBorderGradient>

            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver Atrás</span>
            </Button>
          </div>

          {/* Additional help */}
          <div className="mt-16 p-6 bg-secondary/20 rounded-lg border">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">¿Necesitas ayuda?</h3>
            <p className="text-muted-foreground mb-4">
              Si crees que esto es un error o necesitas asistencia, no dudes en contactarnos.
            </p>
            <Button variant="ghost" asChild>
              <Link href="/#contact">
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Bifrost Code. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}