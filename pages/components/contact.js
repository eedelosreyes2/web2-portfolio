import { contact } from "../clientData/contact.json";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
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
    }
  };

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="flex gap-4">
            {contact.map(({ id, platform, url, label }) => (
              <div key={id}>
                <IconContext.Provider value={{ size: 24 }}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {renderIcon(platform)}
                  </a>
                </IconContext.Provider>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
