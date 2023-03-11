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

// <li className="flex py-1.5 min-h-[53px] border-b-[1px] border-b-gray-700/50 last-of-type:border-none">
// {/* Temp removed images features */}
// <img
//   src={
//     tool?.avator
//       ? require(`../../assets/avator/${tool.avator}.png`)
//       : require(`../../assets/avator/empty.png`)
//   }
//   alt="tool"
//   className="flex-1 w-2/12 rounded-full max-w-[4rem] hidden"
//   placeholder="none"
// />
// <div className="flex flex-col justify-around flex-1">
//   <h3 className="font-light tracking-wider text-white">{tool.name}</h3>
//   <p className="text-xs tracking-wider text-gray-500 ">{tool.loanee}</p>
// </div>
// <div className="flex items-center justify-center gap-2.5">
//   {tool.loanee && (
//     <UserMinusIcon
//       className="hidden w-6 h-auto text-gray-500 cursor-pointer sm:block"
//       onClick={handleLoanee}
//       title="Remove Loanee"
//     />
//   )}
//   <PencilSquareIcon
//     title="Edit Tool"
//     className="w-6 h-auto text-gray-500 cursor-pointer"
//     onClick={() => {
//       navigate("/edit-item", { state: tool });
//     }}
//   />
//   <TrashIcon
//     className="hidden w-6 h-auto text-gray-500 cursor-pointerm sm:block"
//     title="Delete Tool"
//     onClick={handleTrash}
//   />
// </div>
// </li>
