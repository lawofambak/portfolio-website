import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const motivationalQuotes = [
  "You miss 100% of the shots you don't take.",
  "All you have in life are moments, so make it count.",
  "Your story is more important than your happy ending.",
  "Either find a way or make one.",
  "Just show up every single day.",
  "Believe that life is worth living because it is.",
  "Everything's going to be okay at the end of the day. If it's not, it's not the end.",
];

const Contact = () => {
  const [motivationalQuote, setMotivationalQuote] = useState("");

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  const generateMotivation = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);

    setMotivationalQuote(motivationalQuotes[randomIndex]);
  };

  return (
    <section id="contact" className="pt-36">
      {isAboveMediumScreens ? (
        <div className="flex justify-between gap-5 h-[550px]">
          <motion.div
            className="flex flex-col items-center w-1/2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              className="border-2 border-white h-1/2"
              src="assets/contact-img.png"
              alt="contact img"
            />
            <div className="flex flex-col items-center font-sourcecodepro">
              <p className="text-xl text-center">
                Click to generate a motivational quote
              </p>
              <button
                className="text-white mt-6 font-semibold px-5 py-3 rounded-lg text-center bg-gradient-to-r from-cyan-400
              via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
              dark:focus:ring-cyan-800"
                onClick={generateMotivation}
              >
                Generate Motivation
              </button>
              <p className="text-center w-2/3 mt-7 italic">
                {motivationalQuote}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col w-1/2 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair text-3xl">Contact Me</p>
            <form
              className="flex flex-col items-center"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ca77a8825914b49b9aa26094abd23c14"
              method="POST"
            >
              {/* Name */}
              <input
                className="text-black w-full font-semibold placeholder-opaque-black p-3 mt-7 rounded-sm"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" &&
                    "Name must be 100 characters or less"}
                </p>
              )}
              {/* Email */}
              <input
                className="text-black w-full font-semibold placeholder-opaque-black p-3 mt-5 rounded-sm"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" &&
                    "Email must be a valid email"}
                </p>
              )}
              {/* Message */}
              <textarea
                className="text-black w-full font-semibold placeholder-opaque-black p-3 mt-5 rounded-sm"
                type="text"
                placeholder="Message"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 1500,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" && "Message is required"}
                  {errors.message.type === "maxLength" &&
                    "Message must be 1500 characters or less"}
                </p>
              )}
              {/* Contact Button */}
              <button
                type="submit"
                className="font-semibold px-5 py-3 rounded-lg text-center bg-white text-dark-blue hover:bg-blue
                hover:text-white transition duration-500 ease-in-out mt-5"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="flex flex-col items-center h-[550px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair text-3xl">Contact Me</p>
          <form
            className="flex flex-col items-center"
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/ca77a8825914b49b9aa26094abd23c14"
            method="POST"
          >
            {/* Name */}
            <input
              className="text-black w-full font-semibold placeholder-opaque-black p-3 mt-7 rounded-sm"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "Name is required"}
                {errors.name.type === "maxLength" &&
                  "Name must be 100 characters or less"}
              </p>
            )}
            {/* Email */}
            <input
              className="text-black w-full font-semibold placeholder-opaque-black p-3 mt-5 rounded-sm"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "Email is required"}
                {errors.email.type === "pattern" &&
                  "Email must be a valid email"}
              </p>
            )}
            {/* Message */}
            <textarea
              className="text-black w-full font-semibold placeholder-opaque-black p-3 mt-5 rounded-sm"
              type="text"
              placeholder="Message"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 1500,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "Message is required"}
                {errors.message.type === "maxLength" &&
                  "Message must be 1500 characters or less"}
              </p>
            )}
            {/* Contact Button */}
            <button
              type="submit"
              className="font-semibold px-5 py-3 rounded-lg text-center bg-white text-dark-blue hover:bg-blue
                hover:text-white transition duration-500 ease-in-out mt-5"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
