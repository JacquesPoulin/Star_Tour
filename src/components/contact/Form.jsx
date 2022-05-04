/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Logo from "../Logo";
import partners from "../../../data/partners";
import PartnersButton from "./PartnersButton";

const Form = () => {
  return (
    <div className="flex flex-col">
      {/* >> TITLE */}
      <div className="flex justify-center mx-16 pt-36">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2 bp2:text-5xl bp3:text-4xl bp4:w-full bp4:text-center">
          Contact
        </h1>
      </div>
      {/* // ------------------------------------------ */}
      {/* >> TEXT */}
      <div className="flex justify-center">
        <p className="w-4/5 text-md m-12 px-6 text-center border-4 text-slate-50 dark:text-slate-900 border-y-transparent border-x-[#0780FE] dark:border-x-[#FF0010] font-exo bp3:border-none">
          Pour nous contacter, merci d'utiliser ce formulaire. Pour que nous
          puissions vous répondre, veuillez renseigner votre prénom, votre nom,
          et votre email. <br />
          Exprimez votre message de façon claire pour que votre demande soit
          traitée le plus rapidement possible. <br />
          Merci et à bientôt chez Star Tour !
        </p>
      </div>
      {/* // ------------------------------------------ */}
      {/* >> FORM */}
      <form
        autoComplete="none"
        className="flex flex-wrap justify-center bp2_1:flex-col bp2_1:justify-center"
      >
        {/* >> SECTION FORM LEFT */}
        <div className="flex justify-center w-2/4 bp2_1:flex-col bp2_1:w-full">
          {/* >> DIV FORM LEFT */}
          <div className="relative flex flex-col">
            {/* >> FIRSTNAME */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="name"
                name="floating_firstname"
                autoComplete="none"
                required="required"
                className="cursor-pointer w-96 pl-3 py-2.5 text-sm font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0100] peer bp2_1:w-full"
                placeholder=" "
              />
              <label
                htmlFor="floating_firstname"
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                ÉCRIS TON PRÉNOM*
              </label>
            </div>
            {/* >> LASTNAME */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="name"
                name="floating_lastname"
                autoComplete="none"
                required="required"
                className="cursor-pointer w-96 pl-3 py-2.5 text-sm font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0010] peer bp2_1:w-full"
                placeholder=" "
              />
              <label
                htmlFor="floating_lastname"
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                ÉCRIS TON NOM*
              </label>
            </div>
            {/* >> ADDRESS MAIL */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="email"
                name="floating_email"
                autoComplete="none"
                required="required"
                className="cursor-pointer w-96 pl-3 py-2.5 text-sm font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0010] peer bp2_1:w-full"
                placeholder=" "
              />
              <label
                htmlFor="floating_email"
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                ÉCRIS TON EMAIL*
              </label>
            </div>
            {/* >> PHONE NUMBER */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="floating_number"
                id="floating_number"
                autoComplete="none"
                required="required"
                className="cursor-pointer w-96 pl-3 py-2.5 text-sm text-slate-50 dark:text-slate-900 font-exo bg-transparent border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0010] peer bp2_1:w-full"
                placeholder=" "
              />
              <label
                htmlFor="floating_number"
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                ÉCRIS TON TÉLÉPHONE*
              </label>
            </div>
          </div>
        </div>
        {/* // ------------------------------------------ */}
        {/* >> SECTION FORM RIGHT */}
        <div className="flex justify-center w-2/4 bp2_1:flex-col bp2_1:w-full">
          {/* >> DIV FORM RIGHT */}
          <div className="relative z-0 flex flex-row m-5">
            <textarea
              type="text"
              name="floating_message"
              autoComplete="off"
              required="required"
              className="bp2_1:w-fulltext-sm h-full pl-3 py-2.5 bg-transparent resize-none w-96 text-slate-50 dark:text-slate-900 cursor-pointer font-exo border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0010] peer bp2_1:w-full"
              placeholder=" "
            />
            <label
              htmlFor="floating_message"
              className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              ÉCRIS TON MESSAGE*
            </label>
          </div>
        </div>
        {/* // ------------------------------------------ */}
        {/* >> BUTTON SUBMIT */}
        <section className="flex justify-center w-full">
          <button
            type="submit"
            className="mt-10 mb-20 font-orb cursor-pointer px-10 text-center border-4 text-slate-50 dark:text-slate-900 border-y-transparent border-x-[#0780FE] dark:border-x-[#FF0010] hover:text-[#0780FE] dark:hover:text-[#FF0010]"
          >
            ENVOYER
          </button>
        </section>
      </form>
      {/* // ------------------------------------------ */}
      {/* >> SECTION PARTNERS */}
      <div className="flex flex-col justify-center w-full mt-24">
        <div>
          <h2 className="w-full text-center underline-offset-4 text-slate-50 dark:text-slate-900 font-orb">
            <u className="decoration-[#0780FE] dark:decoration-[#FF0010]">
              SITES INTERNET DE NOS PARTENAIRES
            </u>
          </h2>
        </div>
        <div className="flex justify-center">
          {partners &&
            partners.map((partner) => <PartnersButton {...partner} />)}
        </div>
      </div>
      {/* // ------------------------------------------ */}
      {/* >> FOOTER CONTACT */}
      <footer className="w-full p-5 bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat font-exo dark:bg-[url('./assets/images/quizPic/white.jpg')] dark:bg-[length:100vw] dark:bg-repeat">
        {/* >> CONTAINER HELPS + ICONS */}
        <div className="w-6/6 h-1 -m-5 bg-[#0780FE] dark:bg-[#FF0010]" />
        <div className="flex flex-row flex-wrap w-full md:pb-px20">
          {/* >> HELPS -- PHONE -- ADDRESS -- FAQ */}
          <div className="flex flex-wrap justify-between w-2/3 px-1 py-5">
            {/* >> PHONE */}
            <a href="tel:0607514408">
              <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
                <Logo myStyle="w-8 h-8" name="logos-phone" id="logos-phone" />
                <span>
                  Votre Conseiller Star Tour <br />
                  06 07 51 44 08
                </span>
              </p>
            </a>
            {/* >> ADDRESS */}
            <a
              href="https://www.google.fr/maps/place/Wild+Code+School/@43.4633631,-1.5136242,17z/data=!3m1!4b1!4m5!3m4!1s0xd51151b04400001:0x5e8e4026b1a5e55f!8m2!3d43.4633437!4d-1.5114351"
              target="_blank"
              rel="noreferrer"
            >
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
            {/* >> FAQ */}
            <a href="www.google.com">
              <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
                <Logo myStyle="w-8 h-8" name="logos-faq" id="logos-faq" />
                <span>FAQ</span>
              </p>
            </a>
          </div>
          {/* // ------------------------------------------ */}
          {/* >> ICONS -- FB -- TWITTER -- INSTA -- LINKEDIN -- GITHUB -- YOUTUBE */}
          <div className="flex flex-wrap justify-end w-1/3 px-1 py-5">
            {/* >> FACEBOOK */}
            <a
              href="https://www.facebook.com/StarWars.fr"
              className="hover:text-[#4267B2] p-3 text-slate-50 dark:text-slate-900"
            >
              <span className="sr-only ">Facebook</span>
              <Logo
                myStyle="w-6 h-6"
                name="logos-facebook"
                id="logos-facebook"
              />
            </a>
            {/* >> TWITTER */}
            <a
              href="https://twitter.com/StarWarsFR"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#1DA1F2]"
            >
              <span className="sr-only">Twitter</span>
              <Logo myStyle="w-6 h-6" name="logos-twitter" id="logos-twitter" />
            </a>
            {/* >> INSTAGRAM */}
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
            {/* >> LINKEDIN */}
            <a
              href="https://www.linkedin.com/showcase/starwars/about/"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#0B66C2]"
            >
              <span className="sr-only">Linkedin</span>
              <Logo
                myStyle="w-6 h-6"
                name="logos-linkedin"
                id="logos-linkedin"
              />
            </a>
            {/* >> GITHUB */}
            <a
              href="https://github.com/"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#252A30] "
            >
              <span className="sr-only">GitHub</span>
              <Logo myStyle="w-6 h-6" name="logos-github" id="logos-github" />
            </a>
            {/* >> YOUTUBE */}
            <a
              href="https://www.youtube.com/c/StarWars"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900  hover:text-[#FF0000]"
            >
              <span className="sr-only">Youtube</span>
              <Logo myStyle="w-6 h-6" name="logos-youtube" id="logos-youtube" />
            </a>
          </div>
        </div>
        {/* // ------------------------------------------ */}
        {/* >> COPYRIGHT */}
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
    </div>
  );
};

export default Form;
