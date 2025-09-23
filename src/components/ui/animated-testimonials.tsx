"use client";

// Removed unused arrow icons since we're using dots instead
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  duration = 6000, // Default 6 seconds, configurable
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  duration?: number; // Duration in milliseconds
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // handlePrev removed since we're using dot navigation instead of arrows

  const handleDotClick = (index: number) => {
    setActive(index);
    if (autoplay) {
      setProgress(0); // Reset progress when manually changing
    }
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      let progressInterval: NodeJS.Timeout;
      let changeInterval: NodeJS.Timeout;

      // Calculate progress steps based on duration
      const progressUpdateInterval = 100; // Update every 100ms
      const totalSteps = duration / progressUpdateInterval;
      const progressStep = 100 / totalSteps;

      const startProgress = () => {
        setProgress(0);
        progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              return 0;
            }
            return prev + progressStep;
          });
        }, progressUpdateInterval);
      };

      const resetProgress = () => {
        setProgress(0);
        clearInterval(progressInterval);
        startProgress();
      };

      startProgress();
      changeInterval = setInterval(() => {
        handleNext();
        resetProgress();
      }, duration);

      return () => {
        clearInterval(progressInterval);
        clearInterval(changeInterval);
      };
    }
  }, [autoplay, duration]);

  const getRotateY = (index: number, isActive: boolean) => {
    if (!isClient) return 0; // Avoid hydration mismatch
    if (isActive) return 0;
    // Use index-based deterministic rotation to avoid hydration issues
    return ((index * 7) % 21) - 10;
  };
  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="relative">
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotateY(index, false),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: getRotateY(index, isActive(index)),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotateY(index, false),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Progress bar positioned below the cards */}
          {autoplay && (
            <div className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Dot indicators positioned below the progress bar */}
          <div className="absolute bottom-[-65px] left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === active
                    ? "bg-primary w-12 scale-110 shadow-lg"
                    : "bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          {/* Navigation dots positioned below image cards */}
        </div>
      </div>
    </div>
  );
};