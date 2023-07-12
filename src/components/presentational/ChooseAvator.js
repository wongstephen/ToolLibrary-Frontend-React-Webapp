import React from "react";

export const ChooseAvator = ({ setAvator, avator }) => {
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

  const handleClick = (el) => {
    setAvator(() => el.target.name);
  };

  return (
    <div className="mx-4 mt-4">
      <p className="mt-2 text-sm tracking-wider text-center font-extralight text-dark-gray ">
        Choose a tool icon or upload your own image.
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
        {Object.keys(avators).map((avatormap, idx) => {
          return (
            <img
              key={idx}
              src={require(`../../assets/avator/${avators[avatormap]}`)}
              name={avatormap}
              alt={avatormap}
              onClick={handleClick}
              className={`cursor-pointer ${
                avatormap === avator &&
                "outline outline-2 outline-theme-yellow rounded-full outline-offset-2 "
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
