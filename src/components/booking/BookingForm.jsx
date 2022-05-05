/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import NavBar from "../Navbar";
import planetsBooking from "../../../data/planetsBooking";
import ValidationForm from "./ValidationForm";

setDefaultLocale("fr");
registerLocale("fr", fr);

const BookingForm = () => {
  // >> STATES & SETTERS
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [passengers, setPassengers] = useState("");
  const [destination, setDestination] = useState("Aucune idée !");

  // ------------------------------------------

  // >> FUNCTIONS

  const sejour = (date1, date2) => {
    const differenceInTime = date2.getTime() - date1.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };
  const handlePassengers = (e) => {
    setPassengers(e.target.value);
  };

  // ------------------------------------------

  // >> USE EFFECT TO SET THE NUMBER OF DAYS
  useEffect(() => {
    setNumberOfDays(sejour(startDate, endDate));
  }, [endDate]);

  return (
    <div className="scroll-smooth bg_nightsky dark:bg_lightsky">
      <NavBar />
      <div className="w-full flex-column pb-14 pt-44">
        {/* TITLE */}
        <div className="w-full">
          <h1 className="p-8 text-6xl tracking-wide text-center text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2 bp5:text-4xl">
            C'est le moment de reserver les vacances de vos rêves !
          </h1>
        </div>

        {/* DESTINATION CHOICE */}
        <div className="flex flex-col items-center justify-center w-full mt-20 text-slate-50 dark:text-slate-900">
          <h2 className="mb-4 text-2xl tracking-wide text-slate-50 dark:text-slate-900 font-exo">
            1. OÙ SOUHAITEZ-VOUS ALLEZ ?
          </h2>
          <Select
            placeholder="Choisissez votre planète ..."
            options={planetsBooking}
            value={destination}
            onChange={(e) => setDestination(e.value)}
            className="w-1/3 text-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-exo tracking-wide outline-none"
          />
          {destination === "Aucune idée !" && (
            <Link to="/quiz">
              <button
                type="button"
                className="px-4 py-1 mt-12 text-2xl border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-orb tracking-wide"
              >
                J'hésite encore, aidez-moi !
              </button>
            </Link>
          )}
          {destination !== "Aucune idée !" && (
            <div className="px-4 py-1 mt-12 text-2xl border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-orb tracking-wide">
              Mon choix :{" "}
              <span className="text-lime-200 animate-pulse">
                {destination.toUpperCase()}
              </span>
            </div>
          )}
          {/* JOURNEY DATES */}
          <h2 className="mt-20 mb-4 text-2xl text-slate-50 dark:text-slate-900 font-exo">
            2. QUAND SOUHAITEZ-VOUS PARTIR ?
          </h2>
          <div className="flex justify-center w-full rounded-md">
            <div className="flex flex-row items-center justify-center w-1/3 gap-4 rounded-md text-slate-900">
              <p className="flex items-center justify-center text-xl tracking-wide text-slate-50 dark:text-slate-900 font-exo">
                DU
              </p>
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
                className="border-2 text-lime-200 text-center border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%]"
              />
              <p className="flex items-center justify-center text-xl tracking-wide text-slate-50 dark:text-slate-900 font-exo">
                AU
              </p>
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(date) => setEndDate(date)}
                className="border-2 text-lime-200 text-center border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%]"
              />
            </div>
          </div>
          {/* WARNING MESSAGE */}
          {numberOfDays < 3 && (
            <div className="p-4 mt-12 ml-8 text-2xl border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-orb tracking-wide">
              ⚠️ Nous n'avons aucun séjour inférieur à 3 jours
            </div>
          )}
          {numberOfDays >= 3 && (
            <div className="px-4 py-1 mt-12 text-2xl border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-orb tracking-wide">
              Pour un total de :{" "}
              <span className="text-lime-200 animate-pulse">
                {numberOfDays} jours
              </span>
            </div>
          )}
        </div>

        {/* PASSENGERS NUMBER */}
        <div className="flex flex-col items-center justify-center w-full mt-10 mb-20 ">
          <h2 className="mb-4 text-2xl tracking-wide mt-7 text-slate-50 dark:text-slate-900 font-exo">
            3. NOMBRE DE VOYAGEURS ?
          </h2>
          <select
            name="people"
            className="rounded-md text"
            placeholder={passengers}
            onChange={handlePassengers}
          >
            <option value="0">0</option>
            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes</option>
          </select>
          {passengers && (
            <div className="px-4 py-1 mt-12 text-2xl text-slate-50 dark:text-slate-900 border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-orb tracking-wide">
              Nombre de voyageur(s) :{" "}
              <span
                className="text-lime-200 animate-pulse"
                onChange={handlePassengers}
              >
                {passengers}
              </span>
            </div>
          )}

          {/* VALIDATION FORM */}
          {passengers > "0" && (
            <ValidationForm
              passengers={passengers}
              destination={destination}
              startDate={startDate}
              endDate={endDate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
