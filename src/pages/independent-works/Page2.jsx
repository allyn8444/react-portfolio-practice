import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import page2 from "../../assets/page2.png";

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
            Color Gradient Generator / Picker
          </motion.h1>
        </div>
      </section>
      {/*=================================*/}
      {/*==== Image ================*/}
      {/*=================================*/}
      <motion.section
        className="drop-shadow-2xl relative bg-white h-64 lg:h-screen-90 w-[80%] mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${page2})` }}
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
            Dive into the world of color blending with my side project, the
            Color Gradient Generator/Picker. This endeavor unfolded during my
            exploration of the Document Object Model (DOM) alongside JavaScript,
            resulting in a dynamic and interactive tool for crafting captivating
            gradients. <br />
            You can accesss the GitHub file&nbsp;
            <a
              className="text-red-500"
              href="https://github.com/allyn8444/gradient-generator"
              target="_blank"
            >
              here
            </a>{" "}
            .
          </p>
          {/*  */}

          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Functionalities
            </h2>
            {/* • */}
            <p className="text-lg">
              <b>• Color Selection:</b> Choose two colors that form the basis of
              your gradient, allowing for a personalized touch to your design.
              <br />
              <br />
              <b>• Directional Control:</b> Tailor your gradient's direction
              with ease – whether it's a subtle top-to-bottom fade or a more
              dramatic left-to-right transition, the choice is yours.
              <br />
              <br />
              <b>• Refresh Feature:</b> Experiment freely by refreshing colors
              until you find the perfect combination that resonates with your
              vision.
              <br />
              <br />
              <b>• CSS Output:</b> Receive instant feedback with a text output,
              providing you with the precise CSS code for the linear gradient
              style you've created.
              <br />
              <br />
              <b>• Copy to Clipboard:</b> Streamline your workflow by copying
              the generated CSS code directly to your clipboard, making it
              effortlessly accessible for integration into your projects.
            </p>
          </div>
          <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 col-span-full mb-8">
            <h2 className="text-xl font-medium max-w-sm mb-4 lg:mb-0">
              Learning Journey
            </h2>
            <p className="text-lg">
              This project emerged as a delightful side project during my
              exploration of the DOM in conjunction with JavaScript. As I delved
              into the intricacies of web development, the Color Gradient
              Generator/Picker not only became a practical tool but also a
              reflection of my growing understanding of JavaScript's
              capabilities in creating interactive and user-centric
              applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
