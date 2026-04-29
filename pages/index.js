import { Helmet } from "react-helmet";
import Intro from "./components/intro";
import Alert from "./components/alert";
import Work from "./components/work";
import Projects from "./components/projects";
import Education from "./components/education";
import Skills from "./components/skills";
import Divider from "./components/divider";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elijah Delos Reyes",
    url: "https://www.elijahdelosreyes.com/",
    image: "https://www.elijahdelosreyes.com/elijahdr_ai.jpg",
    jobTitle: "Full Stack Engineer",
    description:
      "Elijah Delos Reyes is a Full Stack Engineer specializing in TypeScript, Next.js, Tailwind CSS, and AWS — leveraging AI tools to build fast, production-ready web applications. Browse projects and experience.",
  };

  return (
    <div className="bg-slate-900 text-white w-full overflow-hidden">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Elijah Delos Reyes — Full Stack Engineer</title>

        <meta
          name="description"
          content="Elijah Delos Reyes is a Full Stack Engineer specializing in TypeScript, Next.js, Tailwind CSS, and AWS — leveraging AI tools to build fast, production-ready web applications. Browse projects and experience."
        />
        <meta name="author" content="Elijah Delos Reyes" />
        <meta
          name="keywords"
          content="Elijah Delos Reyes, Full Stack Engineer, Frontend Engineer, TypeScript, Next.js, Tailwind CSS, AWS, AI"
        />
        <meta
          name="image"
          content="https://www.elijahdelosreyes.com/elijahdr_ai.jpg"
        />

        <meta
          property="og:title"
          content="Elijah Delos Reyes — Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Elijah Delos Reyes is a Full Stack Engineer specializing in TypeScript, Next.js, Tailwind CSS, and AWS — leveraging AI tools to build fast, production-ready web applications. Browse projects and experience."
        />
        <meta
          property="og:image"
          content="https://www.elijahdelosreyes.com/elijahdr_ai.jpg"
        />
        <meta property="og:url" content="https://www.elijahdelosreyes.com/" />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0f172a" />

        <link rel="icon" href="https://www.elijahdelosreyes.com/favicon.ico" />
        <link rel="canonical" href="https://www.elijahdelosreyes.com/" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <GoogleAnalytics />

      <main
        id="main-content"
        role="main"
        className="mx-auto max-w-4xl px-5 sm:px-10 py-24"
        aria-labelledby="site-heading"
      >
        <h1 id="site-heading" className="sr-only">
          Elijah Delos Reyes — Full Stack Engineer (TypeScript, Next.js,
          Tailwind CSS, AWS, AI)
        </h1>

        <header role="banner" aria-label="Intro">
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">
              Introduction
            </h2>
            <Intro />
          </section>
        </header>

        {/* Optional alert (aria-live) */}
        {/* If you enable Alert, ensure it uses aria-live="polite" or "assertive" as appropriate */}
        {/* <Alert /> */}

        <Divider variant="small" />

        <section aria-labelledby="work-heading">
          <h2 id="work-heading" className="sr-only">
            Work experience
          </h2>
          <Work />
        </section>

        <Divider />

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>
          <Projects />
        </section>

        <Divider />

        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="sr-only">
            Education
          </h2>
          <Education />
        </section>

        <Divider />

        {/* <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">
            Skills
          </h2>
          <Skills />
        </section>
        <Divider /> */}
      </main>
    </div>
  );
}
