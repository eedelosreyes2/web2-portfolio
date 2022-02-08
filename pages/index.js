import Head from 'next/head';
import Header from './components/header';
import Work from './components/work';
import Education from './components/education';
import Skills from './components/skills';
import Divider from './components/divider';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white w-full overflow-hidden">
      <Head>
        <title>Elijah's Web2 Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="mx-auto max-w-7xl pt-20 px-10">
        <Work />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
      </div>
    </div>
  );
}
