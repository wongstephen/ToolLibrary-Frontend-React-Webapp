import React, { useEffect, useRef, useState } from "react";

// api
import useAxios from "../hooks/useAxiosInstance";
import { useNavigate } from "react-router-dom";

// components
import { FeedItem } from "./presentational/FeedItem";
import { Nav } from "./presentational/Nav";
import { Search } from "./presentational/Search";
import { PageTemplate } from "./presentational/PageTemplate";
// import { FeedSortButton } from "./presentational/FeedSortButton";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

// import { FunnelIcon } from "@heroicons/react/24/outline";

export const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const listTitleRef = useRef("All Items");
  const { auth } = useAuth();

  // axios instance implementation
  const [response, loading] = useAxios(
    {
      axiosInstance: axios,
      method: "GET",
      url: "/tools/",
      requestConfig: {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },
      data: {},
    },
    []
  );

  // Update list when loanee is removed
  useEffect(() => {
    setFeedData(response);
  }, [response]);

  useEffect(() => {
    setSearchData(feedData);
  }, [feedData]);

  const [searchVal, setSearchVal] = useState("");

  //return list unfiltered
  const showFullList = () => {
    setSearchData(() => {
      return feedData;
    });
    listTitleRef.current = "All Items";
    setSearchVal((prev) => "");
    return;
  };

  //return list with server data filtered with items borrorwd
  const showBorrowedList = () => {
    setSearchData(() => {
      return feedData.filter((tool) => {
        return tool.loanee;
      });
    });
    listTitleRef.current = "Currently Loaned Out";
    setSearchVal((prev) => "");
    return;
  };

  // Sort Name and Borrower
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

  // Send user to login if no data
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <div className="w-full h-[30vh] bg-center bg-cover my-10 bg-toolTable"></div>
      {/* <img src={require("../assets/tools-table.jpg")} className="my-4" /> */}
      <Nav
        leftBtn="inventory"
        showFullList={showFullList}
        showBorrowedList={showBorrowedList}
      />
      {/* checkout feed */}

      <div className="flex flex-col justify-between mx-auto mt-8 max-w-7xl">
        {feedData?.length > 0 && (
          <>
            <div>
              <div className="flex items-center justify-between mx-4">
                <h2 className="text-4xl font-light tracking-wider text-left text-light-gray">
                  Inventory
                </h2>
                <div>
                  {/* <FunnelIcon className="w-6 h-6 ml-2 bg-transparent cursor-pointer text-light-gray" /> */}
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Search
                feedData={feedData}
                setSearchData={setSearchData}
                inputVal={searchVal}
                setInputVal={setSearchVal}
              />
            </div>
            <div className="mt-12">
              <p className="ml-8 text-sm font-bold text-light-gray">
                {listTitleRef.current}
              </p>
            </div>
          </>
        )}
        {/* sort */}
        {/* <FeedSortButton handleSort={handleSort}>Tool Name</FeedSortButton> */}
        {/* <FeedSortButton handleSort={handleBorrow}>Borrower</FeedSortButton> */}
        {loading && (
          <p className="mt-10 text-center text-light-gray animate-pulse">
            Loading Data
          </p>
        )}
        {!loading && feedData?.length === 0 && (
          <div>
            <br />
            <p className="mt-8 text-sm font-light text-center text-light-gray">
              No results! Your list is empty.
            </p>
          </div>
        )}
      </div>

      <div>
        {searchData?.length > 0 ? (
          <ul className="p-4 mx-4 mt-2 rounded-md xl:mx-auto bg-white/5 max-w-7xl">
            {searchData.map((tool) => (
              <FeedItem key={tool.id} feed={tool} setFeedData={setFeedData} />
            ))}
          </ul>
        ) : (
          <p className="mt-8 text-sm font-light text-center text-light-gray">
            Your search did not match any items.
          </p>
        )}
      </div>
    </PageTemplate>
  );
};
