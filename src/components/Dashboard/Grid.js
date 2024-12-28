import React from "react";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { Barchart } from "./Barchart";
import { RecentTransactions } from "./RecentTransactions";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      {/* <StatCards /> */}
      <ActivityGraph />
      <Barchart />
      <RecentTransactions />
    </div>
  );
};