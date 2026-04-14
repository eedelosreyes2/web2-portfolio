import { useState } from "react";
import { projects } from "../clientData/projects.json";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const isExpanded = visibleCount >= projects.length;

  return (
    <>
      <div className="font-bold text-lg pb-8">Projects</div>
      <div className="">
        {projects.slice(0, visibleCount).map((project, i) => {
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
            <div key={id} className="flex flex-col md:flex-row gap-6 py-6">
              <div className="min-w-[300px]">
                <img
                  src={image}
                  alt={title}
                  className="flex-shrink-0 rounded-lg object-cover md:h-40 m-auto"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-start pb-5">
                  <div className="flex flex-col gap-1">
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="text-sm text-slate-400">{dates}</div>
                  </div>
                </div>

                <p className="text-slate-300 pb-5">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {skills?.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4 w-max">
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-blue-700 hover:bg-blue-800 rounded-lg font-bold p-2 text-sm w-64"
                    >
                      Launch app
                    </a>
                  )}
                  <a
                    href={github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-slate-700 hover:bg-slate-800 rounded-lg font-bold p-2 text-sm w-64"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-8">
        <span
          className="text-cyan-500 hover:text-cyan-400 cursor-pointer"
          onClick={() => setVisibleCount(isExpanded ? 4 : projects.length)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </span>
      </div>
    </>
  );
}

/**
 * Deprecated projects:
 * 
  {
    "id": 4,
    "name": "diffusion_board_creator",
    "title": "Diffusion Board Creator",
    "dates": "May - Aug 2021",
    "description": "Created a web application enabling users to curate and personalize their preferred online content, offering the convenience of utilizing a Chrome extension or manually adding URLs to organize blog posts, tweets, YouTube videos, and more into custom boards, engaging seamless sharing with friends.",
    "skills": [
      "Javascript",
      "React",
      "Firebase",
      "Google Cloud",
      "Google Chrome Extension"
    ],
    "url": "https://diffusion-pinboard-creator-mvp.vercel.app",
    "github_url": "https://github.com/eedelosreyes2/diffusion-pinboard-creator-mvp",
    "image": "/projects/Diffusion_Board_Creator.png"
  },
  {
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
