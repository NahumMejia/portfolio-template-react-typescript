import "./App.css";
import Header from "@/Components/Core/Header";
import { SocialMedia } from "./Components/App/SocialMedia";
import { IoMdArrowDown } from "react-icons/io";
import { Separator } from "./Components/Core/Separator";
import { Button } from "./Components/Core/Button";
import Technologies from "./Components/App/AboutMe";
import { useRef } from "react";
import Experience from "./Components/App/Experience";
import List from "./Components/App/Project/List";
import Courses from "./Components/App/Courses";

function App() {
  const techStackRef = useRef<HTMLDivElement | null>(null);

  const scrollToTechStack = () => {
    if (techStackRef.current) {
      const headerOffset = 80;
      const elementPosition = techStackRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-navy-blue pt-20 min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex md:flex-row flex-col justify-center items-center gap-x-20 gap-y-12 mx-auto px-6 sm:px-10 pt-12 max-w-screen-xl">
        <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96">
          <div className="absolute -inset-3 border-4 border-blue-900 rounded-full" />
          <img
            className="relative shadow-xl rounded-full w-full h-full object-cover"
            src="/YourPhoto/your-photo2.jpg"
            alt="Nahum Mejía"
          />
        </div>
        <div className="w-full md:w-[30rem] text-white md:text-left text-center">
          <h1 className="mb-2 font-mono text-xl">Hi 👋, I am</h1>
          <h1 className="mb-4 font-passion font-bold text-4xl sm:text-5xl leading-tight">
            Nahum Mejia Doniz
          </h1>

          <span className="block mt-2 px-1 max-w-full font-mono text-blue-100 text-xl sm:text-xl sm:whitespace-nowrap">
            Software Engineer Student - Web Developer
          </span>

          <Separator className="mt-5" />
          <SocialMedia />

          <div className="flex justify-center md:justify-start">
            <Button
              variant={"ghost"}
              onClick={scrollToTechStack}
              className="flex justify-center items-center hover:shadow-[0_0_15px_2px_#1e3a8a] mt-6 border-2 border-blue-900 rounded-sm w-[250px] h-10 font-bold text-blue-100 transition-all duration-300"
            >
              <>
                Who I Am
                <IoMdArrowDown className="mt-1 ml-1" />
              </>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div id="tech-stack-anchor" ref={techStackRef} className="mt-16" />
        <section className="bg-black py-12">
          <Technologies />
        </section>
        <section>
          <Experience />
        </section>
        <List />
        <Courses />
      </div>
    </div>
  );
}

export default App;
