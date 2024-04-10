import { jobs } from "../clientData/work.json";

export default function Work() {
  return (
    <>
      <div className="font-bold pb-8 text-lg">Experience</div>
      {/* https://flowbite.com/docs/components/accordion/ */}
      <div id="accordion-flush" data-accordion="collapse">
        {jobs.map((job, i) => {
          const { id, company, name, title, dates, description, skills, url } = job;
          
          return (
            <div key={i}>
              {/* TODO: Smooth accordion transition */}
              <div className="flex justify-between items-center gap-5 py-8 cursor-pointer" data-accordion-target={`#${name}`} aria-expanded="true">
                <div className="flex items-center justify-between flex-grow">
                  <div className="flex flex-col gap-5">
                    <div className="text-cyan-500 text-3xl">{title}</div>
                    <div>
                      <div className="text-xl">{company}</div>
                      <div className="text-slate-300">{dates}</div>
                    </div>
                  </div>
                </div>
                <svg data-accordion-icon className="w-4 h-4 md:w-6 md:h-6 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </div>
              <div id={name} className="hidden flex flex-col pb-8 border-b border-slate-700" aria-labelledby={id}>
                <div className="flex flex-col gap-5">
                  <ul className="flex flex-col gap-3">
                    {description
                      .split(".")
                      .map(
                        (item, i) =>
                          item && <li key={i} className="ml-5 list-disc">{item}.</li>
                      )}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
