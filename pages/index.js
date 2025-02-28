import { Helmet } from "react-helmet";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Work from "./components/work";
import Education from "./components/education";
import Skills from "./components/skills";
import Divider from "./components/divider";
import Alert from "./components/alert";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white w-full overflow-hidden">
      <Helmet>
        <title>Elijah Delos Reyes</title>
        <meta
          name="description"
          content="I enjoy crafting web applications displaying user-friendly and functional interfaces."
        />
        <meta
          name="image"
          content="https://elijahdr.vercel.app/elijahdr-circle.png"
        />

        <meta property="og:title" content="Elijah Delos Reyes" />
        <meta
          property="og:description"
          content="I enjoy crafting web applications displaying user-friendly and functional interfaces."
        />
        <meta
          property="og:image"
          content="https://elijahdr.vercel.app/elijahdr-circle.png"
        />
        <meta name="Elijah Delos Reyes" content="/elijahdr-circle.png"></meta>
        <meta property="og:url" content="https://elijahdr.vercel.app/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/elijahdr-circle.png" />
      </Helmet>

      <GoogleAnalytics />

      <div className="mx-auto max-w-4xl px-5 sm:px-10 py-24">
        <Intro />
        {/* <Alert /> */}
        <Divider variant="small" />
        <Projects />
        <Divider />
        <Work />
        <Divider />
        <Education />
        <Divider />
        {/* <Skills />
        <Divider /> */}
      </div>
    </div>
  );
}
