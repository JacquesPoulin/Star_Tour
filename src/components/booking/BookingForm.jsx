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
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <form className="w-full flex-column pb-14 pt-44">
        {/* TITLE */}
        <div className="w-full">
          <h1 className="text-6xl p-8 text-center text-slate-50 font-orb text-shadow-wh">
            C'est le moment de reserver les vacances de vos rêves !
          </h1>
        </div>

        {/* DESTINATION CHOICE */}
        <div className="w-full flex flex-col justify-center items-center mt-20 text-slate-50">
          <h2 className="mb-4 text-2xl text-slate-50 font-exo">
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
                className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]"
              >
                J'hésite encore, aidez-moi !
              </button>
            </Link>
          )}
          {planetChoice !== "Aucune idée !" && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]">
              Mon choix : {planetChoice.toUpperCase()}
            </div>
          )}
          {/* DEPARTURE DATE */}
          <h2 className="mt-20 mb-4 text-2xl text-slate-50 font-exo">
            2. QUAND SOUHAITEZ-VOUS PARTIR ?
          </h2>
          <div className="w-full flex justify-center rounded-md">
            <div className="w-1/3 flex flex-row justify-center items-center text-slate-900  rounded-md gap-4">
              <p className="text-slate-50 text-xl flex justify-center items-center font-exo">
                DU
              </p>
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={dateArrivalChangeHandler}
                className="text-slate-900  rounded-md text-center font-semibold"
              />
              <p className="text-slate-50 text-xl flex justify-center items-center font-exo">
                AU
              </p>
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={dateDepartureChangeHandler}
                className="text-slate-900 text-center  rounded-md font-semibold"
              />
            </div>
          </div>
          {numberOfDays < 7 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]">
              ⚠️ Nous n'avons aucun séjours inférieurs à 7 jours
            </div>
          )}
          {numberOfDays >= 7 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]">
              Pour un total de : {numberOfDays} jours
            </div>
          )}
        </div>

        {/* PASSENGERS */}
        <div className="w-full flex flex-col justify-center items-center mt-10 mb-20">
          <h2 className="mt-7 mb-4 text-2xl text-slate-50 font-exo">
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
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]">
              Nombre de voyageur(s): {numberOfPassengers}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
