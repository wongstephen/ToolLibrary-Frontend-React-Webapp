import React from "react";

export const FeedItemSkeleton = () => {
  return (
    <li className="flex gap-5 p-2.5 border-2 border-gray-100 rounded animate-pulse">
      {/* avator */}
      <div className="flex-1 h-12 max-w-[3rem] bg-lime-500/20 rounded-full" />
      <div className="flex flex-col justify-around flex-1">
        {/* Tool Name */}
        <div className="h-5 bg-gray-500/20 " />
        {/* Owner */}
        <div className="w-1/2 h-2 bg-gray-500/20 " />
      </div>
      <div className="flex items-center min-h-full ">
        {/* Edit */}
        <div className="w-6 h-6 bg-gray-500/20 " />
      </div>
    </li>
  );
};
