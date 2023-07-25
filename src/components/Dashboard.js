import React, { useEffect, useRef, useState } from "react";

// components
import { FeedItem } from "./presentational/FeedItem";
import { Search } from "./presentational/Search";

import { useAuth } from "../context/AuthContext";
import { NavigationBar } from "./presentational/NavigationBar";
import Button from "./presentational/Button";
import { useDarkmode, ACTION } from "../reducers/Darkmode";

export const Dashboard = () => {
  const { dispatch } = useDarkmode();

  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [feedCount, setFeedCount] = useState(0);
  const [isSortActive, setIsSortActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState("allFilterBtn");
  const listTitleRef = useRef("All Items");
  const { user, loading } = useAuth();

  useEffect(() => {
    setFeedData(() => user.user.tool);
    setSearchData(() => user.user.tool);

    if (user.user.darkmode) {
      dispatch({ type: ACTION.SET_DARKMODE });
    } else {
      dispatch({ type: ACTION.SET_LIGHTMODE });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortActive]);

  function handleOutsideClick(e) {
    if (isSortActive && !e.target.id.includes("sortby")) {
      setIsSortActive((prev) => false);
    }
  }

  //return list unfiltered
  const showFullList = () => {
    setSearchData(() => {
      return feedData;
    });
    setFeedCount(() => feedData.length);
    listTitleRef.current = "All Items";
    setSearchVal((prev) => "");
    return;
  };

  //return list with server data filtered with items borrorwd
  const showBorrowedList = () => {
    const filteredFeed = feedData.filter((tool) => {
      return tool.loanee;
    });
    setSearchData(() => filteredFeed);
    setFeedCount(filteredFeed.length);
    listTitleRef.current = "Currently Loaned Out";
    setSearchVal((prev) => "");
    return;
  };

  const sortSearchByName = () => {
    setSearchData((prev) => {
      const sort = prev.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // Convert names to uppercase to ensure case-insensitive sorting
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1; // a should come before b in the sorted order
        } else if (nameA > nameB) {
          return 1; // b should come before a in the sorted order
        }

        return 0; // names are equal, no change in order);
      });
      return sort;
    });
  };

  const sortSearchByLoanee = () => {
    setSearchData((prev) => {
      const loanedOut = prev.filter((el) => el.loanee);
      const notLoanedOut = prev.filter((el) => !el.loanee);

      const sort = loanedOut.sort((a, b) => {
        const nameA = a.loanee.toUpperCase(); // Convert names to uppercase to ensure case-insensitive sorting
        const nameB = b.loanee.toUpperCase();
        if (nameA < nameB) {
          return -1; // a should come before b in the sorted order
        } else if (nameA > nameB) {
          return 1; // b should come before a in the sorted order
        }
        return 0; // names are equal, no change in order);
      });

      return [...sort, ...notLoanedOut];
    });
  };
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col justify-between max-w-xl p-4 mx-auto mt-8">
        {feedData?.length > 0 && (
          <>
            <div>
              <div className="flex items-center justify-between first-letter:">
                <div></div>
              </div>
            </div>
            <div className="mt-4">
              <Search
                feedData={feedData}
                setSearchData={setSearchData}
                inputVal={searchVal}
                setInputVal={setSearchVal}
                setFeedCount={setFeedCount}
              />
            </div>
            <div className="mt-12">
              <p className="text-2xl font-bold text-left text-theme-red">
                {listTitleRef.current} ({feedCount})
              </p>
            </div>
          </>
        )}
        {loading && (
          <p className="mt-10 text-center text-light-gray animate-pulse">
            Loading Data
          </p>
        )}
        {!loading && feedData?.length === 0 && (
          <div>
            <br />
            <p className="mt-8 text-sm font-light text-center text-dark-gray">
              No Items To Display. Track a new tool by clicking Add.
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between max-w-xl p-4 mx-auto my-4">
        <ul className="flex gap-4">
          <li>
            <button
              onClick={(e) => {
                setActiveFilter(() => {
                  return e.target.name;
                });
                showFullList();
              }}
              name="allFilterBtn"
              className={` hover:text-theme-yellow  ${
                activeFilter === "allFilterBtn" && "underline font-bold"
              }`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                setActiveFilter(() => {
                  return e.target.name;
                });
                showBorrowedList();
              }}
              className={` hover:text-theme-yellow  ${
                activeFilter === "borrowedFilterBtn" && "underline font-bold"
              }`}
              name="borrowedFilterBtn"
            >
              Loaned Out
            </button>
          </li>
        </ul>
        <div>
          <div id="dropdown-wrapper" className="relative">
            <Button
              cname="border-2 border-gray-200 "
              handleClick={() => {
                setIsSortActive((prev) => !prev);
              }}
              idName="sortby-button"
              isDisabled={false}
            >
              Sort By
            </Button>

            <ul
              id="sortby-container"
              className={`absolute right-0 ${
                isSortActive ? " opacity-100 flex" : " opacity-0 hidden "
              } flex-col transition-all duration-2  delay-200 gap-6 py-4 pl-4 mt-1 text-sm text-gray-500 bg-white  border-2 border-gray-200 rounded-md shadow-md pr-14 whitespace-nowrap`}
            >
              <li>
                <button onClick={sortSearchByName}>Tool Name</button>
              </li>
              <li>
                <button onClick={sortSearchByLoanee}>Loanee</button>
              </li>
              {/* <li>Date Loaned</li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-4">
        {searchData?.length > 0 ? (
          <ul className="flex flex-col max-w-xl gap-1 mx-auto mt-2">
            {searchData.map((tool) => (
              <FeedItem key={tool.id} feed={tool} setFeedData={setFeedData} />
            ))}
          </ul>
        ) : (
          <>
            {feedData?.length > 0 ? (
              <p className="mt-8 text-sm font-light text-center text-light-gray">
                No search results.{" "}
              </p>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};
