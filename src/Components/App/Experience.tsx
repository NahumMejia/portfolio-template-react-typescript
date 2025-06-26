import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Icon } from '@iconify/react';
import { experience } from '@/Data/Experience';
function Job() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto mt-10 w-full max-w-3xl text-white"
    >
      {experience.map((job, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="group py-4 border-gray-700 border-b">
          <AccordionTrigger className="flex justify-between items-center opacity-80 hover:opacity-100 w-full font-semibold hover:text-blue-400 text-lg text-left transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-blue-900 group-hover:bg-blue-800 bg-opacity-50 p-3 rounded-lg transition-all duration-300">
                <Icon icon={job.icon} className="text-blue-400 text-xl" />
              </div>
              <div className="bg-gray-700 group-hover:bg-blue-700 w-0.5 h-12 transition-colors duration-300"></div>
              <div>
                <p className="font-bold">{job.title}</p>
                <span className="text-gray-400 text-sm">{job.date}</span>
              </div>
            </div>
            <div className="flex items-center bg-blue-900/30 group-hover:bg-blue-700/40 p-2 rounded-lg transition-colors duration-300">
              <Icon
                icon="ph:caret-down-bold"
                className="text-blue-400 group-hover:text-blue-300 text-2xl data-[state=open]:rotate-180 transition-transform duration-500 ease-in-out"
              />
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down duration-500 ease-in-out">
            <div className="pl-8 sm:pl-16 text-gray-300 hover:text-gray-100 text-sm leading-relaxed transition-all duration-300">
              <p className="mb-2">{job.description}</p>
              <ul className="mt-3 pl-5 text-gray-400 list-disc">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="mb-1 hover:text-blue-300 transition-colors duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Experience() {
  return (
    <div className="bg-black px-6 sm:px-10 py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="inline-block relative mb-6 font-bold text-white text-3xl sm:text-4xl">
          <span className="font-passion">Experience 💼</span>
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