import React, { useEffect, useRef, useState } from "react";

// api
// import useAxios from "../hooks/useAxiosInstance";
// import { useNavigate } from "react-router-dom";

// components
import { FeedItem } from "./presentational/FeedItem";
import { Nav } from "./presentational/Nav";
import { Search } from "./presentational/Search";
import { PageTemplate } from "./presentational/PageTemplate";

// import { FeedSortButton } from "./presentational/FeedSortButton";
import useAuth from "../hooks/useAuth";

export const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [feedCount, setFeedCount] = useState(0);
  const listTitleRef = useRef("All Items");

  const { user, loading } = useAuth();

  useEffect(() => {
    setFeedData(() => user.user.tool);
    setSearchData(() => user.user.tool);
  }, [user]);

  const [searchVal, setSearchVal] = useState("");

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

  // Sort Name and Borrower
  // const [sortUp, setSortUp] = useState(true);
  // const handleSort = () => {
  //   setSortUp((prevVal) => !prevVal);
  //   sortUp
  //     ? setSearchData(searchData.sort((a, b) => (a.name > b.name ? 1 : -1)))
  //     : setSearchData(searchData.sort((a, b) => (a.name < b.name ? 1 : -1)));
  // };

  // const [borrowUp, setBorrowUp] = useState(true);
  // const handleBorrow = () => {
  //   setBorrowUp((prevVal) => !prevVal);
  //   borrowUp
  //     ? setSearchData(searchData.sort((a, b) => (a.loanee > b.loanee ? 1 : -1)))
  //     : setSearchData(
  //         searchData.sort((a, b) => (a.loanee < b.loanee ? 1 : -1))
  //       );
  // };
  // End Sort Name and Borrower

  // Send user to login if no data

  return (
    <PageTemplate>
      {/* <div className="w-full h-[30vh] bg-center bg-cover my-10 bg-toolTable"></div> */}

      <Nav
        leftBtn="inventory"
        showFullList={showFullList}
        showBorrowedList={showBorrowedList}
        setFeedCount={setFeedCount}
      />

      {/* checkout feed */}

      <div className="flex flex-col justify-between max-w-xl mx-auto mt-8">
        {feedData?.length > 0 && (
          <>
            <div>
              <div className="flex items-center justify-between first-letter:">
                {/* <h2 className="text-2xl font-bold tracking-wider text-center text-theme-red">
                  Inventory
                </h2> */}
                <div>
                  {/* <FunnelIcon className="w-6 h-6 ml-2 bg-transparent cursor-pointer text-light-gray" /> */}
                </div>
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
              No Items To Display
            </p>
          </div>
        )}
      </div>

      <div className="mx-4">
        {searchData?.length > 0 ? (
          <ul className="flex flex-col max-w-xl gap-3 mx-auto mt-2">
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
    </PageTemplate>
  );
};
