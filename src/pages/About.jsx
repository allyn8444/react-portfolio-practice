import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Test from "../assets/me2.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* scroll progress bar */}

      {/*=================================*/}
      {/*==== Title ======================*/}
      {/*=================================*/}
      <section className="pt-8 md:pt-28 pb-8 lg:pb-8" ref={ref}>
        <div className="container grid grid-cols-12 gap-8">
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-medium col-span-12 lg:col-span-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeIn",
            }} 
          >
            Who am I?
          </motion.h1>
        </div>
      </section>
      {/*=================================*/}
      {/*==== Image ================*/}
      {/*=================================*/}
      <motion.section
        className="relative bg-white h-64 lg:h-screen-90 w-[80%] rounded-md mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${Test})` }}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          ease: "easeIn",
        }}
      ></motion.section>

      {/*=================================*/}
      {/*==== Content ====================*/}
      {/*=================================*/}
      <section
        className="mt-8 lg:mt-24 pb-16"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <div className="container grid grid-cols-12 gap-8">
          <p className="col-span-12 lg:col-span-10 text-lg font-medium mb-8">
            Engaging with diverse global ventures, I infuse my personal touch
            into crafting quality designs and captivating experiences.
          </p>
          {/* WHO AM I */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Who am I and a bit of my philosophy
            </h2>
            <div className="text-lg relative bg-white">
              <p className="indent-10">
                I'm <b>Allyn Ralf T. Ledesma</b>, a{" "}
                <b>
                  {" "}
                  BS Computer Science student at West Visayas State University
                </b>
                . With a passion for coding and technology, I've been honing my
                skills since Grade 10. While my main focus has been on coding,
                my recent exploration into cryptocurrency and NFTs has opened up
                a new world of possibilities. Despite the demands of my studies,
                my enthusiasm drives me to delve back into this exciting field.
              </p>
              <br />
              <p className="indent-10">
                Beyond my technical skills, I'm a dedicated learner fascinated
                by <b>philosophy and psychology</b>, particularly human nature
                and personality theories. I enjoy expanding my knowledge through
                online courses, informative videos, and books. I am excited to
                contribute my skills and expand my expertise in the dynamic
                world of technology. Let's build something amazing together!
              </p>
            </div>
          </div>
          {/* CAREER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Past career experiences
            </h2>
            <div className="text-lg relative bg-white">
              <p className="mb-10">
                <b>SOFTWARE ENGINEER INTERN</b>
                <br />
                The BLOKC · Internship
                <br />
                Jul 2023 - Aug 2023 <br />
                <br />
                • Developed a web-based digital card to highlight The Blokc's
                team information, including Twitter, LinkedIn, Telegram, and
                email contacts.
                <br />• Collaborated closely with the front-end development,
                translating design concepts into responsive code to enhance user
                experience.
              </p>
              <hr />
              <p className="mt-10">
                <b>WEBFLOW DEVELOPER</b> <br />
                AB Design PH | 2022 <br />
                <a
                  href=" https://ab-design-ph.webflow.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://ab-design-ph.webflow.io/
                </a>
                <br />
                <br />
                Worked with a small team that specialized in developing
                websites, blogs, web applications, online portfolios,
                prototypes, branding system, graphics, prints and UI/UX
                wireframes.
                <br />
                <br />
                • Developed our website using Webflow
                <br />
                • Conferring with team to resolve conflict and improve website
                <br />
                • Learning and testing new technologies within Webflow
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
