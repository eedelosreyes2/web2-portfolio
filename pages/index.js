import Head from 'next/head';
import Intro from './components/intro';
import Projects from './components/projects';
import Work from './components/work';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import Divider from './components/divider';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white w-full overflow-hidden">
      <Head>
        <title>elijah dr</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/e.jpg" />
      </Head>

      {/* <div className="bg-cyan-500 h-2"></div> */}
      <div className="mx-auto max-w-xl px-5 sm:px-10 pb-24">
        <Intro />
        <Contact />
        <Divider />
        <Projects />
        <Divider />
        <Work />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
      </div>
      {/* <div className="bg-violet-600 h-2"></div> */}
    </div>
  );
}
