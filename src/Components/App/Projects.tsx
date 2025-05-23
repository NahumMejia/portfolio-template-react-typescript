import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/Core/Card";
import { Icon } from "@iconify/react";
import { Badge } from "@/Components/Core/Badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Core/Carousel";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Vendor E-commerce Platform",
      description:
        "A Multi-Vendor E-commerce Platform built with Laravel, React and Typescript.",
      image: "/Projects/project1.png",
      linkGithub: "private",
      linkDemo: "https://example.com/demo1",
      technologies: [
        { name: "Laravel", icon: "cib:laravel" },
        { name: "React", icon: "cib:react" },
        { name: "MySQL", icon: "grommet-icons:mysql" },
        { name: "TypeScript", icon: "cib:typescript" },
        { name: "Tailwind CSS", icon: "bxl:tailwind-css" },
        { name: "Inertia JS", icon: "simple-icons:inertia" },
        { name: "Spatie", icon: "" },
      ],
    },
    {
      title: "Comic Web Application",
      description:
        "A page to read and upload comics built with Laravel, React and TypeScript.",
      image: "/Projects/project3.png",
      linkGithub:
        "https://github.com/NahumMejia/comics-app-laravel12-react-typescript.git",
      linkDemo: "https://example.com/demo3",
      technologies: [
        { name: "Laravel", icon: "cib:laravel" },
        { name: "React", icon: "cib:react" },
        { name: "MySQL", icon: "grommet-icons:mysql" },
        { name: "Tailwind CSS", icon: "bxl:tailwind-css" },
        { name: "TypeScript", icon: "cib:typescript" },
        { name: "Inertia JS", icon: "simple-icons:inertia" },
      ],
    },
    {
      title: "Project Management System",
      description:
        "A Project Management System built with Laravel, JavaScript and React.",
      image: "/Projects/project2.png",
      linkGithub:
        "https://github.com/NahumMejia/project-management-laravel11-react",
      linkDemo: "https://example.com/demo2",
      technologies: [
        { name: "Laravel", icon: "cib:laravel" },
        { name: "React", icon: "cib:react" },
        { name: "MySQL", icon: "grommet-icons:mysql" },
        { name: "Tailwind CSS", icon: "bxl:tailwind-css" },
        { name: "JavaScript", icon: "akar-icons:javascript-fill" },
        { name: "Inertia JS", icon: "simple-icons:inertia" },
      ],
    },
    {
      title: "Numerical System Converter",
      description: "A Numerical System Converter built with Python and Flet",
      image: "/Projects/project4.png",
      linkGithub:
        "https://github.com/NahumMejia/numerical-systems-converter-python-flet.git",
      linkDemo: "https://example.com/demo2",
      technologies: [
        { name: "Python", icon: "akar-icons:python-fill" },
        { name: "Flet", icon: "" },
      ],
    },
  ];

  return (
    <section className="bg-navy-blue px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <h2 className="mb-4 font-passion text-white text-3xl sm:text-4xl">
          Projects 🌐
        </h2>
      </div>

      <div className="relative mx-auto px-12 w-full max-w-6xl">
        <Carousel>
          <CarouselContent className="flex -ml-4 overflow-visible">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="flex flex-col bg-black hover:shadow-2xl hover:shadow-blue-900/30 border-0 rounded-xl w-full min-h-[550px] text-white hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-[200px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                    <hr className="mt-4 border-gray-700 border-t" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="flex items-center gap-1 bg-blue-900 hover:bg-blue-500 hover:shadow-lg text-white transition-all duration-300"
                        >
                          {tech.icon && (
                            <Icon icon={tech.icon} className="text-sm" />
                          )}
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center space-x-4 mt-4 px-0 py-4">
                    {project.linkGithub && project.linkGithub !== "private" && (
                      <a
                        href={project.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition"
                      >
                        <Icon icon="bi:github" className="text-2xl" />
                      </a>
                    )}
                    <a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition"
                    >
                      <Icon icon="mdi:eye" className="text-2xl" />
                    </a>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="top-1/2 -left-6 z-10 absolute -translate-y-1/2">
            <CarouselPrevious className="flex justify-center items-center bg-white hover:bg-gray-300 shadow-md rounded-full w-10 h-10 transition-all duration-300">
              <Icon icon="mdi:chevron-left" className="w-5 h-5 text-black" />
            </CarouselPrevious>
          </div>

          <div className="top-1/2 -right-6 z-10 absolute -translate-y-1/2">
            <CarouselNext className="flex justify-center items-center bg-white hover:bg-gray-300 shadow-md rounded-full w-10 h-10 transition-all duration-300">
              <Icon icon="mdi:chevron-right" className="w-5 h-5 text-black" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
