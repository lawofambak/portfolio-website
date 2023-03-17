import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, currentPage, setCurrentPage }) => {
  const pageLowerCased = page.toLowerCase();

  return (
    <AnchorLink
      className={`${currentPage === pageLowerCased ? "text-pink" : ""}
        hover:text-pink transition duration-500`}
      href={`#${pageLowerCased}`}
      onClick={() => setCurrentPage(pageLowerCased)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ topOfPage, currentPage, setCurrentPage }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarColor = topOfPage ? "" : "bg-slate-blue";
  const navbarTextColor = topOfPage ? "" : "text-dark-blue";

  return (
    <nav
      className={`${navbarColor} ${navbarTextColor} z-40 w-full fixed top-0 py-6`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-4xl font-bold">AK</h4>

        {/* DESKTOP VERSION */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-sourcecodepro text-md font-semibold">
            <Link
              page="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="About"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Skills"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Projects"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Contact"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <div>
            <button onClick={() => setMenuToggled(!menuToggled)}>
              <img
                className="w-[45px] h-[45px]"
                src="assets/menu-icon.png"
                alt="menu icon"
              />
            </button>
          </div>
        )}

        {/* MOBILE VERSION */}
        {!isAboveSmallScreens && menuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-slate-blue w-[300px]">
            <div className="flex justify-end p-10">
              <button
                className="text-4xl text-dark-blue"
                onClick={() => setMenuToggled(!menuToggled)}
              >
                ✘
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-dark-blue font-sourcecodepro">
              <Link
                page="Home"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="About"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Skills"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Projects"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Contact"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
