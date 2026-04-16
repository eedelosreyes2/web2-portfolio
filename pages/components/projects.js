import { useState } from "react";
import Image from "next/image";
import { projects } from "../clientData/projects.json";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const isExpanded = visibleCount >= projects.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects",
    description: "A list of projects showcasing apps, tools, and demos.",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: p.url || p.github_url,
      image: p.image,
      description: p.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="font-bold text-lg pb-8">
          Projects
        </h2>

        <ul id="projects-list" className="space-y-6" role="list">
          {projects.slice(0, visibleCount).map((project) => {
            const {
              id,
              title,
              dates,
              description,
              skills,
              url,
              github_url,
              image,
            } = project;

            return (
              <li key={id} className="py-6">
                <article
                  aria-labelledby={`project-title-${id}`}
                  className="flex flex-col md:flex-row gap-6"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <figure className="min-w-[300px]">
                    <img
                      src={image}
                      alt={title}
                      // loading="lazy"
                      // width={640}
                      // height={360}
                      className="flex-shrink-0 rounded-lg object-cover md:h-40 m-auto"
                    />
                  </figure>

                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pb-5">
                      <div className="flex flex-col gap-1">
                        <h3
                          id={`project-title-${id}`}
                          className="text-lg font-semibold"
                          itemProp="name"
                        >
                          {title}
                        </h3>
                        <div
                          className="text-sm text-slate-400"
                          itemProp="datePublished"
                        >
                          {dates}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 pb-5" itemProp="description">
                      {description}
                    </p>

                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={`Skills used in ${title}`}
                      role="list"
                    >
                      {skills?.map((skill) => (
                        <li
                          key={skill}
                          className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col md:flex-row gap-3 mt-4 w-full md:w-max">
                      {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Launch ${title} in a new tab`}
                          className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 rounded-lg font-bold p-2 text-sm w-full md:w-64"
                        >
                          Launch app
                        </a>
                      )}

                      <a
                        href={github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${title} on GitHub`}
                        className="flex-1 text-center bg-slate-700 hover:bg-slate-800 rounded-lg font-bold p-2 text-sm w-full md:w-64"
                      >
                        View code
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="pt-8">
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls="projects-list"
            className="text-cyan-500 hover:text-cyan-400 cursor-pointer bg-transparent p-0 rounded-lg"
            onClick={() => setVisibleCount(isExpanded ? 4 : projects.length)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </section>
    </>
  );
}
