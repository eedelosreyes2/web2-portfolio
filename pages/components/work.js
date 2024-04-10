import { jobs } from "../clientData/work.json";

import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

export default function Work() {
  return (
    <div>
      <div className="font-bold pb-10 text-lg">Work Experience</div>
      {/* https://flowbite.com/docs/components/accordion/ */}
      <div id="accordion-flush" data-accordion="collapse">
        {jobs.map((job, i) => {
          const { id, company, name, title, dates, description, skills, url } = job;
          return (
            <>
              {/* TODO: Smooth accordion transition */}
              <div key={id} className="flex justify-between items-center gap-10 py-8 w-full cursor-pointer border-b border-slate-700" data-accordion-target={`#${name}`} aria-expanded="true">
                <div className="flex items-center justify-between gap-5 flex-grow">
                  <div className="flex flex-col gap-5">
                    <div className="text-cyan-500 text-3xl">{title}</div>
                    <div>
                      <div className="text-xl md:text-2xl">{company}</div>
                      <div className="text-slate-300">{dates}</div>

                    </div>
                  </div>
                </div>
                <svg data-accordion-icon className="w-4 h-4 md:w-6 md:h-6 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </div>
              <div id={name} className="hidden flex flex-col" aria-labelledby={id}>
                <div className="flex flex-col gap-5 pt-5">
                  <ul>
                    {description
                      .split(".")
                      .map(
                        (item) =>
                          item && <li key={id} className="text-slate-200 ml-5 pb-2 list-disc">{item}.</li>
                      )}
                  </ul>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}
