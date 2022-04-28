/* eslint-disable jsx-a11y/label-has-associated-control */
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
// import PassengerInput from "./PassengerInput";

setDefaultLocale("fr");
registerLocale("fr", fr);

const BookingForm = () => {
  // >> STATES & SETTERS
  const [planetChoice, setPlanetChoice] = useState("Aucune idée !");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [passengers, setPassengers] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ships, setShips] = useState("");
  const [destination, setDestination] = useState("");

  // >> FUNCTIONS
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
    setPassengers(e.target.value);
  };

  // >> USE EFFECT TO SET THE NUMBER OF DAYS
  useEffect(() => {
    setNumberOfDays(sejour(startDate, endDate));
  }, [endDate]);

  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <div className="w-full flex-column pb-14 pt-44">
        {/* TITLE */}
        <div className="w-full">
          <h1 className="text-6xl p-8 text-center text-slate-50 font-orb text-shadow-wh tracking-wide">
            C'est le moment de reserver les vacances de vos rêves !
          </h1>
        </div>

        {/* DESTINATION CHOICE */}
        <div className="w-full flex flex-col justify-center items-center mt-20 text-slate-50">
          <h2 className="mb-4 text-2xl text-slate-50 font-exo tracking-wide">
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
                className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01] tracking-wide"
              >
                J'hésite encore, aidez-moi !
              </button>
            </Link>
          )}
          {planetChoice !== "Aucune idée !" && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01] tracking-wide">
              Mon choix :{" "}
              <span className="text-lime-200 animate-pulse">
                {planetChoice.toUpperCase()}
              </span>
            </div>
          )}
          {/* JOURNEY DATES */}
          <h2 className="mt-20 mb-4 text-2xl text-slate-50 font-exo">
            2. QUAND SOUHAITEZ-VOUS PARTIR ?
          </h2>
          <div className="w-full flex justify-center rounded-md">
            <div className="w-1/3 flex flex-row justify-center items-center text-slate-900  rounded-md gap-4">
              <p className="text-slate-50 text-xl flex justify-center items-center font-exo tracking-wide">
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
              <p className="text-slate-50 text-xl flex justify-center items-center font-exo tracking-wide">
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

          {/* WARNING MESSAGE */}
          {numberOfDays < 3 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01] tracking-wide">
              ⚠️ Nous n'avons aucun séjour inférieur à 3 jours
            </div>
          )}
          {numberOfDays >= 3 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01] tracking-wide">
              Pour un total de :
              <span className="text-lime-200 animate-pulse">
                {numberOfDays} jours
              </span>
            </div>
          )}
        </div>

        {/* PASSENGERS NUMBER */}
        <div className="w-full flex flex-col justify-center items-center mt-10 mb-20 ">
          <h2 className="mt-7 mb-4 text-2xl text-slate-50 font-exo tracking-wide">
            3. NOMBRE DE VOYAGEURS ?
          </h2>
          <select
            name="people"
            className="rounded-md text"
            placeholder={passengers}
            onChange={passengerChoiceHandler}
          >
            <option value="0">0</option>
            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes</option>
          </select>
          {passengers >= 1 && (
            <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01] tracking-wide">
              Nombre de voyageur(s) :
              <span className="text-lime-200 animate-pulse">{passengers}</span>
            </div>
          )}

          {/* VALIDATION FORM */}
          {passengers >= 1 && (
            <ValidationForm
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              passengers={passengers}
              setPassengers={setPassengers}
              destination={destination}
              setDestination={setDestination}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              ships={ships}
              setShips={setShips}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
