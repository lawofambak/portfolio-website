import AnchorLink from 'react-anchor-link-smooth-scroll';

const Dot = ({ currentPage, setCurrentPage}) => {
  const currentStyle = `relative bg-pink before:absolute before:w-6 before:h-6
                        before:rounded-full before:border-2 before:border-pink
                        before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${currentPage === "home" ? currentStyle : "bg-dark-grry"}
          w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setCurrentPage("home")}
      />
    </div>
  )
}

export default Dot;