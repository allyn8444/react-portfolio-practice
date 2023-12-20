import { useInView } from "framer-motion";
import { useRef } from "react";
import Carousel from "./Carousel";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section
        className="relative bg-white pt-16 lg:pt-28"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="container mx-auto relative">
          <h2 className="text-xl lg:text-2xl font-medium col-span-12 lg:col-span-6 pb-12">
            I can help you with Development using:
          </h2>
        </div>
      </section>
      <Carousel />
    </>
  );
}
