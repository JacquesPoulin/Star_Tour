import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full p-5 bg_nightsky dark:bg_lightsky">
      {/* Container Helps + Icons */}
      <div className="w-6/6 h-0.5 -m-5 bg-slate-50 dark:bg-slate-900" />
      <div className="flex flex-row flex-wrap w-full md:pb-px20">
        {/* Helps -- phone -- adress -- faq */}
        <div className="flex flex-wrap justify-between w-2/3 px-1 py-5">
          {/* Phone */}
          <a href="tel:0607514408">
            <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
              <Logo myStyle="w-8 h-8" name="logos-phone" id="logos-phone" />
              <span>
                Votre Conseiller Star Tour <br />
                06 07 51 44 08
              </span>
            </p>
          </a>
          {/* Adress */}
          <a href="https://www.google.fr/maps/place/Wild+Code+School/@43.4633631,-1.5136242,17z/data=!3m1!4b1!4m5!3m4!1s0xd51151b04400001:0x5e8e4026b1a5e55f!8m2!3d43.4633437!4d-1.5114351">
            <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
              <Logo
                myStyle="w-8 h-8"
                name="logos-localisation"
                id="logos-localisation"
              />
              <span>
                Trouver votre <br />
                Agence Star Tour
              </span>
            </p>
          </a>
          {/* FAQ */}
          <a href="www.google.com">
            <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900">
              <Logo myStyle="w-8 h-8" name="logos-faq" id="logos-faq" />
              <span>FAQ</span>
            </p>
          </a>
        </div>

        {/* Icons -- fb -- twitter -- insta -- linkedin -- github -- youtube */}
        <div className="flex flex-wrap justify-end w-1/3 px-1 py-5">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/StarWars.fr"
            className="hover:text-[#4267B2] p-3 text-slate-50 dark:text-slate-900"
          >
            <span className="sr-only ">Facebook</span>
            <Logo myStyle="w-6 h-6" name="logos-facebook" id="logos-facebook" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/StarWarsFR"
            className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#1DA1F2]"
          >
            <span className="sr-only">Twitter</span>
            <Logo myStyle="w-6 h-6" name="logos-twitter" id="logos-twitter" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/starwars/"
            className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#7e22ce]"
          >
            <span className="sr-only">Instagram</span>
            <Logo
              myStyle="w-6 h-6"
              name="logos-instagram"
              id="logos-instagram"
            />
          </a>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/showcase/starwars/about/"
            className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#0B66C2]"
          >
            <span className="sr-only">Linkedin</span>
            <Logo myStyle="w-6 h-6" name="logos-linkedin" id="logos-linkedin" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/"
            className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#252A30] "
          >
            <span className="sr-only">GitHub</span>
            <Logo myStyle="w-6 h-6" name="logos-github" id="logos-github" />
          </a>
          {/* Youtube */}
          <a
            href="https://www.youtube.com/c/StarWars"
            className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#FF0000]"
          >
            <span className="sr-only">Youtube</span>
            <Logo myStyle="w-6 h-6" name="logos-youtube" id="logos-youtube" />
          </a>
        </div>
      </div>

      {/* :CGV/NEWSLETTER */}
      {/* <div>
         <nav className="flex flex-wrap justify-center p-3 text-lg list-none text-slate-50 dark:text-slate-900">
          <li>
            <button
              className="p-3 text-slate-50 dark:text-slate-900 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-50 focus:ring-1 focus:ring-slate-50 dark:focus:ring-slate-900 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
              type="button"
              data-modal-toggle="extralarge-modal"
            >
              CGV
            </button>
          </li>
          <li>
            <button
              className="p-3 text-slate-50 dark:text-slate-900 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-50 focus:ring-1 focus:ring-slate-50 dark:focus:ring-slate-900 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
              type="button"
              data-modal-toggle="large-modal"
            >
              Newsletter
            </button>
          </li>
        </nav> */}
      {/* :COPYRIGHT */}
      <div className="flex justify-center">
        <a
          href="https://www.wildcodeschool.com"
          className="pt-5 text-sm text-center text-slate-50 dark:text-slate-900"
        >
          <span>
            &copy;2022, Wild Code School Biarritz <br />
            Astrid Jacques Rémi Nicolas Geoffrey
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
