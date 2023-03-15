import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Dots from "./components/Dots";
import LineDivider from "./components/LineDivider";
import Landing from "./pages/Landing";
import About from "./pages/About";

// start tailwind build process
// npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
// https://www.youtube.com/watch?v=JSJ8ftr92Vw

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [topOfPage, setTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
      } else {
        setTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-dark-blue">
      <Navbar
        topOfPage={topOfPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <Dots currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        <Landing setCurrentPage={setCurrentPage} />
      </div>
      <LineDivider />
      <div className="w-5/6 mx-auto md:h-full">
        <About />
      </div>
    </div>
  );
}

export default App;
