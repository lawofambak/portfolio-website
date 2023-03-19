import { motion } from "framer-motion";

const Project = ({ title, desc, repo, site }) => {
  const editedTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      className="relative"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div
        className="absolute h-full w-full opacity-0 hover:opacity-95 transition duration-500
          bg-slate-blue z-30 flex flex-col justify-center items-center text-center p-12 text-white"
      >
        <p className="text-2xl font-playfair font-semibold">{title}</p>
        <p className="mt-4">{desc}</p>
        <p className="mt-8 hover:text-blue font-semibold">
          <a target="_blank" rel="noreferrer noopener" href={repo}>
            ► GitHub Repo ◀︎
          </a>
        </p>
        {site && (
          <p className="mt-4 hover:text-blue font-semibold">
            <a target="_blank" rel="noreferrer noopener" href={site}>
              ► Deployed Website ◀︎
            </a>
          </p>
        )}
      </div>
      <img src={`assets/${editedTitle}.png`} alt={`${editedTitle} img`} />
    </motion.div>
  );
};

export default Project;
