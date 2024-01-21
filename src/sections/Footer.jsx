import { footerLogo } from "../assets/images/index.js";
import { footerLinks, socialMedia } from "../assets/constants/index.js";
import { copyrightSign } from "../assets/icons/index.js";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className=" flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer" width={150} height={46} />
          </a>

          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            culpa distinctio dolorem esse, illo minus odio officiis provident
            quam recusandae saepe totam, ullam vel veniam voluptates! Corporis
            est sapiente veritatis!
          </p>

          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <img src={item.src} alt="" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <a href="/" className="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt=""
            width={20}
            height={20}
            className="m-0 rounded-full"
          />{" "}
          <p>Copyright All Rights Reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms and Conditions</p>
      </div>
    </footer>
  );
};
export default Footer;
