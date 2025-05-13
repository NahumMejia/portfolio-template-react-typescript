import { Card, CardContent } from "@/Components/Core/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/Core/Carousel";
import { Icon } from "@iconify/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Technologies() {
  //search icons on iconify
  const technologies = [
    { name: "Laravel", icon: "cib:laravel", color: "#fb503b" },
    { name: "React", icon: "cib:react", color: "#61DBFB" },
    { name: "Tailwind CSS", icon: "bxl:tailwind-css", color: "#38BDF8" },
    { name: "MySQL", icon: "grommet-icons:mysql", color: "#00758F" },
    { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
    { name: "MongoDB", icon: "simple-icons:mongodb", color: "#47A248" },
    {
      name: "JavaScript",
      icon: "akar-icons:javascript-fill",
      color: "#F7DF1E",
    },
    { name: "TypeScript", icon: "cib:typescript", color: "#3178C6" },
    { name: "Git", icon: "simple-icons:git", color: "#F05032" },
    { name: "GitHub", icon: "akar-icons:github-fill", color: "#ffffff" },
    { name: "Figma", icon: "solar:figma-bold", color: "#A259FF" },
    { name: "C++", icon: "cib:cplusplus", color: "#00599C" },
  ];
  return (
    <div className="mx-auto mt-10 px-6 sm:px-10 max-w-screen-xl">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <h2 className="mb-4 font-passion text-white text-3xl sm:text-4xl">
          About Me 👨‍💻
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-justify leading-relaxed">
          I'm a Software Engineer and Full Stack Web Developer with 2+ years of
          experience building responsive web and desktop apps. I focus on clean
          code, solid performance, and great user experiences.
        </p>
      </div>
      <div className="relative px-8 md:px-12">
        <Carousel className="mx-auto w-full max-w-6xl">
          <CarouselContent className="-ml-4">
            {technologies.map((tech, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <Card className="bg-transparent shadow-none border-none">
                  <CardContent className="group flex flex-col justify-center items-center p-4 transition-transform hover:-translate-y-2 duration-300">
                    <Icon
                      icon={tech.icon}
                      className={`tech-icon-${index} mb-3 text-white text-3xl sm:text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110`}
                    />
                    <span
                      className={`tech-name-${index} font-mono text-white text-xs sm:text-sm md:text-lg text-center transition-all duration-300`}
                    >
                      {tech.name}
                    </span>
                    <style>
                      {`
                        .group:hover .tech-icon-${index} {
                          color: ${tech.color}; 
                        }
                        .group:hover .tech-name-${index} {
                          color: ${tech.color};
                        }
                      `}
                    </style>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="top-1/2 -left-4 absolute -translate-y-1/2">
            <CarouselPrevious className="bg-white hover:bg-gray-400 w-8 sm:w-10 h-8 sm:h-10">
              <FaArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </CarouselPrevious>
          </div>
          <div className="top-1/2 -right-4 absolute -translate-y-1/2">
            <CarouselNext className="bg-white hover:bg-gray-400 w-8 sm:w-10 h-8 sm:h-10">
              <FaArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Technologies;
