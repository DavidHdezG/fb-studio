"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { WobbleCard } from "./ui/wobble-card";

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    descripcion: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === "firstname" ? "nombre" : id === "message" ? "descripcion" : id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          descripcion: formData.descripcion,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setAlertType("success");
        setAlertMessage(result.message);
        setFormData({ nombre: "", email: "", empresa: "", descripcion: "" });
      } else {
        setAlertType("error");
        setAlertMessage(result.message);
      }

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      setAlertType("error");
      setAlertMessage("Error de conexión. Por favor intenta nuevamente.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <WobbleCard containerClassName="max-w-2xl mx-auto">
    <div className="shadow-input mx-auto w-full max-w-2xl rounded-none bg-transparent p-4 md:rounded-2xl md:p-8">
      {showAlert && (
        <div className={cn(
          "mb-4 p-4 rounded-lg border-l-4 transition-all duration-300 shadow-lg",
          alertType === "success"
            ? "bg-gradient-to-r from-primary/10 to-primary/5 border-primary text-primary-foreground dark:text-foreground"
            : "bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive text-destructive-foreground dark:text-foreground"
        )}>
          <div className="flex items-center">
            <div className={cn(
              "mr-3 p-1 rounded-full",
              alertType === "success"
                ? "bg-primary/20 text-primary"
                : "bg-destructive/20 text-destructive"
            )}>
              <span className="text-sm font-bold">
                {alertType === "success" ? "✓" : "⚠"}
              </span>
            </div>
            <p className={cn(
              "font-medium",
              alertType === "success" ? "text-primary dark:text-primary" : "text-destructive dark:text-destructive"
            )}>
              {alertMessage}
            </p>
          </div>
        </div>
      )}
      <form className="my-2" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">Nombre *</Label>
          <Input
            id="firstname"
            placeholder="Ana García"
            type="text"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Correo Electrónico *</Label>
          <Input
            id="email"
            placeholder="ana.garcia@ejemplo.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="empresa">Empresa (opcional)</Label>
          <Input
            id="empresa"
            placeholder="Mi Empresa S.A."
            type="text"
            value={formData.empresa}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Descripción del Proyecto *</Label>
          <Textarea
            id="message"
            placeholder="Describe tu proyecto aquí..."
            value={formData.descripcion}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"} &rarr;
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
