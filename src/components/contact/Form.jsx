/* eslint-disable jsx-a11y/label-has-associated-control */
/* erreur concernant le label qui est en dessous de l'input malgré l'id et htmlFor */
import React from "react";
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
          Pour nous contacter, merci d&apos;utiliser ce formulaire. Pour que
          nous puissions vous répondre, veuillez renseigner votre prénom, votre
          nom, et votre email. <br />
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
                id="floating_firstname"
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
                id="floating_lastname"
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
                id="floating_email"
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
              id="floating_message"
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
      <div className="flex flex-col justify-center w-full mt-24 bp2_1:flex-col bp2_1:w-full">
        <div>
          <h2 className="w-full text-center underline-offset-4 text-slate-50 dark:text-slate-900 font-orb bp2_1:flex-col bp2_1:w-full">
            <u className="decoration-[#0780FE] dark:decoration-[#FF0010] bp2_1:flex-col bp2_1:w-full bp2_1:text-xl">
              SITES INTERNET DE NOS PARTENAIRES
            </u>
          </h2>
        </div>
        <div className="flex justify-center bp2_1:flex-col bp2_1:w-full">
          {partners &&
            partners.map((partner) => <PartnersButton {...partner} />)}
        </div>
      </div>
    </div>
  );
};

export default Form;
