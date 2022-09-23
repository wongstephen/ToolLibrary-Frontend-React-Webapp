import React, { useEffect, useState } from "react";

import { getUserToolsApi } from "../api/axiosApi";

import { FeedItemSkeleton } from "./FeedItemSkeleton";
import { AppTitle } from "./AppTitle";
import { FeedItem } from "./FeedItem";
// import { FeedMenu } from "./FeedMenu";
import { FeedSearch } from "./FeedSearch";
import { PageTemplate } from "./PageTemplate";

export const Inventory = () => {
  const [feedData, setFeedData] = useState([]);

  // TODO: Search Input
  const [searchData, setSearchData] = useState("");
  const [searcInput, setSearchInput] = useState("");

  useEffect(() => {
    const getItems = async () => {
      const token = await localStorage.getItem("token");
      const data = await getUserToolsApi(token);
      setFeedData(data);
    };
    getItems();
  }, []);

  return (
    <PageTemplate>
      {/* <FeedMenu setfeedData={setFeedData} /> */}
      <FeedSearch />
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
        <li className="flex items-center gap-2.5  md:gap-5">
          <p className="text-sm font-normal tracking-wider ">Sort By</p>
          <button className="px-2.5 py-2.5 text-xs font-light tracking-wider rounded-md bg-gray-500/10">
            Tool name
          </button>
          <button className="px-2.5 py-2.5 text-xs font-light tracking-wider rounded-md bg-gray-500/10">
            Borrower
          </button>
          <button className="px-2.5 py-2.5 text-xs font-light tracking-wider rounded-md bg-gray-500/10">
            Status
          </button>
        </li>
        {feedData.length > 0 ? (
          feedData
            .sort((toola, toolb) => (toola.loanee < toolb.loanee ? 1 : -1))
            .map((tool) => <FeedItem key={tool.id} feed={tool} />)
        ) : (
          <>
            <FeedItemSkeleton />
            <FeedItemSkeleton />
            <FeedItemSkeleton />
            <FeedItemSkeleton />
            <FeedItemSkeleton />
            <FeedItemSkeleton />
          </>
        )}
      </ul>
    </PageTemplate>
  );
};
