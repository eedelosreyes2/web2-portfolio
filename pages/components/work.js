import { jobs } from "../clientData/work.json";

export default function Work() {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="font-bold pb-16 text-lg">
        Experience
      </h2>

      <ol
        className="relative border-s border-gray-700"
        aria-label="Work experience timeline"
      >
        {jobs.map((job, index) => {
          const { id, company, name, title, dates, description, skills, url } =
            job;

          const sentences = (description || "")
            .split(". ")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((s) => (/[.!?]$/.test(s) ? s : `${s}.`));

          return (
            <li
              key={id || `${index}-${company}`}
              className="mb-10 ms-6"
              itemScope
              itemType="http://schema.org/Role"
              aria-labelledby={`job-title-${id || index}`}
            >
              <span
                className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900"
                aria-hidden="true"
              >
                <svg
                  className="w-2.5 h-2.5 text-slate-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <div className="flex items-center">
                <div className="flex flex-col flex-wrap gap-1">
                  <h3
                    id={`job-title-${id || index}`}
                    className="text-lg font-bold flex items-center gap-5"
                    itemProp="roleName"
                  >
                    {title}
                    {index === 0 && (
                      <span
                        className="text-center text-sm me-2 px-2.5 py-0.5 rounded bg-blue-900 text-slate-300"
                        aria-hidden="true"
                      >
                        Current
                      </span>
                    )}
                    {index === 0 && (
                      <span className="sr-only"> — Current position</span>
                    )}
                  </h3>

                  {/* {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${company}`}
                      itemProp="memberOf"
                      itemScope
                      itemType="http://schema.org/Organization"
                    >
                      <span itemProp="name">{company}</span>
                    </a>
                  ) : ( */}
                  <span
                    itemProp="memberOf"
                    itemScope
                    itemType="http://schema.org/Organization"
                  >
                    <span itemProp="name">{company}</span>
                  </span>
                  {/* )} */}

                  <time
                    className="pb-5 text-sm text-slate-400"
                    aria-label={`Dates: ${dates}`}
                  >
                    {dates}
                  </time>
                </div>
              </div>

              <ul
                className="flex flex-col gap-3 text-slate-300"
                aria-label={`${company} responsibilities`}
              >
                {sentences.map((item, si) => (
                  <li key={si}>
                    <p className="text-base" itemProp="description">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              {skills && skills.length > 0 && (
                <ul
                  className="flex flex-wrap gap-2 pt-4"
                  aria-label={`${company} skills`}
                >
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded"
                      role="listitem"
                      itemProp="skills"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
