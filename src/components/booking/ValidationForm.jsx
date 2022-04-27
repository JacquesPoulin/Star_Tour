/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";

const ValidationForm = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" w-2/4 px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1">
      <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mb-3 tracking-wide">VALIDEZ VOTRE VOYAGE</h1>

        {isSubmitSuccessful && (
          <div className=" text-lime-300 m-auto font-orb 	animate-pulse">
            Votre Voyage est confirmé !
          </div>
        )}

        {/* FORM CONTAINER */}
        <div className="m-8 flex flex-col justify-center gap-4">
          {/* FirstName & Name */}
          <div className="flex ">
            <label htmlFor="firstName" className="mt-4 tracking-wide">
              Prénom *
              <input
                id="firstName"
                type="text"
                {...register(
                  "firstName",
                  { required: true },
                  { pattern: /^[A-Za-z]+$/i }
                )}
                className="w-auto rounded-sm mt-4 focus:border-lime-500 text-slate-900"
              />
            </label>

            <label htmlFor="lastname" className="mt-4 tracking-wide">
              Nom *
              <input
                id="lastname"
                type="text"
                {...register(
                  "lastname",
                  { required: true },
                  { pattern: /^[A-Za-z]+$/i }
                )}
                className="w-auto rounded-sm mt-4 focus:border-lime-500 text-slate-900"
              />
            </label>
          </div>

          {/* Phone & Mail */}
          <div className="flex">
            <label htmlFor="phone" className="mt-4 tracking-wide">
              Téléphone *
              <input
                id="phone"
                type="text"
                {...register("phone", { required: true })}
                className="w-auto rounded-sm mt-4 focus:border-lime-500 text-slate-900"
              />
            </label>

            <label htmlFor="mail" className="mt-4 tracking-wide">
              Email *
              <input
                id="mail"
                type="email"
                {...register("email", { required: true })}
                className="w-auto rounded-sm mt-4 focus:border-lime-500 text-slate-900"
              />
            </label>
          </div>
        </div>
        <label
          htmlFor="acceptedTerms"
          className="mt-20 text-center tracking-wide"
        >
          <input
            id="acceptedTerms"
            name="useraccepted"
            type="checkbox"
            {...register("acceptedTerms", { required: true })}
            className="mr-4 rounded-sm focus:border-lime-500"
          />
          J'accepte les termes du contrat *
        </label>

        <button
          type="submit"
          className=" w-36 m-auto rounded-sm mt-20 mb-5 hover:scale-110 bg-gray-800 tracking-wide transition-all duration-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ValidationForm;
