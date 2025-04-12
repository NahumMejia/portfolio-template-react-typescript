import { Card, CardContent } from "@/Components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/Carousel";
import { Icon } from "@iconify/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Technologies() {
  const technologies = [
    { name: "Laravel", icon: "cib:laravel" },
    { name: "React", icon: "cib:react" },
    { name: "MySQL", icon: "grommet-icons:mysql" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "MongoDB", icon: "simple-icons:mongodb" },
    { name: "JavaScript", icon: "akar-icons:javascript-fill" },
    { name: "TypeScript", icon: "cib:typescript" },
    { name: "Git", icon: "simple-icons:git" },
    { name: "Figma", icon: "solar:figma-bold" },
    { name: "C++", icon: "cib:cplusplus" },
  ];

  return (
    <div className="mx-auto px-6 sm:px-10 py-20 max-w-screen-xl">
      <h2 className="mb-14 font-passion font-bold text-white text-3xl sm:text-4xl text-center">
        My Tech Stack
      </h2>
      <Carousel className="mx-auto w-full max-w-6xl">
        <CarouselContent className="-ml-4">
          {technologies.map((tech, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <Card className="bg-transparent shadow-none border-none">
                <CardContent className="group flex flex-col justify-center items-center p-6 transition-transform hover:-translate-y-2 duration-300">
                  <Icon
                    icon={tech.icon}
                    className="group-hover:drop-shadow-[0_0_25px_#3b82f6] mb-3 text-white text-5xl transition duration-300"
                  />
                  <span className="font-mono text-white text-lg">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious>
          <FaArrowLeft className="w-6 h-6 text-white hover:text-blue-400 transition duration-300" />
        </CarouselPrevious>
        <CarouselNext>
          <FaArrowRight className="w-6 h-6 text-white hover:text-blue-400 transition duration-300" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default Technologies;
