import React, { useEffect, useState } from "react";

export const Search = ({
  feedData,
  setSearchData,
  inputVal,
  setInputVal,
  setFeedCount,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setInputVal((prev) => e.target.value);
  };

  useEffect(() => {
    if (searchInput.length === 0) {
      setFeedCount(() => feedData.length);
      setSearchData(feedData);
    } else {
      const searchTerm = searchInput.toLowerCase().trim();
      const filteredData = feedData.filter((tool) =>
        tool.name.toLowerCase().includes(searchTerm)
      );
      setSearchData(() => filteredData);
      setFeedCount(() => filteredData.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  useEffect(() => {
    setFeedCount(() => feedData.length);
    //eslint-disable-next-line
  }, [feedData]);

  return (
    <div className="flex flex-col w-full max-w-2xl gap-4 mx-auto md:flex-row">
      <label htmlFor="search" className="sr-only">
        Search by Tool
      </label>
      <input
        type="search"
        className="w-full h-12 p-4 font-light text-black transition ease-in-out border-2 focus:outline-none rounded-xl active:border-theme-yellow focus:border-theme-yellow"
        placeholder="Search by Tool Name"
        aria-label="Search"
        aria-describedby="button-addon3"
        onChange={handleChange}
        value={inputVal}
      />
      <div className="flex items-center justify-center w-24 h-12 mx-auto text-white bg-theme-yellow rounded-xl">
        Search
      </div>
    </div>
  );
};
