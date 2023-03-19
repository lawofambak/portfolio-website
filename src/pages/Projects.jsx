import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Project from "../components/Project";

const Projects = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <section id="projects" className="pt-8 pb-24">
      <motion.div
        className="mt-20 mb-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-3 text-center md:text-start">
          <span className="text-blue">〈 </span>
          Projects
          <span className="text-blue"> 〉</span>
        </p>
      </motion.div>
      <div className="flex justify-center mt-10">
        {isAboveSmallScreens ? (
          <motion.div
            className="grid grid-cols-3 text-dark-blue"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <Project
              title="miBlog"
              desc="Full-stack blogging web application built with ReactJS, NodeJS, ExpressJS, and MySQL"
              repo="https://github.com/miBlog-project"
            />
            <Project
              title="Web3 Chat App"
              desc="Real-time messaging chat application built with NextJS, Charkru UI, socket.io, and wagmi"
              repo="https://github.com/lawofambak/web3-chat-app"
            />
            <Project
              title="Brewery Locator"
              desc="Brewery locator web application built with Open Brewery DB API"
              repo="https://github.com/lawofambak-random-playground/Brewery-API"
              site="https://ak-brewery.vercel.app/"
            />
            <Project
              title="Staking Pool Marketplace"
              desc="Platform for users to create their own staking pools as well as stake into other pools built with NextJS, MUI, NestJS, MongoDB, and Hardhat"
              repo="https://github.com/lawofambak/Staking-Pool-Marketplace"
              site="https://staking-pool-website.vercel.app/"
            />
            <Project
              title="Savings Calculator"
              desc="Python program that calculates future savings based on a specified APY and time period"
              repo="https://github.com/lawofambak-random-playground/Savings-Calculator"
            />
            <Project
              title="Crypto Salary Automation App"
              desc="Employee salary payment (in ETH) automation app built with ReactJS, Hardhat, ethersjs, and Chainlink for 2022 Encode X Chainlink hackathon"
              repo="https://github.com/lawofambak/ETH-Salary-Automation"
              site="https://eth-salary-automation.vercel.app/"
            />
            <Project
              title="Digital Clock"
              desc="Simple web application that displays the current time with color changing buttons built with ReactJS"
              repo="https://github.com/lawofambak-random-playground/Digital-Clock"
              site="https://js-clock-lawofambak.vercel.app/"
            />
            <Project
              title="DeFi Frontend"
              desc="Frontend website layout for DeFi dApps built with NextJS"
              repo="https://github.com/lawofambak-web3-playground/defi-frontend-example"
            />
            <Project
              title="Decentralized Speculations Market"
              desc="Proof of Concept for a marketplace that allows users to create their own speculation pools for certain crypto assets built with Hardhat"
              repo="https://github.com/lawofambak-research/decentralized-speculations-market"
            />
          </motion.div>
        ) : (
          <div>
            <Project
              title="miBlog"
              desc="Full-stack blogging web application built with ReactJS, NodeJS, ExpressJS, and MySQL"
              repo="https://github.com/miBlog-project"
            />
            <Project
              title="Web3 Chat App"
              desc="Real-time messaging chat application built with NextJS, Charkru UI, socket.io, and wagmi"
              repo="https://github.com/lawofambak/web3-chat-app"
            />
            <Project
              title="Brewery Locator"
              desc="Brewery locator web application built with Open Brewery DB API"
              repo="https://github.com/lawofambak-random-playground/Brewery-API"
              site="https://ak-brewery.vercel.app/"
            />
            <Project
              title="Staking Pool Marketplace"
              desc="Platform for users to create their own staking pools as well as stake into other pools built with NextJS, MUI, NestJS, MongoDB, and Hardhat"
              repo="https://github.com/lawofambak/Staking-Pool-Marketplace"
              site="https://staking-pool-website.vercel.app/"
            />
            <Project
              title="Savings Calculator"
              desc="Python program that calculates future savings based on a specified APY and time period"
              repo="https://github.com/lawofambak-random-playground/Savings-Calculator"
            />
            <Project
              title="Crypto Salary Automation App"
              desc="Employee salary payment (in ETH) automation app built with ReactJS, Hardhat, ethersjs, and Chainlink for 2022 Encode X Chainlink hackathon"
              repo="https://github.com/lawofambak/ETH-Salary-Automation"
              site="https://eth-salary-automation.vercel.app/"
            />
            <Project
              title="Digital Clock"
              desc="Simple web application that displays the current time with color changing buttons built with ReactJS"
              repo="https://github.com/lawofambak-random-playground/Digital-Clock"
              site="https://js-clock-lawofambak.vercel.app/"
            />
            <Project
              title="DeFi Frontend"
              desc="Frontend website layout for DeFi dApps built with NextJS"
              repo="https://github.com/lawofambak-web3-playground/defi-frontend-example"
            />
            <Project
              title="Decentralized Speculations Market"
              desc="Proof of Concept for a marketplace that allows users to create their own speculation pools for certain crypto assets built with Hardhat"
              repo="https://github.com/lawofambak-research/decentralized-speculations-market"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
