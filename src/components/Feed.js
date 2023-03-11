import React, { useEffect, useState } from "react";

// api
import { getUserToolsApi } from "../api/axiosApi";
import useAxios from "../hooks/useAxiosInstance";
// import api from "../api/axios";
import { useNavigate } from "react-router-dom";

// components
import { FeedItemSkeleton } from "./presentational/FeedItemSkeleton";
import { FeedItem } from "./presentational/FeedItem";
import { FeedMenu } from "./presentational/FeedMenu";
import { FeedSearch } from "./presentational/FeedSearch";
import { PageTemplate } from "./presentational/PageTemplate";
import { FeedSortButton } from "./presentational/FeedSortButton";
import axios from "../api/axios";

import { FunnelIcon } from "@heroicons/react/24/outline";

export const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  // axios instance implementation
  const [response, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/tools/",
    requestConfig: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    data: {},
  });

  // Update list when loanee is removed
  useEffect(() => {
    setFeedData(response);
  }, [response]);

  useEffect(() => {
    setSearchData(feedData);
  }, [feedData]);

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

  function createSkeleton() {
    const rand = Math.floor(Math.random() * 10 + 3);
    const arr = new Array(rand).fill("");
    const arrMap = arr.map((_, idx) => <FeedItemSkeleton key={idx} />);
    return arrMap;
  }

  return (
    <PageTemplate>
      <FeedMenu leftBtn="inventory" />

      {/* checkout feed */}
      <ul className="flex flex-col justify-between gap-2 mt-8">
        <li>
          <div className="flex items-center justify-between mx-4">
            <h2 className="text-4xl font-light tracking-wider text-left text-light-gray">
              Inventory
            </h2>
            <div>
              <FunnelIcon className="w-6 h-6 ml-2 bg-transparent cursor-pointer text-light-gray" />
            </div>
          </div>
        </li>

        {/* sort */}
        <li className="flex items-center ml-2">
          {/* <FeedSortButton handleSort={handleSort}>Tool Name</FeedSortButton> */}
          {/* <FeedSortButton handleSort={handleBorrow}>Borrower</FeedSortButton> */}
        </li>
        <li>
          <FeedSearch feedData={feedData} setSearchData={setSearchData} />
        </li>
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
            <ul className="mt-4 mb-12">
              {searchData &&
                searchData
                  .filter((tool) => {
                    return tool.loanee;
                  })
                  .map((tool, idx) => (
                    <FeedItem
                      key={tool._id}
                      feed={tool}
                      setFeedData={setFeedData}
                    />
                  ))}
            </ul>
          </div>
        )}
      </ul>
    </PageTemplate>
  );
};
