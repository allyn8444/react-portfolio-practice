import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import page3 from "../../assets/page3.png";

export default function Page3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/*=================================*/}
      {/*==== Title ======================*/}
      {/*=================================*/}
      <section className="pt-8 md:pt-28 pb-8 lg:pb-8">
        <div className="container grid grid-cols-12 gap-8">
          {/* === BACK TO HOME  BTN === */}
          <Link
            to="/works"
            className="bg-primary hover:bg-transparent col-span-6 md:col-span-2 lg:col-span-2 px-8 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full self-start no-underline transition-colors duration-150"
          >
            Back to Works
          </Link>
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
            AB Design PH Team business website
          </motion.h1>
        </div>
      </section>
      {/*=================================*/}
      {/*==== Image ================*/}
      {/*=================================*/}
      <motion.section
        className="drop-shadow-2xl relative bg-white h-64 lg:h-screen-90 w-[80%] mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${page3})` }}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          ease: "easeIn",
        }}
      />
      {/*=================================*/}
      {/*==== Content ====================*/}
      {/*=================================*/}
      <section
        className="mt-8 lg:mt-24 pb-16"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="container grid grid-cols-12 gap-8">
          <p className="col-span-12 text-lg  mb-8">
            Step into the digital realm with the AB Design PH Team Business
            Website, a collaborative effort born during the pandemic in 2021. As
            the developer, alongside my two talented family members who
            contributed as fellow developers and a UI/UX designer, we crafted
            this dynamic portfolio using Webflow. <br /> Our website,
            accessible&nbsp;
            <a
              href="https://ab-design-ph.webflow.io/"
              target="_blank"
              className="text-red-500"
            >
              here
            </a>
            , is a testament to our proficiency in developing websites, blogs,
            web applications, online portfolios, prototypes, branding systems,
            graphics, prints, and UI/UX wireframes.
          </p>
          {/*  */}

          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Key Features
            </h2>
            {/* • */}
            <p className="text-lg">
              <b>• Collaborative Expertise:</b> Our team comprises developers
              and a UI/UX designer, pooling together diverse skills to deliver
              comprehensive services.
              <br />
              <br />
              <b>• Webflow Mastery:</b> Leveraging Webflow, we've seamlessly
              woven together the various elements of our portfolio, showcasing
              our prowess in this powerful web development platform.
              <br />
              <br />
              <b> • Specialized Services:</b> From website and blog development
              to web applications and UI/UX wireframes, our specialization spans
              a wide spectrum of digital solutions.
            </p>
          </div>
          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Learning and Testing
            </h2>
            <p className="text-lg">
              Our journey in creating the AB Design PH Team Business Website was
              not just about delivering a polished product but also about
              learning and testing new technologies within Webflow. The pandemic
              served as a backdrop for innovation, pushing us to explore and
              implement the latest features and functionalities in our projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
