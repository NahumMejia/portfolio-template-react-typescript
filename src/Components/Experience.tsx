import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@radix-ui/react-accordion";
  
  import { FaChevronDown, FaLaptopCode, FaServer, FaBuilding } from "react-icons/fa";
  
  export function Job() {
    return (
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-10 w-full max-w-3xl text-white"
      >
        {/* Job 1 */}
        <AccordionItem value="item-1" className="group py-4 border-gray-700 border-b">
          <AccordionTrigger className="flex justify-between items-center opacity-80 hover:opacity-100 w-full font-semibold hover:text-blue-400 text-lg text-left transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-blue-900 group-hover:bg-blue-800 bg-opacity-50 p-3 rounded-lg transition-all duration-300">
                <FaLaptopCode className="text-blue-400 text-xl" />
              </div>
              <div className="bg-gray-700 group-hover:bg-blue-700 w-0.5 h-12 transition-colors duration-300"></div>
              <div>
                <p className="font-bold">Full Stack Developer</p>
                <span className="text-gray-400 text-sm">Jan 2023 - Present</span>
              </div>
            </div>
            <FaChevronDown className="ml-2 text-gray-400 group-hover:text-blue-400 text-sm data-[state=open]:rotate-180 transition-transform duration-500 ease-in-out" />
          </AccordionTrigger>
          <AccordionContent className="mt-4 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down duration-500 ease-in-out">
            <div className="pl-8 sm:pl-16 text-gray-300 hover:text-gray-100 text-sm leading-relaxed transition-all duration-300">
              <p className="mb-2">
                Developed scalable full-stack applications using React, Laravel and MySQL.
                Led a team of developers and improved deployment time by 40%.
              </p>
              <ul className="mt-3 pl-5 text-gray-400 list-disc">
                <li className="mb-1 hover:text-blue-300 transition-colors duration-300">Optimized database performance, reducing query time by 35%</li>
                <li className="mb-1 hover:text-blue-300 transition-colors duration-300">Implemented CI/CD pipeline using GitHub Actions</li>
                <li className="hover:text-blue-300 transition-colors duration-300">Mentored junior developers in modern web technologies</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
  
        {/* Job 2 */}
        <AccordionItem value="item-2" className="group py-4 border-gray-700 border-b">
          <AccordionTrigger className="flex justify-between items-center opacity-80 hover:opacity-100 w-full font-semibold hover:text-blue-400 text-lg text-left transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-blue-900 group-hover:bg-blue-800 bg-opacity-50 p-3 rounded-lg transition-all duration-300">
                <FaServer className="text-blue-400 text-xl" />
              </div>
              <div className="bg-gray-700 group-hover:bg-blue-700 w-0.5 h-12 transition-colors duration-300"></div>
              <div>
                <p className="font-bold">Backend Intern</p>
                <span className="text-gray-400 text-sm">Jul 2022 - Dec 2022</span>
              </div>
            </div>
            <FaChevronDown className="ml-2 text-gray-400 group-hover:text-blue-400 text-sm data-[state=open]:rotate-180 transition-transform duration-500 ease-in-out" />
          </AccordionTrigger>
          <AccordionContent className="mt-4 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down duration-500 ease-in-out">
            <div className="pl-8 sm:pl-16 text-gray-300 hover:text-gray-100 text-sm leading-relaxed transition-all duration-300">
              <p className="mb-2">
                Contributed to backend services using Spring Boot and PostgreSQL. Automated
                internal processes and wrote unit tests to increase coverage by 25%.
              </p>
              <ul className="mt-3 pl-5 text-gray-400 list-disc">
                <li className="mb-1 hover:text-blue-300 transition-colors duration-300">Developed RESTful APIs for mobile application integration</li>
                <li className="mb-1 hover:text-blue-300 transition-colors duration-300">Implemented data validation and error handling systems</li>
                <li className="hover:text-blue-300 transition-colors duration-300">Participated in code reviews and agile development processes</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
  
        {/* Job 3 (opcional con icono de empresa genérico) */}
        <AccordionItem value="item-3" className="group py-4 border-gray-700 border-b">
          <AccordionTrigger className="flex justify-between items-center opacity-80 hover:opacity-100 w-full font-semibold hover:text-blue-400 text-lg text-left transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-blue-900 group-hover:bg-blue-800 bg-opacity-50 p-3 rounded-lg transition-all duration-300">
                <FaBuilding className="text-blue-400 text-xl" />
              </div>
              <div className="bg-gray-700 group-hover:bg-blue-700 w-0.5 h-12 transition-colors duration-300"></div>
              <div>
                <p className="font-bold">Software Engineer</p>
                <span className="text-gray-400 text-sm">Jan 2021 - Jun 2022</span>
              </div>
            </div>
            <FaChevronDown className="ml-2 text-gray-400 group-hover:text-blue-400 text-sm data-[state=open]:rotate-180 transition-transform duration-500 ease-in-out" />
          </AccordionTrigger>
          <AccordionContent className="mt-4 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down duration-500 ease-in-out">
            <div className="pl-8 sm:pl-16 text-gray-300 hover:text-gray-100 text-sm leading-relaxed transition-all duration-300">
              <p className="mb-2">
                Worked on microservices architecture and data migration pipelines. Built internal
                dashboards and tools using Next.js and Node.js.
              </p>
              <ul className="mt-3 pl-5 text-gray-400 list-disc">
                <li className="mb-1 hover:text-blue-300 transition-colors duration-300">Created data ETL pipelines for analytics team</li>
                <li className="mb-1 hover:text-blue-300 transition-colors duration-300">Refactored legacy code to improve maintainability</li>
                <li className="hover:text-blue-300 transition-colors duration-300">Improved API security by integrating OAuth2</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    );
  }
  
  function Experience() {
    return (
      <div className="bg-black px-6 sm:px-10 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="inline-block relative mb-6 font-bold text-white text-3xl sm:text-4xl">
            <span className="z-10 relative">Experience 💼</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400 text-sm sm:text-base text-justify leading-relaxed">
            With 2+ years of experience in software development, I specialize in
            crafting efficient, scalable web and desktop applications. Passionate
            about clean architecture and seamless user experiences.
          </p>
        </div>
        <Job />
      </div>
      
    );
  }
  
  export default Experience;
  