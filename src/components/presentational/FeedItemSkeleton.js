import React from "react";

export const FeedItemSkeleton = () => {
  return (
    <li className="flex py-1.5 min-h-[53px] border-b-[1px] border-b-gray-700/50 last-of-type:border-none">
      {/* avator */}
      <div className="flex flex-col justify-around flex-1 h-10">
        {/* Tool Name */}
        <div className="h-5 bg-gray-500/20" />
        {/* Owner */}
        <div className="w-1/2 h-2 bg-gray-500/20" />
      </div>
      <div className="flex items-center min-h-full">
        {/* Edit */}
        <div className="w-6 h-6 bg-gray-500/20" />
      </div>
    </li>
  );
};
