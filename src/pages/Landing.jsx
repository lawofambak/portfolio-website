import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setCurrentPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {/* Profile Image */}
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:rounded-full before:w-full before:h-full before:border-2 before:border-blue
            before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[350px] md:max-w-[500px]"
              src="assets/profile-img.png"
              alt="profile img"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
            max-w-[350px] md:max-w-[500px]"
            src="assets/profile-img.png"
            alt="profile img"
          />
        )}
      </div>
      {/* Profile Description */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Alex {""}
            <span
              className="xs:relative xs:font-semibold z-20 text-transparent bg-clip-text
                bg-gradient-to-r from-[#A4BFEF] to-[#6A93CB]"
            >
              Kim
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Full stack developer with a passion for building websites
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
