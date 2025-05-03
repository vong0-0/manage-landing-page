import { useEffect, useRef, useState } from "react";
import OverlayNavigation from "./OverlayNavigation";

import { AlignJustify } from "lucide-react";

export default function Navigationbar() {
  const [openOverlayNav, setOpenOverlayNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const links = ["pricing", "product", "about us", "careers", "community"];

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          scrolled ? "shadow-md bg-white" : "shadow-none bg-transparent"
        } w-full fixed top-0 left-0 py-4 transition-all duration-300`}
      >
        <div className="container relative">
          <div className="flex justify-between items-center">
            <a href="#" aria-label="Go to home page">
              <img src="images/logo.svg" alt="Website logo" />
            </a>
            <button
              aria-label="Open dropdown navigation links"
              className="md:hidden"
              onClick={() => setOpenOverlayNav(true)}
            >
              <AlignJustify />
            </button>
            <div
              className={`${
                openOverlayNav ? "visible opacity-100" : "invisible opacity-0"
              } bg-overlay z-10 transition-all duration-300`}
              tabIndex={0}
              onClick={() => setOpenOverlayNav(false)}
            ></div>
            <div
              className={`${
                openOverlayNav ? "max-h-[1000px]" : "max-h-0"
              } w-full absolute left-0 -bottom-[50%] translate-y-full z-50 transition-all duration-300 overflow-hidden`}
            >
              <OverlayNavigation setOpenOverlayNav={setOpenOverlayNav} />
            </div>
            <ul className="hidden md:flex items-center gap-6">
              {links.map((link, index) => (
                <li key={link + index} className="relative group">
                  <a href="#" className="text-sm font-medium">
                    {link}
                  </a>
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] -translate-x-1/2 translate-y-full bg-bright-red group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
            <button className="hidden md:block btn btn--orange btn--shadow text-sm font-bold">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
