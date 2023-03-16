import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-28">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-center md:text-start">
            <span className="text-blue">〈 </span>
            About Me
            <span className="text-blue"> 〉</span>
          </p>
          <p className="font-sourcecodepro mt-10 mb-7 text-left">
            Hello 👋, Alex here. I am a full-stack developer specializing in
            front-end web development as well as blockchain development. I come
            from an academic background in Economics with knowledge of game
            theory, international markets, and financial analysis.
            Professionally, I have previous work experience in buy-side M&A
            advisory. I am always looking to learn and implement new innovative
            technologies.
          </p>
        </motion.div>
        <motion.div
          className="md:w-2/3 mt-16 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-sourcecodepro font-semibold text-center text-xl">
            Interests & Learning Topics
          </p>
          <img src="assets/about-img.png" alt="about img" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
