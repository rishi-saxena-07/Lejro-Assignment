import React, { useState, useEffect } from "react";
import lejhroLogo from "../../Assets/lejhro_logo_blue.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleHamburgerToggle = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-bottom-darker transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 lg:px-[10.6rem] py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={lejhroLogo} alt="Lejhro Logo" className="w-[10rem] h-auto" />
          </div>

          {/* Hamburger Menu Section */}
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold text-blue-600 hidden md:inline">
              <a href="https://www.lejhro.com/contact-us">Let's Talk <span className="text-lg font-bold">→</span></a>
            </span>
            <HamburgerMenu onClick={handleHamburgerToggle} />
          </div>
        </div>
      </div>
      {!isHamburgerOpen && <ScrollToTopButton />}
    </>
  );
};

export default ScrollNavbar;
