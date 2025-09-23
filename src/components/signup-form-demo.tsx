"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { WobbleCard } from "./ui/wobble-card";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <WobbleCard containerClassName="max-w-2xl mx-auto">
    <div className="shadow-input mx-auto w-full max-w-2xl rounded-none bg-transparent p-4 md:rounded-2xl md:p-8">
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <LabelInputContainer className="w-full">
            <Label htmlFor="firstname">Nombre</Label>
            <Input id="firstname" placeholder="Ana" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="w-full">
            <Label htmlFor="lastname">Apellido</Label>
            <Input id="lastname" placeholder="García" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input id="email" placeholder="ana.garcia@ejemplo.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" placeholder="Tu mensaje aquí..." />
        </LabelInputContainer>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full justify-center"
          type="submit"
        >
          Enviar Mensaje &rarr;
        </HoverBorderGradient>

      </form>
    </div>
    </WobbleCard>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
