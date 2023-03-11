import React, { useEffect, useState } from "react";

export const FeedSearch = ({ feedData, setSearchData }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length === 0) {
      setSearchData(feedData);
    } else {
      const searchTerm = searchInput.toLowerCase().trim();
      setSearchData((searchData) =>
        feedData.filter((tool) => tool.name.toLowerCase().includes(searchTerm))
      );
    }
  }, [searchInput]);

  return (
    <div className="flex w-full bg-gray-800 border-none input-group">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        className="flex-auto block w-full p-4 font-normal text-white transition ease-in-out bg-transparent border border-none text h-base focus:bg-gray-500 focus:border-none focus:outline-none group"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon3"
        onChange={handleChange}
      />

      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search"
        className="absolute w-4 mr-4 text-light-gray"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        {/* <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        ></path> */}
      </svg>
    </div>
  );
};
