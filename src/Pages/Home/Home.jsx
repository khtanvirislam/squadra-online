import React from "react";
import {
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
} from "../../Components/Body";

export const Home = () => {
  return (
    <div className="max-h-full sm:py-5 md:py-10 lg:py-20">
      <Hero></Hero>
      <div className="sm:py-5 md:py-10 lg:py-20">
        <Stats></Stats>
        <Business></Business>
        <Billing></Billing>
        <CardDeal></CardDeal>
        <Testimonials></Testimonials>
        <Clients></Clients>
        <CTA></CTA>
      </div>
    </div>
  );
};
