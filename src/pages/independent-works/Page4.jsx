import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import page4 from "../../assets/page4.png";

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
            Internet Connection Checker
          </motion.h1>
        </div>
      </section>
      {/*=================================*/}
      {/*==== Image ================*/}
      {/*=================================*/}
      <motion.section
        className="drop-shadow-2xl relative bg-white h-64 lg:h-screen-90 w-[80%] mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${page4})` }}
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
            Embark on a seamless online experience with the Internet Connection
            Checker, a JavaScript project intertwined with the intricacies of
            the Document Object Model (DOM) and browser networks. Crafted during
            my JavaScript learning journey, this application adds a layer of
            connectivity awareness to your browsing experience.
          </p>
          {/*  */}

          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Functionalities
            </h2>
            {/* • */}
            <p className="text-lg">
              <b>• Connection Detection: </b> Constantly monitor your internet
              connection status, providing real-time feedback on your
              connectivity.
              <br />
              <br />
              <b>• Alert Window:</b> If you lose connection, an alert window
              gracefully appears, notifying you of the interruption. This window
              prompts you to "Reconnect Now" through a user-friendly button.
              <br />
              <br />
              <b>• Automatic Reconnection: </b> The application takes the
              initiative to reconnect on its own, ensuring a seamless return to
              online activities without requiring user intervention.
              <br />
              <br />
              <b>• Persistent Alert: </b> The alert window persists until a
              restored connection is detected, ensuring you stay informed about
              your network status.
              <br />
              <br />
              <b>• Restored Connection Notification: </b> Upon regaining
              connection, a new window emerges, declaring a "Restored
              Connection." The reconnect button becomes disabled, signaling the
              successful restoration of network access.
            </p>
          </div>
          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Learning Journey
            </h2>
            <p className="text-lg">
              This project encapsulates a pivotal phase in my JavaScript
              learning journey, where I delved into the interplay between the
              DOM and browser networks. Navigating the dynamics of internet
              connectivity, the Internet Connection Checker showcases my
              commitment to creating applications that enhance the user
              experience by seamlessly adapting to varying network conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
