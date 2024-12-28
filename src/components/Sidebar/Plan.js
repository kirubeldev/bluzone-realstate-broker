import React from "react";
import { MdOutlineLogout } from "react-icons/md";

export const Plan = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <button className="flex gap-4 items-center">
        <MdOutlineLogout  className="text-xl"/>
          <p className="font-bold text-lg">Logout</p>
        </button>

      
      </div>
    </div>
  );
};
