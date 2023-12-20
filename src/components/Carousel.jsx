import { useEffect, useState } from "react";
import bootstrap from "../assets/bootstrap.png";
import css3 from "../assets/css3.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html5 from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";

const images = [
  bootstrap,
  css3,
  git,
  github,
  html5,
  javascript,
  nextjs,
  nodejs,
  python,
  react,
  tailwindcss,
  // Duplicate the images to create a smooth loop
  bootstrap,
  css3,
  git,
  github,
  html5,
  javascript,
  nextjs,
  nodejs,
  python,
  react,
  tailwindcss,
];

export default function Carousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % images.length);
    }, 32000); // Adjust the interval based on your animation duration

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <div>
      <div className="logos">
        <div
          className="logos-slide"
          style={{ transform: `translateX(${-100 * position}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className="w-full h-auto grayscale-[50%]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
