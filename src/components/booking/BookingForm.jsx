/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import NavBar from "../Navbar";
import planetsBooking from "../../../data/planetsBooking";

setDefaultLocale("fr");
registerLocale("fr", fr);

const BookingForm = () => {
  const [planetChoice, setPlanetChoice] = useState("Aucune idée !");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [numberOfPassengers, setNumberOPassengers] = useState(0);

  const userChoiceHandler = (e) => {
    setPlanetChoice(e.value);
  };
  const dateArrivalChangeHandler = (date) => {
    setStartDate(date);
  };
  const dateDepartureChangeHandler = (date) => {
    setEndDate(date);
  };
  const sejour = (date1, date2) => {
    const differenceInTime = date2.getTime() - date1.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };
  const passengerChoiceHandler = (e) => {
    setNumberOPassengers(e.target.value);
    console.log(numberOfPassengers);
    console.log(e.target.value);
  };

  useEffect(() => {
    setNumberOfDays(sejour(startDate, endDate));
  }, [endDate]);

  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat dark:bg-[url('./assets/images/quizPic/white.jpg')] dark:bg-[length:100vw] dark:bg-repeat">
      <NavBar />
      <form className="w-full flex-column pb-14 pt-44">
        {/* TITLE */}
        <div className="w-full">
          <h1 className="p-8 text-6xl text-center text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2">
            C'est le moment de reserver les vacances de vos rêves !
          </h1>
        </div>

        {/* DESTINATION CHOICE */}
        <div className="flex flex-col items-center justify-center w-full mt-20 text-slate-50 dark:text-slate-900">
          <h2 className="mb-4 text-2xl text-slate-50 dark:text-slate-900">
            1. OÙ SOUHAITEZ-VOUS ALLEZ ?
          </h2>
          <Select
            placeholder="Choisissez votre planète ..."
            options={planetsBooking}
            value={planetChoice}
            onChange={userChoiceHandler}
            className="w-1/3 text-slate-900"
          />
          {planetChoice === "Aucune idée !" && (
            <Link to="/quiz">
              <button
                type="button"
                className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] dark:bg-slate-100/50 border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 bg-opacity-80 dark:bg-opacity-80 text-slate-50 dark:text-slate-900 dark:box-shadow-2 box-shadow-1 hover:scale-[1.01]"
              >
                J'hésite encore, aidez-moi !
              </button>
            </Link>
          )}
          {planetChoice !== "Aucune idée !" && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] dark:bg-slate-100/50 border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 dark:text-slate-900 dark:box-shadow-2  hover:scale-[1.01]">
              Mon choix : {planetChoice.toUpperCase()}
            </div>
          )}
          {/* DEPARTURE DATE */}
          <h2 className="mt-20 mb-4 text-2xl text-slate-50 dark:text-slate-900">
            2. QUAND SOUHAITEZ-VOUS PARTIR ?
          </h2>
          <div className="flex justify-center w-full rounded-md">
            <div className="flex flex-row w-1/3 rounded-md text-slate-900">
              <p className="flex items-center justify-center m-2 text-xl text-slate-50 dark:text-slate-900">
                DU
              </p>
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={dateArrivalChangeHandler}
                className="font-semibold text-center rounded-md text-slate-900 "
              />
              <p className="flex items-center justify-center m-2 text-xl text-slate-50 dark:text-slate-900 ">
                AU
              </p>
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={dateDepartureChangeHandler}
                className="ml-2 font-semibold text-center rounded-md text-slate-900"
              />
            </div>
          </div>
          {numberOfDays < 7 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] dark:bg-slate-100/50 border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 dark:text-slate-900 box-shadow-1 dark:box-shadow-2 hover:scale-[1.01]">
              ⚠️ Nous n'avons aucun séjours inférieurs à 7 jours
            </div>
          )}
          {numberOfDays >= 7 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] dark:bg-slate-100/50 border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 bg-opacity-80 dark:bg-opacity-80 text-slate-50 dark:text-slate-900 box-shadow-1 dark:box-shadow-2 hover:scale-[1.01]">
              Pour un total de : {numberOfDays} jours
            </div>
          )}
        </div>

        {/* PASSENGERS */}
        <div className="flex flex-col items-center justify-center w-full mt-10 mb-20">
          <h2 className="mb-4 text-2xl mt-7 text-slate-50 dark:text-slate-900">
            3. NOMBRE DE VOYAGEURS ?
          </h2>

          <select
            name="people"
            className="rounded-md text"
            placeholder={numberOfPassengers}
            onChange={passengerChoiceHandler}
          >
            <option value="0">0</option>
            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes</option>
          </select>
          {numberOfPassengers >= 1 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] dark:bg-slate-100/50 border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 dark:bg-opacity-80 bg-opacity-80 text-slate-50 dark:text-slate-900 dark:box-shadow-2 box-shadow-1 hover:scale-[1.01]">
              Nombre de voyageur(s): {numberOfPassengers}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
