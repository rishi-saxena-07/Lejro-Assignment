import React from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import lejhroLogo from "../../Assets/lejhro_logo_white.png";

const Header = () => {
  return (
    <>
      <div className="px-[10.6rem] py-[1.9rem] h-[15.6rem]" style={{ backgroundColor: "#d6932c" }}>
        <div className="top-header-header-div flex justify-between items-center ">
          {/* Logo Section */}
          <div className="top-header-header-logo-div">
            <a href="/" aria-label="HomePage">
              <img
                src={lejhroLogo}
                alt="Lejhro White Logo"
                className="top-header-fixed-logo w-[14rem] cursor-pointer"
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:hidden lg:flex space-x-12 text-white text-lg mr-2">
            <a
              href="http://www.lejhro.com/innovations"
              className="hover:text-gray-300"
            >
              Innovations
            </a>
            <a
              href="http://www.lejhro.com/business-services"
              className="hover:text-gray-300"
            >
              Business Services
            </a>
            <a
              href="http://www.lejhro.com/financial-services"
              className="hover:text-gray-300"
            >
              Financial Services
            </a>
            <a
              href="http://www.bootcamp.lejhro.com/"
              className="hover:text-gray-300"
            >
              Bootcamp
            </a>
          </div>

          {/* Hamburger Menu */}
          <HamburgerMenu />
        </div>
        <h2 className="home-page-name h2-heading text-5xl text-start py-[1.4rem] mb-[1.5rem]  text-white">
          Blogs
        </h2>
      </div>
    </>
  );
};

export default Header;
