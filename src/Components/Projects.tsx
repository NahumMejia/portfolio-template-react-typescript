import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/Card";
import { Icon } from "@iconify/react";
import { Badge } from "@/Components/Badge";

const Projects = () => {
    const projects = [
        {
            title: "Multi-Vendor E-commerce Platform",
            description: "A Multi-Vendor E-commerce Platform built with Laravel, React and Typescript.",
            image: "/project1.png",
            linkGithub: "private",
            linkDemo: "https://example.com/demo1",
            technologies: [
                { name: "Laravel", icon: "cib:laravel" },
                { name: "React", icon: "cib:react" },
                { name: "MySQL", icon: "grommet-icons:mysql" },
                { name: "TypeScript", icon: "cib:typescript" },
                { name: "Tailwind CSS", icon: "bxl:tailwind-css" },
                { name: "Inertia JS", icon: "simple-icons:inertia" },
            ],
        },
        {
            title: "Project Management System",
            description: "A Project Management System built with Laravel, JavaScript and React.",
            image: "/project2.png",
            linkGithub: "https://github.com/NahumMejia/project-management-laravel11-react",
            linkDemo: "https://example.com/demo3",
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
            title: "Numerical Systems Converter",
            description: "A Numerical Systems Converter built with Python and Flet.",
            image: "/project3.png",
            linkGithub: "https://github.com/NahumMejia/numerical-systems-converter-python-flet",
            linkDemo: "https://example.com/demo2",
            technologies: [
                { name: "Python", icon: "devicon-plain:python" },
                { name: "Flet", icon: "none" },
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
            <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="bg-black hover:shadow-blue-900/20 hover:shadow-xl border-0 rounded-xl overflow-hidden text-white hover:scale-105 transition-all duration-300"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />
                        </div>
                        <CardHeader className="p-4 pb-0">
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <CardDescription className="text-gray-300">{project.description}</CardDescription>
                            <hr className="mt-4 border-gray-700 border-t" />
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="bg-blue-900 hover:bg-blue-500 hover:shadow-lg text-white hover:scale-110 transition-all duration-300"
                                    >
                                        <Icon icon={tech.icon} className="text-sm" />
                                        {tech.name}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center space-x-4 mt-4 px-0">
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
                ))}
            </div>
        </section>
    );
};

export default Projects;
