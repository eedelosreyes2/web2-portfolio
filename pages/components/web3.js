import { contact } from '../clientData/contact.json';

export default function Web3() {
  return (
    <div>
      <div className="font-bold pb-5">Gm</div>
      {/* <hr className="pb-5 w-9" /> */}
      <div className="pb-2">
        Elijah here, a web2 dev (but web3 degen) currently learning and looking
        to extend my skills into web3.
      </div>
      <div>
        {contact.map(({ id, platform, url }) => (
          <div key={id} className="inline-block pr-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-bold text-cyan-500 pr-1"
            >
              {platform}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
