import React from "react";

import Card from "./card";
import { data } from "../data";

const Cards = ({ search }) => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {data
          .filter((item) => {
            return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => (
            <Card person={item}></Card>
          ))}
      </div>
    </div>
  );
};

export default Cards;

