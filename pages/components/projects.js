import { projects } from "../clientData/projects.json";

export default function Projects() {
  return (
    <>
      <div className="font-bold pb-10 text-lg">Projects</div>
      {/* https://flowbite.com/docs/components/accordion/ */}
      <div id="accordion-flush" data-accordion="collapse">
        {projects.map((project, i) => {
          const { id, title, name, dates, description, skills, url, github_url, image } = project;
          return (
            <>
              {/* TODO: Smooth accordion transition */}
              {/* TODO: Auto play function with pause */}
              <div key={id} className="flex justify-between items-center py-8 w-full cursor-pointer border-b border-slate-700" data-accordion-target={`#${name}`} aria-expanded="true">
                <div className="text-xl md:text-3xl">{title}</div>
                <svg data-accordion-icon className="w-4 h-4 md:w-6 md:h-6 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </div>
              <div id={name} className="hidden flex flex-col" aria-labelledby={id}>
                {image && <img src={image} />}
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    {description}
                  </div>
                  <div className="flex flex-col md:flex-row gap-5 pb-12">
                    <a href={url} target="_blank" class="text-center flex-grow text-white bg-green-700 hover:bg-green-800 rounded-lg font-bold w-full p-2 md:p-3">Launch App</a>
                    <a href={github_url} target="_blank" class="text-center flex-grow text-white bg-blue-700 hover:bg-blue-800 rounded-lg font-bold w-full p-2 md:p-3">View Code</a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
}
