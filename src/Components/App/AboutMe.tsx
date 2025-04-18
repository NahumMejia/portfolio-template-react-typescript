import { Card, CardContent } from "@/Components/Core/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/App/Carousel";
import { Icon } from "@iconify/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Technologies() {
  //search icons on https://icon-sets.iconify.design/
  const technologies = [
    { name: "Laravel", icon: "cib:laravel" },
    { name: "React", icon: "cib:react" },
    { name: "Tailwind CSS", icon: "bxl:tailwind-css" },
    { name: "MySQL", icon: "grommet-icons:mysql" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "MongoDB", icon: "simple-icons:mongodb" },
    { name: "JavaScript", icon: "akar-icons:javascript-fill" },
    { name: "TypeScript", icon: "cib:typescript" },
    { name: "Git", icon: "simple-icons:git" },
    { name: "GitHub", icon: "akar-icons:github-fill" },
    { name: "Figma", icon: "solar:figma-bold" },
    { name: "C++", icon: "cib:cplusplus" },
  ];

  return (
    <div className="mx-auto mt-10 px-6 sm:px-10 max-w-screen-xl">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <h2 className="mb-4 font-passion text-white text-3xl sm:text-4xl">
          About Me 👨‍💻
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-justify leading-relaxed">
          I'm a Software Engineer and Full Stack Web Developer with 2+ years of experience building responsive web and desktop apps. 
          I focus on clean code, solid performance, and great user experiences.
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
                      className="group-hover:drop-shadow-[0_0_25px_#3b82f6] mb-3 text-white text-3xl sm:text-4xl md:text-5xl transition duration-300"
                    />
                    <span className="font-mono text-white text-xs sm:text-sm md:text-lg text-center">
                      {tech.name}
                    </span>
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