import { contact } from '../clientData/contact.json';

export default function Contact() {
  const renderButton = (id, platform, url) => (
    <div key={id} className="text-center w-50 mr-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-white"
      >
        <div
          className="bg-gradient-to-br via-blue-500 from-indigo-500 to-cyan-500
          w-full rounded-full p-2 px-4"
        >
          {platform}
        </div>
      </a>
    </div>
  );

  return (
    <>
      <div className="">
        <div className="flex">
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

// {
//   "contact": [
//     {
//       "id": 1,
//       "platform": "Twitter (main)",
//       "url": "https://twitter.com/_elijah_d_r"
//     },
//     {
//       "id": 2,
//       "platform": "Twitter (nfts)",
//       "url": "https://twitter.com/0xElijah"
//     },
//     {
//       "id": 0,
//       "platform": "Github",
//       "url": "https://github.com/eedelosreyes2"
//     },
//     {
//       "id": 5,
//       "platform": "Email",
//       "url": "mailto:delosreyes.elijah@gmail.com"
//     },
//     {
//       "id": 3,
//       "platform": "Discord",
//       "url": "https://discordapp.com/users/451874012734423050"
//     },
//     {
//       "id": 4,
//       "platform": "LinkedIn",
//       "url": "https://www.linkedin.com/in/elijah-delos-reyes"
//     }
//   ]
// }
