import { useRef } from "react";
import { projects } from "../clientData/projects.json";

export default function Projects() {
  const ref = useRef({});

  const handleClick = (id) => {
    if (ref) {
      ref.current[id]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="font-bold text-lg pb-8">Projects</div>
      {/* https://flowbite.com/docs/components/accordion/ */}
      <div id="accordion-flush" data-accordion="collapse">
        {projects.map((project, i) => {
          const {
            id,
            title,
            name,
            dates,
            description,
            skills,
            url,
            github_url,
            image,
          } = project;
          return (
            // <div key={id} ref={ref.current[id] ??= { current: null }}>
            <div key={id} ref={(ref.current[id] ??= { current: null })}>
              <div
                className="flex justify-between items-center py-8 w-full cursor-pointer border-b border-slate-700"
                data-accordion-target={`#${name}`}
                aria-expanded="true"
                onClick={() => handleClick(id)}
              >
                <div className="text-xl md:text-3xl">{title}</div>
                <svg
                  data-accordion-icon
                  className="w-4 h-4 md:w-6 md:h-6 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </div>
              <div
                id={name}
                className="hidden flex flex-col"
                aria-labelledby={id}
              >
                {image && <img src={image} />}
                <div className="flex flex-col gap-5 pt-5">
                  <div className="text-slate-300">{description}</div>
                  <div className="flex flex-col md:flex-row gap-5 pb-12">
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center flex-grow bg-green-700 hover:bg-green-800 rounded-lg font-bold w-full p-2 md:p-3"
                      >
                        Launch App
                      </a>
                    )}
                    <a
                      href={github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-center flex-grow bg-blue-700 hover:bg-blue-800 rounded-lg font-bold w-full p-2 md:p-3"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

/**
 * Deprecated projects:
 * 
 * {
    "id": 4,
    "name": "solana_wallet_tracker",
    "title": "Solana Wallet Tracker",
    "dates": "Jun 2022",
    "description": "Developed a Solana wallet analysis tool enabling users to effortlessly track both token balances and NFT holdings, serving as a learning project in the realm of Solana development.",
    "skills": [
      "Solana Web3",
      "JSON RPC",
      "Moralis Solana",
      "Typescript",
      "Next",
      "Tailwind"
    ],
    "url": "https://solana-wallet-tracker-eli.vercel.app",
    "github_url": "https://github.com/eedelosreyes2/solana-wallet-tracker",
    "image": "/projects/Solana_Wallet_Tracker.png"
  },
  {
    "id": 3,
    "name": "solana_pay_store",
    "title": "Solana Pay Store",
    "dates": "Jun 2022",
    "description": "Established an e-commerce platform seamlessly integrated with Solana Pay, empowering users to make purchases using SPL tokens. Inspired from the Buildspace community.",
    "skills": [
      "Solana Pay",
      "Solana Wallet Adapter",
      "Typescript",
      "Next",
      "IPFS"
    ],
    "url": "https://solana-pay-eli.vercel.app",
    "github_url": "https://github.com/eedelosreyes2/solana-pay-starter",
    "image": "/projects/Solana_Pay_Store.png"
  },
 * 
 * 
 */
