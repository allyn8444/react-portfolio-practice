import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/*=================================*/}
      {/*==== Content ====================*/}
      {/*=================================*/}

      <section className="relative pt-8 md:pt-28 pb-8 lg:pb-40">
        <div className=" bg-white container grid grid-cols-12 gap-8">
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-medium col-span-12 lg:col-span-8 mb-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeIn",
            }}
          >
            Let's start a project together
          </motion.h1>
        </div>
        <div className="bg-white container grid grid-cols-12 gap-8">
          <motion.div
            className="col-span-12 md:col-span-7"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeIn",
            }}
          >
            <form action="#">
              <input
                type="text"
                className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8"
                placeholder="Subject"
              />
              <textarea
                className="w-full placeholder:text-text text-lg py-4 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-8"
                placeholder="Message"
                rows={4}
                defaultValue={""}
              />
              <button
                type="submit"
                className="bg-primary hover:bg-transparent px-16 py-4 border border-solid border-primary text-white hover:text-primary text-center font-medium rounded-full no-underline col-span-2 self-center transition-colors duration-150"
              >
                Send
              </button>
            </form>
          </motion.div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="mb-24">
              <motion.p
                className="text-sm mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                Contact details
              </motion.p>
              <motion.a
                href="mailto:allynralf.ledesma@wvsu.edu.ph"
                className="block text-base font-medium mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.7,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                allynralf.ledesma@wvsu.edu.ph
              </motion.a>
              <motion.a
                href="tell:09086617484"
                className="block text-base font-medium mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.9,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                0908 661 7484
              </motion.a>
            </div>
            <div className="mb-24">
              <motion.p
                className="text-sm mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 2.1,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                Socials
              </motion.p>
              <motion.a
                href="https://github.com/allyn8444"
                target="_blank"
                className="block text-base font-medium mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 2.3,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                Github
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ledesmaar/"
                target="_blank"
                className="block text-base font-medium mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                Linkedin
              </motion.a>
              <motion.a
                href="https://twitter.com/allyn8444"
                target="_blank"
                className=" block text-base font-medium mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="https://www.instagram.com/n.yll.a/"
                target="_blank"
                className=" block text-base font-medium mb-4"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 2.9,
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
