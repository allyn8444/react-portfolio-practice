import Hero from "../components/Hero";
import ScrollingText from "../components/ScrollingText";
import TechStack from "../components/TechStack";
import Works from "../components/Works";


const Home = () => {
  return (
    <>
      {/*==== Hero ====*/}
      <Hero />
      {/*==== Works ===================*/}
      <section>
        <ScrollingText />
        <Works />
      </section>
      {/*==== Tech Stack ===============*/}
      <TechStack />
    </>
  );
};

export default Home;
