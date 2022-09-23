import React, { useEffect, useState } from "react";

import { getUserToolsApi } from "../api/axiosApi";

import { FeedItemSkeleton } from "./FeedItemSkeleton";
import { FeedItem } from "./FeedItem";
import { FeedMenu } from "./FeedMenu";
import { FeedSearch } from "./FeedSearch";
import { PageTemplate } from "./PageTemplate";
import { FeedSortButton } from "./FeedSortButton";

export const Inventory = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  // Sort Name and Borrower and Status
  const [sortUp, setSortUp] = useState(true);
  const handleSort = () => {
    setSortUp((prevVal) => !prevVal);
    sortUp
      ? setSearchData(searchData.sort((a, b) => (a.name > b.name ? 1 : -1)))
      : setSearchData(searchData.sort((a, b) => (a.name < b.name ? 1 : -1)));
  };

  const [borrowUp, setBorrowUp] = useState(true);
  const handleBorrow = () => {
    setBorrowUp((prevVal) => !prevVal);
    borrowUp
      ? setSearchData(searchData.sort((a, b) => (a.loanee > b.loanee ? 1 : -1)))
      : setSearchData(
          searchData.sort((a, b) => (a.loanee < b.loanee ? 1 : -1))
        );
  };
  // End Sort Name and Borrower

  // Filter by Status
  const [onStatus, setOnStatus] = useState(true);
  const handleStatus = () => {
    setOnStatus((prevVal) => !prevVal);
    console.log(feedData);
    onStatus
      ? setSearchData(feedData)
      : setSearchData(
          feedData.filter((tool) => {
            return !tool.loanee;
          })
        );
  };
  // End Filter by Status

  useEffect(() => {
    const getItems = async () => {
      const token = await localStorage.getItem("token");
      const data = await getUserToolsApi(token);
      setFeedData(data);
      setSearchData(data);
    };
    getItems();
  }, []);

  return (
    <PageTemplate>
      <FeedMenu setfeedData={setFeedData} />
      <FeedSearch feedData={feedData} setSearchData={setSearchData} />
      {/* checkout feed */}
      <ul className="flex flex-col justify-between gap-2.5 ">
        <li>
          <h2
            className="text-lg font-medium tracking-wider text-left "
            onClick={() => console.log(feedData)}
          >
            All Items
          </h2>
        </li>

        {/* sort */}
        <li className="flex items-center gap-5">
          <p className="text-sm font-normal tracking-wider ">Sort By</p>
          <FeedSortButton handleSort={handleSort}>Tool Name</FeedSortButton>
          <FeedSortButton handleSort={handleBorrow}>Borrower</FeedSortButton>
        </li>
        {/* filter */}
        <li className="flex items-center gap-5">
          <p className="text-sm font-normal tracking-wider ">Filter By</p>
          <FeedSortButton handleSort={handleStatus}>Status</FeedSortButton>
        </li>

        {feedData.length > 0 ? (
          searchData
            // .sort((toola, toolb) => (toola.loanee < toolb.loanee ? 1 : -1))
            .map((tool) => <FeedItem key={tool.id} feed={tool} />)
        ) : (
          <>
            {[...Array(Math.floor(Math.random() * 10 + 3))].map((e, i) => (
              <FeedItemSkeleton key={i} />
            ))}
          </>
        )}
      </ul>
    </PageTemplate>
  );
};
