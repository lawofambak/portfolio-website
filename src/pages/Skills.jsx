import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-8 pb-24">
      <div className="flex flex-col gap-7 mt-20">
        <motion.div
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
            Skills
            <span className="text-blue"> 〉</span>
          </p>
        </motion.div>
        <motion.div
          className="bg-white text-dark-blue p-5 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-sourcecodepro text-center font-semibold underline">
            Programming & Markup Languages
          </p>
          {isAboveMediumScreens ? (
            <div className="flex flex-row gap-10">
              <div className="flex flex-col w-1/6">
                <img src="assets/js-logo.png" alt="javascript logo" />
                <p className="text-center font-sourcecodepro">JavaScript</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/ts-logo.png" alt="typescript logo" />
                <p className="text-center font-sourcecodepro">TypeScript</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/python-logo.png" alt="python logo" />
                <p className="text-center font-sourcecodepro">Python</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/css-logo.png" alt="css logo" />
                <p className="text-center font-sourcecodepro">CSS</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/html-logo.png" alt="html logo" />
                <p className="text-center font-sourcecodepro">HTML</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/solidity-logo.png" alt="solidity logo" />
                <p className="text-center font-sourcecodepro">Solidity</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-center gap-3">
                <img
                  className="min-w-[100px]"
                  src="assets/js-logo.png"
                  alt="javascript logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/ts-logo.png"
                  alt="typescript logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/python-logo.png"
                  alt="python logo"
                />
              </div>
              <div className="flex flex-row justify-center gap-3">
                <img
                  className="min-w-[100px]"
                  src="assets/css-logo.png"
                  alt="css logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/html-logo.png"
                  alt="html logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/solidity-logo.png"
                  alt="solidity logo"
                />
              </div>
            </div>
          )}
        </motion.div>
        <motion.div
          className="bg-white text-dark-blue p-5 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-sourcecodepro text-center font-semibold underline">
            Frameworks & Libraries
          </p>
          {isAboveMediumScreens ? (
            <div className="flex flex-row gap-10">
              <div className="flex flex-col w-1/6">
                <img src="assets/react-logo.png" alt="react logo" />
                <p className="text-center font-sourcecodepro">React</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/next-logo.png" alt="next logo" />
                <p className="text-center font-sourcecodepro">Next.js</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/node-logo.png" alt="node logo" />
                <p className="text-center font-sourcecodepro">Node.js</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/express-logo.png" alt="express logo" />
                <p className="text-center font-sourcecodepro">Express.js</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/hardhat-logo.png" alt="hardhat logo" />
                <p className="text-center font-sourcecodepro">Hardhat</p>
              </div>
              <div className="flex flex-col w-1/6">
                <img src="assets/ethers-logo.png" alt="ethers logo" />
                <p className="text-center font-sourcecodepro">ethers.js</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-center gap-3">
                <img
                  className="min-w-[100px]"
                  src="assets/react-logo.png"
                  alt="react logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/next-logo.png"
                  alt="next logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/node-logo.png"
                  alt="node logo"
                />
              </div>
              <div className="flex flex-row justify-center gap-3">
                <img
                  className="min-w-[100px]"
                  src="assets/express-logo.png"
                  alt="express logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/hardhat-logo.png"
                  alt="hardhat logo"
                />
                <img
                  className="min-w-[100px]"
                  src="assets/ethers-logo.png"
                  alt="ethers logo"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
