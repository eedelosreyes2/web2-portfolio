import { jobs } from "../clientData/work.json";

export default function Work() {
  return (
    <>
      <div className="font-bold pb-16 text-lg">Experience</div>
      <ol className="relative border-s border-gray-700">
        {jobs.map((job, i) => {
          const { id, company, name, title, dates, description, skills, url } = job;

          return (
            <li key={id} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                <svg className="w-2.5 h-2.5 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="flex items-center">
                <div className="flex flex-col text-lg flex-wrap gap-1">
                  <span className="flex items-center font-bold gap-5 text-cyan-500">{title} {i === 0 && <span className="text-center text-sm me-2 px-2.5 py-0.5 rounded bg-blue-900 text-slate-300">Current</span>}</span>
                  <span>{company}</span>
                  <time className="block pb-5 text-sm leading-none">{dates}</time>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-slate-300">
                {description
                  .split(".")
                  .map(
                    (item, i) =>
                      item && <li key={i}><p className="text-base">{item}.</p></li>
                  )}
              </ul>
            </li>
          )
        })}
      </ol>
    </>
  );
}
