import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/Core/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/Core/Carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Courses = () => {
  const courses = [
    {
      title: "Introduction to MongoDB",
      description: "I successfully completed the MongoDB introduction.",
      image: "/Courses/course1.png",
    },
    {
      title: "MongoDB PHP Developer Path",
      description: "I successfully completed the MongoDB PHP Developer Path.",
      image: "/Courses/course2.png",
    },
    {
      title: "Introduction to Web Hacking",
      description:
        "I successfully completed the 'Introduction to Web Hacking' course.",
      image: "/Courses/course3.png",
    },
  ];

  return (
    <section className="bg-navy-blue px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <h2 className="font-passion text-white text-3xl sm:text-4xl">
          Courses 🎓
        </h2>
      </div>

      <div className="relative mx-auto px-12 w-full max-w-6xl">
        <Carousel>
          <CarouselContent className="flex -ml-4 overflow-visible">
            {courses.map((course, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="flex flex-col justify-between bg-black hover:shadow-blue-900/20 hover:shadow-xl border-0 rounded-xl overflow-hidden text-white">
                  <div>
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-center object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {course.description}
                      </CardDescription>
                      <hr className="mt-4 border-gray-700 border-t" />
                    </CardHeader>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="top-1/2 -left-6 z-10 absolute -translate-y-1/2">
            <CarouselPrevious className="flex justify-center items-center shadow-md hover:shadow-blue-900/30 rounded-full w-8 sm:w-10 h-8 sm:h-10 transition">
              <FaArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </CarouselPrevious>
          </div>

          <div className="top-1/2 -right-6 z-10 absolute -translate-y-1/2">
            <CarouselNext className="flex justify-center items-center bg-white hover:bg-gray-300 shadow-md rounded-full w-8 sm:w-10 h-8 sm:h-10 transition">
              <FaArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Courses;
