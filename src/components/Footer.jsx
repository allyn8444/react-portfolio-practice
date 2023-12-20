import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <footer className="bg-[#ededed]  pt-24 pb-8 bg-bg">
        <div className="container relative grid grid-cols-12 gap-8">
          {/* TITLE */}
          <div
            className="col-start-1 lg:col-start-4 col-span-12 lg:col-span-6 flex flex-col justify-center text-center mb-16 lg:mb-24"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            <h2 className="text-2xl lg:text-3xl font-medium">Get in touch</h2>
            <Link
              to="/contact"
              className="bg-primary hover:bg-transparent px-16 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full no-underline col-span-2 self-center transition-colors duration-150"
            >
              Let’s talk
            </Link>
          </div>
          {/* LINKS */}
          <div className="col-span-12 md:col-span-10 lg:col-span-8 col-start-1 md:col-start-2 lg:col-start-3 flex flex-col md:flex-row items-center justify-start md:justify-between space-y-4 md:space-y-0 text-lg font-medium mb-8">
            <a
              href="https://github.com/allyn8444"
              target="_blank"
              className="link"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ledesmaar/"
              target="_blank"
              className="link"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/allyn8444"
              target="_blank"
              className="link"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
              }}
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/n.yll.a/"
              target="_blank"
              className="link"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              Instagram
            </a>
          </div>
          {/* ALL RIGHTS RESERVED */}
          <div className="col-span-12 flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between space-y-4 md:space-y-0">
            <p>© 2023 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
