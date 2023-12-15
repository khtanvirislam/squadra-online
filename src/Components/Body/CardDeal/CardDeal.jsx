import React from "react";
import { CardDealText } from "./CardDealText";
import { CardDealPic } from "./CardDealPic";

export const CardDeal = () => {
  return (
    <div className="mt-10 md:mt-20 py-10 md:py-20 flex flex-col lg:flex-row justify-around items-center hover:bg-slate-800 rounded-3xl">
      <CardDealText></CardDealText>
      <CardDealPic></CardDealPic>
    </div>
  );
};
