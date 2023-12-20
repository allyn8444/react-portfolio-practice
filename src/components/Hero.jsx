import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";
export default function Hero() {
  const delay = 1,
    initialOpacity = 0;
  const initialY = 30;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div>
        <header className="mb-8 lg:mb-0 pb-0 lg:pb-16">
          {/*=================================*/}
          {/*==== Hero =======================*/}
          {/*=================================*/}
          <div className="container relative pt-16 lg:py-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-12 lg:col-span-8 z-10 relative">
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-8 lg:mb-16"
                // variants={{
                //   initial: {
                //     opacity: 0,
                //     scale: 0,
                //   },
                //   show: {
                //     opacity: 1,
                //     scale: 1,
                //   },
                // }}
                // initial="initial"
                // animate="show"
                // transition={{
                //   duration: 1,
                //   delay: 0.5,
                //   ease: "easeIn",
                // }}
                initial={{
                  y: initialY,
                  opacity: initialOpacity,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: delay,
                  type: "spring",
                  damping: 7,
                  stiffness: 70,
                }}
              >
                <span className="text-[#808080]">
                  Navigating tech horizons with
                </span>{" "}
                Allyn Ralf Ledesma
              </motion.h1>
              {/* buttons */}
              <motion.div
                className="grid grid-cols-12 md:grid-cols-8 gap-8"
                initial={{
                  y: initialY,
                  opacity: initialOpacity,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: delay,
                  type: "spring",
                  damping: 7,
                  stiffness: 70,
                }}
              >
                {/* === TO ABOUT BTN === */}
                <Link
                  to="/about"
                  className="bg-primary hover:bg-transparent col-span-6 md:col-span-2 lg:col-span-2 px-8 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full self-start no-underline transition-colors duration-150"
                >
                  About Me
                </Link>
                {/* ==== LEARN MORE ==== */}
                <span className="col-span-6 md:col-span-2 lg:col-span-2 relative">
                  Learn more about how I can help
                  {/* ==== arrow down idk ===== */}
                  <a href="#introduction" smooth>
                    <svg
                      className="w-10 absolute top-8 -right-2 arrow-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 39"
                    >
                      <path
                        d="M1.516 2.033c1.748 0 26.808-4.08 26.808 22.146v11.655"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        d="M36.484 28.841 28.325 37l-8.159-8.159"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </span>
              </motion.div>
            </div>
            {/* ====== IMAGE ======*/}

            <motion.img
              className="hero-img hidden lg:block md:border md:border-[#201F27] relative md:bg-white md:rounded-full lg:absolute top-8 lg:top-48 lg:-right-44 z-0 col-span-12 max-w-md md:max-w-5xl lg:max-w-full"
              src={Avatar}
              alt="hero-img"
              initial={{
                y: initialY,
                opacity: initialOpacity,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 2,
                type: "spring",
                damping: 7,
                stiffness: 70,
              }}
            />
          </div>
        </header>
        {/*=================================*/}
        {/*==== Introduction ===============*/}
        {/*=================================*/}
        <section
          id="introduction"
          className="bg-[#ededed] pt-8 lg:pt-32 pb-8 lg:pb-20"
        >
          <div
            className="container relative py-16 grid grid-cols-12 gap-8"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <h2 className="relative bg-[#ededed] text-xl col-span-12 lg:col-span-12">
              A dedicated BS Computer Science student
              <br />
              with a coding passion since 10th Grade. Proficient in web
              development and a diverse tech stack, I've contributed as a
              Webflow Developer and interned as a Software Engineer. Beyond
              tech, I explore philosophy and psychology, eager to contribute and
              build something extraordinary together.
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}
