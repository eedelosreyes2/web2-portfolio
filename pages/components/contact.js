import { contact } from '../clientData/contact.json';

import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const renderIcon = (platform) => {
    switch (platform) {
      case "Github":
        return <FaGithub />
      case "LinkedIn":
        return <FaLinkedin />
      case "Twitter":
        return <FaTwitter />
      case "Email":
        return <FaEnvelope />
    }
  }

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="flex flex-col">
            {contact.map(({ id, platform, url, label }) =>
              <div key={id} className='pb-2'>
                <IconContext.Provider value={{ size: 20 }}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center font-bold hover:underline w-fit"
                  >
                    {renderIcon(platform)} {label}
                  </a>
                </IconContext.Provider>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}