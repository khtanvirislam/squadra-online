import React from "react";
import { BillingImg } from "./BillingImg";
import { BillingText } from "./BillingText";

export const Billing = () => {
  return (
    <div className="pt-20 md:pt-28 px-5 flex flex-col lg:flex-row justify-around items-center ">
      <BillingImg></BillingImg>
      <BillingText></BillingText>
    </div>
  );
};
