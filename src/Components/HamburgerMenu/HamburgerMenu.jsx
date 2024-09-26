import { useState } from "react";
import { Drawer } from "antd";
import twitter from "../../Assets/twitter.png";
import facebook from "../../Assets/facebook.png";
import linkedIn from "../../Assets/linkedin-logo.png";
import youTube from "../../Assets/youtube.png";
import lejhroLogo from "../../Assets/lejhro_logo_blue.png";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false); 

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={showDrawer}
        className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white text-black border-black focus:outline-none"
      >
        <span className="block w-6 h-0.5 bg-black mb-1" />
        <span className="block w-4 h-0.5 bg-black mb-1" />
        <span className="block w-6 h-0.5 bg-black" />
      </button>

      <Drawer
        title={
          <a href="https://www.lejhro.com/">
            <img
              src={lejhroLogo}
              alt="Lejhro Logo"
              className="lejro-logo w-[13rem] ml-[2rem]"
            />
          </a>
        }
        placement="right"
        closable={false}
        onClose={closeDrawer}
        open={open}
        width={380}
        extra={
          <button
            onClick={closeDrawer}
            className="text-black bg-white border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
          >
            X
          </button>
        }
      >
        <div className="menu-list">
          <div className="flex flex-col space-y-5 font-bold text-xl">
            <a href="/innovations" className="menu-item p-1.5">
              Innovations
            </a>
            <a href="http://www.bootcamp.lejhro.com/" className="menu-item p-2">
              Bootcamp
            </a>
            <a href="/financial-services" className="menu-item p-1.5">
              Financial Services
            </a>
            <a href="/about" className="menu-item p-1.5">
              About
            </a>
            <a href="/contact-us" className="menu-item p-1.5">
              Contact Us
            </a>
            <a href="/blog" className="menu-item p-1.5">
              Blog
            </a>
          </div>
        </div>
        <div className="social-icons flex space-x-4 mt-4 ml-1">
          <a href="https://www.twitter.com/" aria-label="Twitter">
            <img src={twitter} alt="Twitter" className="w-6 h-auto" />
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <img src={facebook} alt="Facebook" className="w-6 h-auto" />
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">
            <img src={linkedIn} alt="LinkedIn" className="w-6 h-auto" />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            <img src={youTube} alt="YouTube" className="w-6 h-auto" />
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
