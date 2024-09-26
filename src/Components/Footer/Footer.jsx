import twitter from "../../Assets/twitter.png";
import facebook from "../../Assets/facebook.png";
import linkedIn from "../../Assets/linkedin-logo.png";
import youTube from "../../Assets/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-2 bg-blue-500"></div>
      <div className="footer-main-container flex flex-col px-[10.6rem] py-7">
        <div className="footer-info-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="company-div flex flex-col mb-4 ">
            <div>
              <p className="font-bold text-2xl mb-2">Company</p>
            </div>
            <div>
              <ul>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Innovations
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Business Services
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Financial services
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Lejhro Recruiter
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  About
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Blogs
                </li>
              </ul>
            </div>
          </div>
          <div className="programs-div flex flex-col mb-4 ">
            <div>
              <p className="font-bold text-2xl mb-2">Programs</p>
            </div>
            <div>
              <ul>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Lejhro Bootcamp
                </li>
              </ul>
            </div>
          </div>
          <div className="support-div flex flex-col mb-4 ">
            <div>
              <p className="font-bold text-2xl mb-2">Support</p>
            </div>
            <div>
              <ul>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Contact
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Terms of Use
                </li>
                <li className="cursor-pointer hover:text-blue-500 my-1">
                  Privacy Statement
                </li>
              </ul>
            </div>
          </div>
          <div className="connect-div flex flex-col mb-4 ">
            <div>
              <p className="font-bold text-2xl mb-2">Connect with us</p>
            </div>
            <div className="flex flex-row justify-start gap-x-5">
             <a href="https://www.twitter.com/" className="cursor-pointer hover:text-blue-500">
             <img
                className="cursor-pointer hover:text-blue-500 w-6 h-auto my-1"
                src={twitter}
                alt="Twitter"
              />
             </a>
             <a href="https://www.facebook.com/" className="cursor-pointer hover:text-blue-500">
             <img
                className=" w-6 h-auto my-1"
                src={facebook}
                alt="Facebook"
              />
             </a>
            <a href="https://www.linkedin.com/" className="hover:text-blue-500">
            <img
                className=" w-6 h-auto my-1"
                src={linkedIn}
                alt="Linkedin"
              />
            </a>
              <a href="https://www.youtube.com/"  className="hover:text-blue-500">
              <img
                className="w-6 h-auto my-1"
                src={youTube}
                alt="Youtube"
              />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center my-2">
          © 2024 LEJHRO. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
