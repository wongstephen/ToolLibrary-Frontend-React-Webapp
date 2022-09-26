import React from "react";

export const FeedSortButton = ({ children, handleSort }) => {
  return (
    <button
      className="text-xs font-light p-2.5 tracking-wider bg-gray-500/10 rounded-md hover:bg-gray-500/50 hover:shadow"
      onClick={handleSort}
    >
      {children}
    </button>
  );
};
