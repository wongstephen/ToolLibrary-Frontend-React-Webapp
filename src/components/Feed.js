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
      <FeedSearch feedData={feedData} setSearchData={setSearchData} />

      {/* checkout feed */}
      <ul className="flex flex-col justify-between gap-2.5 ">
        <li>
          <h2
            className="text-lg font-medium tracking-wider text-left "
            onClick={() => console.log(feedData)}
          >
            Loaned Out
          </h2>
        </li>

        {/* sort */}
        <li className="flex items-center gap-5">
          <p className="text-sm font-normal tracking-wider ">Sort By</p>
          <FeedSortButton handleSort={handleSort}>Tool Name</FeedSortButton>
          <FeedSortButton handleSort={handleBorrow}>Borrower</FeedSortButton>
        </li>
        {loading ? (
          <>{createSkeleton()}</>
        ) : !searchData || searchData.length === 0 ? (
          <div>
            <br />
            No results!
          </div>
        ) : (
          <div>
            {searchData.filter((tool) => {
              return tool.loanee;
            }).length === 0 && (
              <>
                <br />
                You have nothing loaned out!
              </>
            )}
            {searchData
              .filter((tool) => {
                return tool.loanee;
              })
              .map((tool, idx) => (
                <FeedItem key={tool.id} feed={tool} setFeedData={setFeedData} />
              ))}
          </div>
        )}
      </ul>
    </PageTemplate>
  );
};
