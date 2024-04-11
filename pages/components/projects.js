import { projects } from "../clientData/projects.json";

export default function Projects() {
  return (
    <>
      <div className="font-bold text-lg">Projects</div>
      {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div className="relative h-64 overflow-hidden rounded-lg">
          {projects.map((project, i) => {
            const { id, title, name, dates, description, skills, url, github_url, image } = project;

            // TODO: Add img inside Device Mockup?
            return (
              <div key={i} className="hidden bg-slate-900 duration-[20000] ease-in-out flex flex-col" data-carousel-item>
                <div className="flex justify-between items-center py-8 w-full cursor-pointer border-b border-slate-700">
                  <div className="text-xl md:text-3xl">{title}</div>
                </div>
                <div className="flex flex-col">
                  {image && <img src={image} />}
                  <div className="flex flex-col gap-5 pt-5">
                    <div>
                      {description}
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 pb-12">
                      <a href={url} target="_blank" className="text-center flex-grow text-white bg-green-700 hover:bg-green-800 rounded-lg font-bold w-full p-2 md:p-3">Launch App</a>
                      <a href={github_url} target="_blank" className="text-center flex-grow text-white bg-blue-700 hover:bg-blue-800 rounded-lg font-bold w-full p-2 md:p-3">View Code</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <!-- Slider indicators -->
        <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
          <button type="button" className="w-3 h-3 bg-slate-400 rounded-full" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="9"></button>
        </div>
        <!-- Slider controls -->
        <div className="flex justify-center gap-72 items-center pt-10">
          <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div> */}



      {/* https://flowbite.com/docs/components/accordion/ */}
      <div id="accordion-flush" data-accordion="collapse">
        {projects.map((project, i) => {
          const { id, title, name, dates, description, skills, url, github_url, image } = project;
          return (
            <div key={id}>
              <div className="flex justify-between items-center py-8 w-full cursor-pointer border-b border-slate-700" data-accordion-target={`#${name}`} aria-expanded="true">
                <div className="text-xl md:text-3xl">{title}</div>
                <svg data-accordion-icon className="w-4 h-4 md:w-6 md:h-6 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </div>
              <div id={name} className="hidden flex flex-col" aria-labelledby={id}>
                {image && <img src={image} />}
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    {description}
                  </div>
                  <div className="flex flex-col md:flex-row gap-5 pb-12">
                    <a href={url} target="_blank" className="text-center flex-grow bg-green-700 hover:bg-green-800 rounded-lg font-bold w-full p-2 md:p-3">Launch App</a>
                    <a href={github_url} target="_blank" className="text-center flex-grow bg-blue-700 hover:bg-blue-800 rounded-lg font-bold w-full p-2 md:p-3">View Code</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
