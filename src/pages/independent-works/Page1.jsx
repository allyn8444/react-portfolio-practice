import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import page1 from "../../assets/page1.png";

export default function Page1() {
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
            Movies Web Search using API
          </motion.h1>
        </div>
      </section>
      {/*=================================*/}
      {/*==== Image ================*/}
      {/*=================================*/}
      <motion.section
        className="drop-shadow-2xl relative bg-white h-64 lg:h-screen-90 w-[80%] mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${page1})` }}
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
          <p className="relative bg-white col-span-12  text-lg mb-8">
            Welcome to my project showcasing a JavaScript program designed to
            enhance your movie-search experience on the web. In my journey of
            mastering APIs, I crafted this program to interact seamlessly with
            the TVMaze API, specifically utilizing the endpoint at
            https://api.tvmaze.com/search/shows.
          </p>
          {/*  */}

          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Key Features
            </h2>
            <p className="text-lg">
              <b>• Real-Time Results: </b> Interacting with the TVMaze API
              allows for real-time access to an extensive database of shows,
              ensuring accurate and up-to-date results. <br /> <br />
              <b> •Image Display: </b>The program dynamically displays images on
              the web page, adding visual appeal to the search results.
            </p>
          </div>
          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              How It Works
            </h2>
            <p className="text-lg">
              Upon entering a user's search query, the JavaScript program sends
              a request to the TVMaze API. The API responds with relevant show
              information, including images, which are then seamlessly
              integrated into the web page for the user to explore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
