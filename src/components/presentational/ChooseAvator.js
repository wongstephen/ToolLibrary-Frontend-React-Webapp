import React, { useState } from "react";

export const ChooseAvator = ({ setData }) => {
  const avators = {
    empty: "empty.png",
    hammer: "hammer.png",
    screwdriver: "screwdriver.png",
    stapler: "stapler.png",
    hacksaw: "hacksaw.png",
    saw: "saw.png",
    spanner: "spanner.png",
    wrench: "wrench.png",
  };

  const [selAvator, setSelAvator] = useState("empty");

  const handleClick = (el) => {
    setSelAvator(el.target.name);
    setData((data) => {
      return { ...data, avator: el.target.name };
    });
  };

  return (
    <div className="mt-12">
      <p>Choose a tool avator</p>
      <div className="flex gap-4 mt-2">
        {Object.keys(avators).map((avator, idx) => {
          return (
            <img
              key={idx}
              src={require(`../../assets/avator/${avators[avator]}`)}
              name={avator}
              alt={avator}
              onClick={handleClick}
              className={`cursor-pointer ${
                selAvator === avator &&
                "outline outline-2 outline-lime-500 rounded-full border-lime-400 shadow-sm"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
