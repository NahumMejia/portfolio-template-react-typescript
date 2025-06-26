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

import { courses } from "@/Data/Courses";


function Courses() {

  return (
    <section className="bg-navy-blue px-4 sm:px-6 lg:px-8 py-6">
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
                        className="w-full h-70 object-center object-cover"
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

          <CarouselPrevious className="bg-white hover:bg-gray-400 mr-5" />

          <CarouselNext className="bg-white hover:bg-gray-400 ml-5" />
        </Carousel>
      </div>
    </section>
  );
};

export default Courses;
