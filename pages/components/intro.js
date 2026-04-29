import { contact } from "../clientData/contact.json";

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

export default function Intro() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elijah Delos Reyes",
    jobTitle: "Full Stack Engineer",
    image: "https://www.elijahdelosreyes.com/elijahdr_ai.jpg",
    description:
      "Elijah Delos Reyes is a Full Stack Engineer specializing in TypeScript, Next.js, Tailwind CSS, and AWS — leveraging AI tools to build fast, production-ready web applications. Browse projects and experience.",
    sameAs: contact.map((c) => c.url),
  };

  const renderIcon = (platform) => {
    const commonProps = { "aria-hidden": true, focusable: "false" };
    switch (platform) {
      case "Github":
        return <FaGithub {...commonProps} />;
      case "LinkedIn":
        return <FaLinkedin {...commonProps} />;
      case "Twitter":
        return <FaTwitter {...commonProps} />;
      case "Email":
        return <FaEnvelope {...commonProps} />;
      case "Resume":
        return <FaFilePdf {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <header className="flex flex-col gap-8" aria-labelledby="intro-heading">
      <figure className="flex items-center gap-4">
        <img
          src="/elijahdr.jpg"
          alt="Elijah Delos Reyes — Full Stack Engineer"
          className="rounded-full w-40"
          width="160"
          height="160"
          loading="lazy"
        />
        <figcaption className="sr-only">
          Elijah Delos Reyes, Full Stack Engineer
        </figcaption>
      </figure>

      <div className="flex flex-col gap-3">
        <h1 id="intro-heading" className="text-4xl font-bold">
          Elijah Delos Reyes
        </h1>

        <p className="text-2xl font-bold from-cyan-500 to-violet-600 bg-gradient-to-r bg-clip-text text-transparent">
          Full Stack Engineer
        </p>

        <p className="text-slate-300 pb-4">
          I enjoy crafting web applications displaying user-friendly and
          functional interfaces.
        </p>

        <IconContext.Provider value={{ size: 30 }}>
          <ul className="flex gap-5" role="list" aria-label="Contact links">
            {contact.map(({ id, platform, url, label }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel={`noopener noreferrer${platform !== "Email" ? " me" : ""}`}
                  aria-label={label}
                  title={label}
                  className="hover:text-cyan-400 rounded inline-flex items-center"
                >
                  {renderIcon(platform)}
                  <span className="ml-2 hidden xs:inline">{platform}</span>
                </a>
              </li>
            ))}
          </ul>
        </IconContext.Provider>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </header>
  );
}
