import React, { useEffect, useState } from "react";

export const ChooseAvator = ({ setData, currentAvator }) => {
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

  useEffect(() => {
    if (currentAvator) {
      setSelAvator(currentAvator);
    }
  }, []);

  const handleClick = (el) => {
    setSelAvator(el.target.name);
    setData((data) => {
      return { ...data, avator: el.target.name };
    });
  };

  return (
    <div className="mx-4 mt-4">
      <p className="mt-2 text-sm tracking-wider text-left font-extralight text-light-gray ">
        Choose a tool avator or upload your own image.
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
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
                "outline outline-2 outline-blue-cement rounded-full outline-offset-2 "
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
