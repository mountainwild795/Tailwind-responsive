import React from "react";

const Newsletter = ({ onSearch }) => {
  return (
    <div className="w-full bg-slate-400 py-16 text-white px-4">
      {/* <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3"> */}
      <div className="max-w-[1240px] mx-auto grid">
        <div className="my-4">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <input className="p-3 flex md:w-[600px] w-full rounded-md text-black" placeholder="Search Name" onChange={(e) => onSearch(e.target.value)} />
            <button className="bg-[#0016df] text-black rounded-md font-medium md:w-[200px] md:ml-4 w-full my-6 px-6 py-3">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

