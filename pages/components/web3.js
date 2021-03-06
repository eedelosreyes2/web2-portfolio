import { contact } from '../clientData/contact.json';

export default function Web3() {
  const renderButton = (id, platform, url) => (
    <div key={id} className="text-center w-50 mb-3 mr-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-white"
      >
        <div
          className="bg-gradient-to-br via-purple-500 from-indigo-500 to-pink-500
          w-full rounded-md p-2 sm:p-3"
        >
          {platform}
        </div>
      </a>
    </div>
  );

  return (
    <>
      <div className="font-bold pb-5">Gm</div>
      <div className="pb-2">
        Elijah here, a web2 dev (but web3 degen) currently learning and looking
        to extend my skills into web3.
      </div>
      <div>
        <div className="flex mt-5">
          <div className="flex justify-start flex-wrap">
            {contact.map(({ id, platform, url }) =>
              renderButton(id, platform, url)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
