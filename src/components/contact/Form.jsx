/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mx-16 pt-36">
        <h1 className=" bg-transparent border-2 border-[#0780FE] shadow-lg shadow-[#0780FE]/50 text-lg tracking-[0.2rem] text-[#0780FE] font-orb text-center px-20 py-4">
          CONTACT
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="w-4/5 text-sm m-12 px-6 text-center border-2 text-slate-50 border-y-transparent border-x-[#0780FE] font-exo bp3:border-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          provident ipsa quis, recusandae porro dicta nesciunt doloremque
          corporis, fuga necessitatibus corrupti voluptas perspiciatis magnam et
          vitae rem voluptatum deserunt nam.
        </p>
      </div>
      {/* CREATION DIV ENGLOBANT FORM DROIT & GAUCHE */}
      <form className="flex flex-wrap justify-center bp2_1:flex-col">
        {/* CREATION SECTION FORM GAUCHE */}
        <section className="flex justify-center w-2/4 bp2_1:flex-col bp2_1:w-full">
          {/* CREATION DIV FORM GAUCHE */}
          <div className="relative flex flex-col ">
            {/* CREATION PRENOM */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="name"
                name="floating_name"
                autoComplete="none"
                required="required"
                className="cursor-pointer block pl-3 py-2.5 w-full text-sm font-exo text-slate-50 bg-transparent border-0 border-b-2 border-l-2 border-[#0780FE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_name"
                className=" ml-3 absolute text-sm text-slate-50 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ÉCRIS TON NOM*
              </label>
            </div>
            {/* CREATION MAIL */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="email"
                name="floating_email"
                autoComplete="none"
                required="required"
                className="cursor-pointer block  pl-3 py-2.5 w-full text-sm font-exo text-slate-50 bg-transparent border-0 border-b-2 border-l-2 border-[#0780FE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_email"
                className=" ml-3 absolute text-sm text-slate-50 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ÉCRIS TON EMAIL*
              </label>
            </div>
            {/* CREATION PHONE */}
            <div className="relative z-0 flex flex-row m-5">
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="floating_phone"
                id="floating_phone"
                autoComplete="none"
                required="required"
                className="cursor-pointer pl-3 py-2.5 w-full text-sm text-slate-50 font-exo bg-transparent border-0 border-b-2 border-l-2 border-[#0780FE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_number"
                className=" ml-3 absolute text-sm text-slate-50 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ÉCRIS TON TÉLÉPHONE*
              </label>
            </div>
            {/* CREATION COUNTRY */}
            <div className="relative z-0 flex flex-row m-5">
              <label
                className="bp2_1:flex-col bp2_1:w-[50%] flex flex-row pl-3 py-2.5 border-2 border-l-[#0780FE] border-b-[#0780FE] border-t-transparent border-r-transparent text-sm text-slate-50 font-orb"
                htmlFor="country"
              >
                CHOISIS TON PAYS
              </label>
              <select
                id="countries"
                className="bp2_1:flex-col bp2_1:w-[50%] bp2_1:text-xs pl-3 text-sm bg-transparent border-0 border-b-2 border-[#0780FE] cursor-pointer text-slate-50 font-exo focus:outline-none"
              >
                <option>Wild Code School</option>
                <option>France</option>
                <option>Amérique</option>
                <option>Asie</option>
                <option>Afrique</option>
                <option>Tatooine</option>
                <option>Alderaan</option>
                <option>Bespin</option>
              </select>
            </div>
          </div>
        </section>
        {/* CREATION SECTION FORM DROIT */}
        <section className="flex justify-center w-2/4 bp2_1:flex-col bp2_1:w-full">
          {/* CREATION DIV FORM DROIT */}
          <div className="relative z-0 flex flex-row m-5">
            <textarea
              type="text"
              name="floating_message"
              autoComplete="none"
              required="required"
              className="bp2_1:w-fulltext-sm h-full pl-3 py-2.5 bg-transparent resize-none w-96 text-slate-50 cursor-pointer font-exo border-0 border-b-2 border-l-2 border-[#0780FE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_message"
              className=" ml-3 absolute text-sm text-slate-50 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ÉCRIS TON MESSAGE*
            </label>
          </div>
        </section>

        {/* CREATION BUTTON SUBMIT */}
        <section className="flex justify-center w-full">
          <button className="mt-10 mb-20 font-orb cursor-pointer px-10 text-center border-2 text-slate-50 border-y-transparent border-x-[#0780FE] font-exo hover:text-[#0780FE]">
            ENVOYER
          </button>
        </section>
      </form>
    </div>
  );
};

export default Form;
