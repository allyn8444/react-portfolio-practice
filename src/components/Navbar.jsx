import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const mobileMenuTrigger = document.querySelector("#mobile_menu_trigger");
    const mobileMenuClose = document.querySelector("#mobile_menu_close");
    const mobileMenu = document.querySelector("#mobile_menu");

    const openMobileMenu = () => {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    };

    const closeMobileMenu = () => {
      mobileMenu.classList.add("translate-x-full");
      mobileMenu.classList.remove("translate-x-0");
    };

    mobileMenuTrigger.addEventListener("click", openMobileMenu);
    mobileMenuClose.addEventListener("click", closeMobileMenu);

    return () => {
      // Clean up the event listeners when the component is unmounted
      mobileMenuTrigger.removeEventListener("click", openMobileMenu);
      mobileMenuClose.removeEventListener("click", closeMobileMenu);
    };
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // ACTIVE LINK FUNCTION
  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];
  // console.log(subpage);
  function Linkness(type = null) {
    if (subpage === "") {
      subpage = "home";
    }

    let classes = " ";

    if (type === subpage) {
      classes += "underline underline-offset-4 decoration-2";
    } else {
      classes += " ";
    }
    return classes;
  }

  return (
    // Your JSX code for the Navbar
    <div>
      <div className="container pt-10 lg:pt-8 ">
        <nav className=" flex justify-between font-medium">
          <Link to="/">Nylla</Link>
          <Link className={`${Linkness("home")} link hidden md:inline`} to="/">
            <motion.div
              variants={{
                hidden: {
                  y: -35,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    ease: "easeOut",
                    duration: 0.8,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              Home
            </motion.div>
          </Link>
          <Link
            className={`${Linkness("about")} link hidden md:inline`}
            to="/about"
          >
            <motion.div
              variants={{
                hidden: {
                  y: -35,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.2,
                    ease: "easeOut",
                    duration: 0.8,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              About
            </motion.div>
          </Link>
          <Link
            className={`${Linkness("works")} link hidden md:inline`}
            to="/works"
          >
            <motion.div
              variants={{
                hidden: {
                  y: -35,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.4,
                    ease: "easeOut",
                    duration: 0.8,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              Works
            </motion.div>
          </Link>

          <Link
            className={`${Linkness("contact")} link hidden md:inline`}
            to="/contact"
          >
            <motion.div
              variants={{
                hidden: {
                  y: -35,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                    ease: "easeOut",
                    duration: 0.8,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              Contact
            </motion.div>
          </Link>
          {/*  */}
          <button id="mobile_menu_trigger" className="inline md:hidden">
            <svg
              width={24}
              height={15}
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width={24} height={4} fill="#201F27" />
              <rect x="{12}" y="10.5" width={12} height={4} fill="#201F27" />
            </svg>
          </button>
        </nav>
        {/*=================================*/}
        {/*==== Mobile Menu ================*/}
        {/*=================================*/}
        <div
          id="mobile_menu"
          className="w-full bg-primary text-white flex flex-col justify-center text-2xl space-y-4 fixed right-0 translate-x-full top-0 bottom-0 z-50 pl-8 transition-transform duration-500"
        >
          <button
            id="mobile_menu_close"
            className="absolute top-10 right-4 flex items-center text-base"
          >
            close
            <svg
              className="ml-4"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.12109"
                y="0.454041"
                width={24}
                height={3}
                transform="rotate(45 2.12109 0.454041)"
                fill="#fff"
              />
              <rect
                y="17.4246"
                width={24}
                height={3}
                transform="rotate(-45 0 17.4246)"
                fill="#fff"
              />
            </svg>
          </button>
          <Link to="/">
            <motion.div
              whileHover={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Home
            </motion.div>
          </Link>
          <Link to="/works">
            <motion.div
              whileHover={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Work
            </motion.div>
          </Link>
          <Link to="/about">
            {" "}
            <motion.div
              whileHover={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              About
            </motion.div>
          </Link>
          <Link to="/contact">
            {" "}
            <motion.div
              whileHover={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Contact
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
