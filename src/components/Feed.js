import React, { useEffect, useRef, useState } from "react";

// api
import { getUserToolsApi } from "../api/axiosApi";
import useAxios from "../hooks/useAxiosInstance";
// import api from "../api/axios";
import { useNavigate } from "react-router-dom";

// components
import { FeedItemSkeleton } from "./presentational/FeedItemSkeleton";
import { FeedItem } from "./presentational/FeedItem";
import { FeedMenu } from "./presentational/FeedMenu";
import { Search } from "./presentational/Search";
import { PageTemplate } from "./presentational/PageTemplate";
import { FeedSortButton } from "./presentational/FeedSortButton";
import axios from "../api/axios";

import { FunnelIcon } from "@heroicons/react/24/outline";

export const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const listTitleRef = useRef("All Items");

  useEffect(() => {
    async function checkToken() {
      const token = localStorage.getItem("token");
      const data = await getUserToolsApi(token);
      if (!data) {
        localStorage.clear();
        navigate("/login");
      }
    }
    checkToken();
  }, []);

  // axios instance implementation
  const [response, error, loading] = useAxios(
    {
      axiosInstance: axios,
      method: "GET",
      url: "/tools/",
      requestConfig: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    listTitleRef.current = "Borrowed";
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

  function createSkeleton() {
    const rand = Math.floor(Math.random() * 10 + 3);
    const arr = new Array(rand).fill("");
    const arrMap = arr.map((_, idx) => <FeedItemSkeleton key={idx} />);
    return arrMap;
  }

  return (
    <PageTemplate>
      <FeedMenu
        leftBtn="inventory"
        showFullList={showFullList}
        showBorrowedList={showBorrowedList}
      />
      {/* checkout feed */}

      <div className="flex flex-col justify-between mt-8">
        <div>
          <div className="flex items-center justify-between mx-4">
            <h2 className="text-4xl font-light tracking-wider text-left text-light-gray">
              Inventory
            </h2>
            <div>
              <FunnelIcon className="w-6 h-6 ml-2 bg-transparent cursor-pointer text-light-gray" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Search
            feedData={feedData}
            setSearchData={setSearchData}
            inputVal={searchVal}
            setInputVal={setSearchVal}
          />
        </div>
        <div className="mt-4">
          <p className="ml-8 text-sm font-bold text-light-gray">
            {listTitleRef.current}
          </p>
        </div>
        {/* sort */}

        {/* <FeedSortButton handleSort={handleSort}>Tool Name</FeedSortButton> */}
        {/* <FeedSortButton handleSort={handleBorrow}>Borrower</FeedSortButton> */}

        {loading ? (
          <>{createSkeleton()}</>
        ) : !searchData || searchData.length === 0 ? (
          <div>
            <br />
            <p className="text-sm font-light text-center text-light-gray">
              No results!
            </p>
          </div>
        ) : (
          <div>
            {searchData.filter((tool) => {
              return tool.loanee;
            }).length === 0 && (
              <>
                <br />
                <p className="text-sm font-light text-center text-light-gray">
                  The list is empty!
                </p>
              </>
            )}
            <ul className="p-4 mx-4 mt-2 mb-20 rounded-md bg-white/5">
              {searchData.map((tool, idx) => (
                <FeedItem
                  key={tool._id}
                  feed={tool}
                  setFeedData={setFeedData}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};
