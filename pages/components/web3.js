import { contact } from '../clientData/contact.json';
import { IconContext } from 'react-icons';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export default function Web3() {
  return (
    <div>
      <div className="font-bold pb-5">Gm</div>
      <div className="pb-2">
        Elijah here, a web2 dev (but web3 degen) currently learning and looking
        to extend my skills into web3.
      </div>
      <div className="flex justify-start flex-wrap">
        {contact.map(({ id, platform, url }) => (
          <div key={id} className="inline-block pr-5">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-bold text-cyan-500"
            >
              {platform}
              <IconContext.Provider
                value={{ size: 15, className: 'text-cyan-500 mx-1' }}
              >
                <FaExternalLinkSquareAlt />
              </IconContext.Provider>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
