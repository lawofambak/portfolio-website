import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
}

const Navbar = ({ currentPage, setCurrentPage }) => {
    return(
        <nav className={`z-40 w-full fixed top-0 py-6`} >
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-4xl font-bold">AK</h4>

                {/* DESKTOP VERSION */}
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
            </div>
        </nav>
    );
}

export default Navbar;