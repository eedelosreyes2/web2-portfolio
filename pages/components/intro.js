import { contact } from "../clientData/contact.json";

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, ƒ } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

export default function Intro() {
  const renderIcon = (platform) => {
    switch (platform) {
      case "Github":
        return <FaGithub />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "Twitter":
        return <FaTwitter />;
      case "Email":
        return <FaEnvelope />;
      case "Resume":
        return <FaFilePdf />;
    }
  };

  return (
    <div className="flex flex-col md:items-center justify-center md:flex-row md:gap-16 gap-8 pb-5">
      {/* TODO: Subtle animated border */}
      <img
        src="/elijahdr.jpg"
        alt="Elijah Delos Reyes"
        className="rounded-full w-32 md:w-80"
      />
      <div className="flex flex-col gap-3">
        <div className="text-4xl font-bold">Elijah Delos Reyes</div>
        <div className="text-2xl font-bold from-cyan-500 to-violet-600 bg-gradient-to-r bg-clip-text text-transparent">
          Frontend Engineer
        </div>
        <h3 className="text-slate-300 pb-4">
          I enjoy crafting web applications displaying user-friendly and
          functional interfaces.
        </h3>

        <div className="flex gap-5">
          {contact.map(({ id, platform, url, label }) => (
            <div key={id}>
              <IconContext.Provider value={{ size: 30 }}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {renderIcon(platform)}
                </a>
              </IconContext.Provider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
