/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const PassengerInput = () => {
  return (
    <div>
      <div className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 dark:text-shadow-2 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]">
        <form>
          <label>
            Enter your name :
            <input type="text" className="ml-2 font-orb text-slate-900" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default PassengerInput;
