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
      console.log(filteredData);
      setFeedCount(() => filteredData.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  useEffect(() => {
    setFeedCount(() => feedData.length);
  }, [feedData]);

  return (
    <div className="flex w-full max-w-2xl mx-auto">
      <label htmlFor="search" className="sr-only">
        Search by Tool
      </label>
      <input
        type="search"
        className="w-full p-4 font-light text-black transition ease-in-out border-2 focus:outline-none lg:rounded-l-xl active:border-theme-yellow focus:border-theme-yellow"
        placeholder="Search by Tool Name"
        aria-label="Search"
        aria-describedby="button-addon3"
        onChange={handleChange}
        value={inputVal}
      />
      <div className="flex items-center justify-center w-20 bg-theme-yellow rounded-r-xl">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          className="w-4 text-white "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
