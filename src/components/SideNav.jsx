import AnchorLink from "react-anchor-link-smooth-scroll";

const SideNav = () => {
  return (
    <div
      className="flex flex-col fixed gap-3 top-[60%] right-7 bg-dark-blue rounded-full p-1
        border-slate-blue border-4"
    >
      <AnchorLink className="w-[25px] h-[25px]" href="#home">
        <img src="assets/home-icon.png" alt="home icon" />
      </AnchorLink>
      <AnchorLink className="w-[25px] h-[25px]" href="#about">
        <img src="assets/about-icon.png" alt="about icon" />
      </AnchorLink>
      <AnchorLink className="w-[25px] h-[25px]" href="#skills">
        <img src="assets/skills-icon.png" alt="skills icon" />
      </AnchorLink>
      <AnchorLink className="w-[25px] h-[25px]" href="#projects">
        <img src="assets/projects-icon.png" alt="projects icon" />
      </AnchorLink>
      <AnchorLink className="w-[25px] h-[25px]" href="#contact">
        <img src="assets/contact-icon.png" alt="contact icon" />
      </AnchorLink>
    </div>
  );
};

export default SideNav;
