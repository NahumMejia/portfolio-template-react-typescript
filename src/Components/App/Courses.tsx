import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/Core/Card";

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
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between bg-black hover:shadow-blue-900/20 hover:shadow-xl border-0 rounded-xl overflow-hidden text-white hover:scale-105 transition-all duration-300"
          >
            <div>
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-75 object-center object-cover"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {course.description}
                </CardDescription>
                <hr className="mt-4 border-t border-black" />
              </CardHeader>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Courses;
