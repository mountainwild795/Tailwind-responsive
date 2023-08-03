import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const card = ({ person }) => {
  return (
    <div className="bg-slate-200 w-full shadow-xl flex flex-col p-0 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto my-[3rem] bg-white" src={person.id % 3 === 0 ? Single : person.id % 3 === 1 ? Double : Triple} alt="/" />
      {/* <h2 className="text-2xl font-bold text-center py-8">{person.first_name}</h2>
      <p className="text-center text-4xl font-bold">$149</p> */}
      <div className="bg-slate-400 font-medium">
        <p className="py-2 border-b mx-4">{person.first_name + " " + person.last_name}</p>
        <p className="py-2 border-b mx-4">{person.email}</p>
        {/* <p className="py-2 border-b mx-8">Send up to 2 GB</p> */}
      </div>
      {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button> */}
    </div>
  );
};

export default card;
