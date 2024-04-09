import { Helmet } from "react-helmet";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Education from "./components/education";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies";
import Divider from "./components/divider";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white w-full overflow-hidden">
      <Helmet>
        <title>Elijah Delos Reyes</title>
        <meta
          name="description"
          content="Elijah Delos Reyes Online Website Portfolio Resume Fullstack Engineer"
        />
        <meta
          name="image"
          content="https://elijahdr.vercel.app/elijahdr-circle.png"
        />

        <meta property="og:title" content="Elijah Delos Reyes" />
        <meta
          property="og:description"
          content="Elijah Delos Reyes Online Website Portfolio Resume Fullstack Engineer"
        />
        <meta
          property="og:image"
          content="https://elijahdr.vercel.app/elijahdr-circle.png"
        />
        <meta property="og:url" content="https://elijahdr.vercel.app/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/elijahdr-circle.png" />
      </Helmet>

      <div className="mx-auto max-w-5xl px-5 sm:px-10 py-24">
        <Intro />
        <Divider variant="small" />
        {/* TODO: Rotating tech stack animation component */}
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
        <Hobbies />
        <Divider variant="small" />
      </div>
    </div>
  );
}
