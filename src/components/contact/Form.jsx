/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mx-16 pt-36">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2 bp4:text-4xl bp4:w-full bp4:text-center">
          Contact
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="w-4/5 text-lg m-12 px-6 text-center border-4 text-slate-50 dark:text-slate-900 border-y-transparent border-x-[#0780FE] dark:border-x-[#FF0010] font-exo bp3:border-none">
          Pour nous contacter, utilisez ce formulaire. Pour que nous puissions
          vous répondre, veuillez remplir votre pseudo et votre email. <br />
          Exprimez votre message de façon clair pour que votre demande soit
          traitée le plus rapidement possible. <br />
          Merci et à bientôt chez Star Tour.
        </p>
      </div>
      {/* CREATION DIV ENGLOBANT FORM DROIT & GAUCHE */}
      <form className="flex flex-wrap justify-center bp2_1:flex-col bp2_1:justify-center">
        {/* CREATION SECTION FORM GAUCHE */}
        <section className="flex justify-center w-2/4 bp2_1:flex-col bp2_1:w-full">
          {/* CREATION DIV FORM GAUCHE */}
          <div className="relative flex flex-col">
            {/* CREATION PRENOM */}
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
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ÉCRIS TON PRÉNOM*
              </label>
            </div>
            {/* CREATION NOM */}
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
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="cursor-pointer w-96 pl-3 py-2.5 text-sm font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0010] peer bp2_1:w-full"
                placeholder=" "
              />
              <label
                htmlFor="floating_email"
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ÉCRIS TON EMAIL*
              </label>
            </div>
            {/* CREATION PHONE */}
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
                className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ÉCRIS TON TÉLÉPHONE*
              </label>
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
              className="bp2_1:w-fulltext-sm h-full pl-3 py-2.5 bg-transparent resize-none w-96 text-slate-50 dark:text-slate-900 cursor-pointer font-exo border-0 border-b-4 border-l-4 border-[#0780FE] dark:border-[#FF0010] appearance-none  focus:outline-none focus:ring-0 focus:border-[#0780FE] dark:focus:border-[#FF0010] peer bp2_1:w-full"
              placeholder=" "
            />
            <label
              htmlFor="floating_message"
              className=" ml-3 absolute text-sm text-slate-50 dark:text-slate-900 font-orb duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0780FE] dark:peer-focus:text-[#FF0010] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ÉCRIS TON MESSAGE*
            </label>
          </div>
        </section>

        {/* CREATION BUTTON SUBMIT */}
        <section className="flex justify-center w-full">
          <button
            type="submit"
            className="mt-10 mb-20 font-orb cursor-pointer px-10 text-center border-4 text-slate-50 dark:text-slate-900 border-y-transparent border-x-[#0780FE] dark:border-x-[#FF0010] font-exo hover:text-[#0780FE] dark:hover:text-[#FF0010]"
          >
            ENVOYER
          </button>
        </section>
      </form>

      <footer className="w-full p-5 bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat font-exo dark:bg-[url('./assets/images/quizPic/white.jpg')] dark:bg-[length:100vw] dark:bg-repeat">
        {/* Container Helps + Icons */}
        <div className="w-6/6 h-1 -m-5 bg-[#0780FE] dark:bg-[#FF0010]" />
        <div className="flex flex-row flex-wrap w-full md:pb-px20">
          {/* Helps -- phone -- adress -- faq */}
          <div className="flex flex-wrap justify-between w-2/3 px-1 py-5">
            {/* Phone */}
            <a href="tel:0607514408">
              <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 747.2"
                  aria-hidden="true"
                  className="w-8 h-8 "
                  focusable="false"
                  fill="currentColor"
                >
                  <path
                    d="M239.2 597.2c-5.1-5-14.2-6.1-20.3-2.3l-48.3 30.3c-6.2 3.8-14.1 2-17.9-4.1L84.6 
  512.7c-3.8-6.1-1.9-14.1 4.1-17.9l45.4-28.5c6.1-3.8 8.8-12.3 6.1-19L94.8 336.5c-2.7-6.6-10.2-9.5-16.7-6.4 0 
  0-62 29.6-70.8 67.9C-28.4 554.6 69.4 710.5 226 746.4c38.3 8.8 91.6-52.9 91.6-52.9 4.7-5.5 
  4.4-14-.7-19l-77.7-77.3zm-22.3-114.3c-6.2 0-11.1-5-11.1-11.1 0-6.2 5-11.1 11.1-11.1 20.1 0 
  37.8-16.8 37.8-35.9 0-11-3.2-24.2-10.2-28.1C157 372.7 96 292.8 96 202 96 90.6 186.6 0 298 
  0s202 90.6 202 202c0 78.2-32.9 150.9-92.7 204.6-53.3 47.8-124.4 76.3-190.4 76.3zM298 22.2c-99.1
   0-179.8 80.6-179.8 179.8 0 81.2 54.7 152.6 133 173.6.6.2 1.2.4 1.7.6 22.1 10.1 23.9 39.8 23.9 48.6
    0 10.9-3.3 21.3-9 30.1 107.5-24.1 210-121.3 210-252.9 0-99.2-80.6-179.8-179.8-179.8z"
                  />

                  <path
                    d="M250.4 202c0 12-9.7 21.7-21.7 21.7S207 214 207 202s9.7-21.7 21.7-21.7 21.7 9.7 21.7 
    21.7zm72.7 0c0 12-9.7 21.7-21.7 21.7s-21.7-9.7-21.7-21.7 9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7zm72.7 
    0c0 12-9.7 21.7-21.7 21.7s-21.7-9.7-21.7-21.7 9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7z"
                  />
                </svg>
                <span>
                  Votre Conseiller Star Tour <br />
                  06 07 51 44 08
                </span>
              </p>
            </a>
            {/* Adress */}
            <a href="https://www.google.fr/maps/place/Wild+Code+School/@43.4633631,-1.5136242,17z/data=!3m1!4b1!4m5!3m4!1s0xd51151b04400001:0x5e8e4026b1a5e55f!8m2!3d43.4633437!4d-1.5114351">
              <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44.6 44.6"
                  aria-hidden="true"
                  className="w-8 h-8"
                  focusable="false"
                  fill="currentColor"
                >
                  <path d="M29.5 4.5C25.2.2 18.2.2 13.9 4.5c-4.3 4.3-4.3 11.3 0 15.6 6.6 7.6 6.3 12.7 7.8 12.7s1.2-5.1 7.8-12.7c4.3-4.3 4.3-11.3 0-15.6m-7.7 13c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5S27.3 9 27.3 12c0 3.1-2.5 5.5-5.5 5.5" />
                  <path d="M17.3 43.2h-.1c-3-.8-6-1.8-8.9-2.9-.2 0-.3-.2-.3-.5l1.7-18.7c0-.2.1-.3.2-.4.1-.1.3-.1.4 0 2.5 1 5 1.9 7.5 2.7 2.5-.7 5.1-1.4 7.6-2.3h.3c2.6.7 5.2 1.3 7.8 1.8.2 0 .4.2.4.4L35.7 42v.2c0 .3-.2.5-.5.5h-.1c-2.9-.5-5.9-1.1-8.9-1.8-2.9.9-5.8 1.6-8.8 2.3h-.1zM9 39.5c2.8 1 5.6 1.9 8.3 2.7 2.9-.7 5.8-1.4 8.7-2.3h.3c2.7.6 5.5 1.2 8.3 1.7L33 23.9c-2.5-.5-4.9-1.1-7.4-1.7-2.5.8-5.1 1.6-7.6 2.3h-.3c-2.4-.8-4.8-1.6-7.1-2.5L9 39.5z" />
                  <path d="M17.7 23.4h1l-.3 10-.3 10h-1l.3-10zm7.1-1l.1 9 .2 9h-1l-.2-9-.1-9h.5z" />
                </svg>
                <span>
                  Trouver votre <br />
                  Agence Star Tour
                </span>
              </p>
            </a>
            {/* FAQ */}
            <a href="www.google.com">
              <p className="flex p-3 text-xs font-bold text-slate-50 dark:text-slate-900 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47 47"
                  aria-hidden="true"
                  className="w-8 h-8"
                  focusable="false"
                  fill="currentColor"
                >
                  <path d="M19.795 22.049c0 2.44-1.979 4.422-4.42 4.422s-4.421-1.981-4.421-4.422a4.42 4.42 0 0 1 8.841 0m1.099 10.661c0 6.478-5.519 12.593-5.519 12.593S9.858 39.188 9.858 32.71a5.518 5.518 0 1 1 11.036 0m7.789-30.948c-5.52 0-9.992 4.474-9.992 9.992s4.473 9.992 9.992 9.992c5.519 0 9.991-4.474 9.991-9.992s-4.473-9.992-9.991-9.992m-.705 16.158c-1.058 0-1.832-.615-1.832-1.797 0-1.604 1.339-4.546 1.339-5.426 0-.423-.212-.564-1.092-.6l.177-.635 3.979-.068c-.157.527-1.866 6.271-1.866 6.887 0 .37.105.512.299.512.583 0 1.322-1.463 1.551-1.832l.563.316c-.547 1.252-1.604 2.643-3.118 2.643m1.832-9.618c-.704 0-1.409-.583-1.409-1.356 0-.776.705-1.357 1.409-1.357.705 0 1.409.581 1.409 1.357 0 .773-.704 1.356-1.409 1.356" />
                </svg>
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
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/StarWarsFR"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#1DA1F2]"
            >
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/starwars/"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#7e22ce]"
            >
              <span className="sr-only">Instagram</span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/showcase/starwars/about/"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#0B66C2]"
            >
              <span className="sr-only">Linkedin</span>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900 hover:text-[#252A30] "
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href="https://www.youtube.com/c/StarWars"
              className="p-3 ml-3 text-slate-50 dark:text-slate-900  hover:text-[#FF0000]"
            >
              <span className="sr-only">Youtube</span>
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 500 599.5"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M421.8 438.4h-33.2v-19c0-9.5 7.1-16.6 16.6-16.6h2.4c9.5 0 16.6 7.1 16.6 16.6l-2.4 19zm-123.2-40.3c-9.5 0-14.2 4.7-14.2 11.8v92.4c0 7.1 7.1 11.8 14.2 11.8 9.5 0 14.2-4.7 14.2-11.8V410c2.4-7.2-4.7-11.9-14.2-11.9zM500 346v175.4c0 42.7-37.9 78.2-80.6 78.2H80.6C35.5 599.5 0 564 0 521.3V343.6c0-42.7 35.5-78.2 80.6-78.2h336.5c45 2.4 82.9 37.9 82.9 80.6zM104.3 540.3V353.1H147v-28.4H35.5v30.8H71v187.2h33.2v-2.4zm125.6-156.4h-35.5v123.2c-2.4 7.1-16.6 16.6-21.3 0V383.9h-33.2v130.3c0 9.5 0 19 9.5 26.1 16.6 11.8 45-2.4 52.1-16.6V545h28.4V383.9zm109 113.7v-82.9c0-30.8-23.7-49.8-54.5-26.1V327h-35.5v213.3h28.4l2.4-14.2c37.8 33.1 59.2 9.4 59.2-28.5zm109-11.8h-26.1v16.6c0 7.1-7.1 14.2-14.2 14.2h-4.7c-7.1 0-14.2-7.1-14.2-14.2v-40.3h59.2v-21.3c0-16.6 0-33.2-2.4-42.7-4.7-30.8-45-33.2-66.4-19-7.1 4.7-11.8 11.8-14.2 19-2.4 9.5-4.7 21.3-4.7 35.5v49.8c0 85.3 99.5 73.5 87.7 2.4zM315.2 218c2.4 4.7 4.7 7.1 9.5 9.5 4.7 2.4 9.5 4.7 14.2 4.7s9.5-2.4 14.2-4.7c4.7-2.4 7.1-7.1 9.5-11.8v14.2h37.9V64h-30.8v128c0 7.1-4.7 11.8-11.8 11.8s-11.8-4.7-11.8-11.8V64h-30.8v139.8c-2.5 4.7-2.5 9.5-.1 14.2zm-118.5-92.4c0-16.6 2.4-28.4 4.7-37.9 2.4-9.5 7.1-16.6 14.2-21.3s16.6-7.1 26.1-7.1 16.6 2.4 23.7 4.7c7.1 2.4 11.8 7.1 14.2 14.2 4.7 4.7 7.1 9.5 7.1 16.6 2.4 4.7 2.4 14.2 2.4 26.1v42.7c0 14.2 0 26.1-2.4 33.2 0 7.1-4.7 14.2-7.1 19-4.7 7.1-9.5 11.8-14.2 14.2-7.1 2.4-14.2 4.7-21.3 4.7-9.5 0-16.6-2.4-21.3-4.7-7.1-2.4-11.8-4.7-16.6-9.5-2.4-7.1-4.7-11.8-7.1-19 0-7.1-2.4-19-2.4-33.2v-42.7zm30.8 64c0 9.5 7.1 16.6 14.2 16.6 9.5 0 14.2-7.1 14.2-16.6v-87.7c0-9.5-7.1-16.6-14.2-16.6-9.5 0-14.2 7.1-14.2 16.6v87.7zm-106.6 45h35.5V109l45-109h-40.3l-23.7 80.6L113.7 0H75.8l45 109v125.6z" />
              </svg>
            </a>
          </div>
        </div>
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
    </div>
  );
};

export default Form;
