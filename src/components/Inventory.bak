import React, { useEffect, useState } from "react";

import { getUserToolsApi } from "../api/axiosApi";

import { FeedItemSkeleton } from "./presentational/FeedItemSkeleton";
import { FeedItem } from "./presentational/FeedItem";
import { FeedMenu } from "./presentational/FeedMenu";
// import { FeedSearch } from "./presentational/FeedSearch";
import { PageTemplate } from "./presentational/PageTemplate";
import { FeedSortButton } from "./presentational/FeedSortButton";
import { useNavigate } from "react-router-dom";

export const Inventory = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Send user to login if no data
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const token = localStorage.getItem("token");
      const data = await getUserToolsApi(token);
      if (!data) {
        localStorage.clear();
        navigate("/login");
      }
      setFeedData(data);
      setSearchData(data);
      setLoading(false);
    };
    getItems();
  }, []);

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
  const [onStatus, setOnStatus] = useState(3);
  const handleStatus = () => {
    setOnStatus((prevVal) => {
      return (prevVal += 1);
    });
    if (onStatus % 3 === 0) {
      setSearchData(
        feedData.filter((tool) => {
          return !tool.loanee;
        })
      );
    } else if (onStatus % 3 === 1) {
      setSearchData(
        feedData.filter((tool) => {
          return tool.loanee;
        })
      );
    } else {
      setSearchData(feedData);
    }
  };
  // End Filter by Status

  useEffect(() => {
    const getItems = async () => {
      const token = await localStorage.getItem("token");
      const data = await getUserToolsApi(token);
      setFeedData(data);
      setSearchData(data);
      setLoading(false);
    };
    getItems();
  }, []);

  // Update list when loanee is removed
  useEffect(() => {
    setSearchData(feedData);
  }, [feedData]);

  return (
    <PageTemplate>
      <FeedMenu setfeedData={setFeedData} />
      {/* <FeedSearch feedData={feedData} setSearchData={setSearchData} /> */}
      {/* checkout feed */}
      <ul className="flex flex-col justify-between gap-2.5 ">
        <li>
          <h2 className="text-lg font-medium tracking-wider text-left ">
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

        {loading ? (
          <>
            {[...Array(Math.floor(Math.random() * 10 + 3))].map((e, i) => (
              <FeedItemSkeleton key={i} />
            ))}
          </>
        ) : (
          searchData.map((tool) => (
            <FeedItem key={tool.id} feed={tool} setFeedData={setFeedData} />
          ))
        )}
      </ul>
    </PageTemplate>
  );
};
