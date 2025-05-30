import React from "react";
import Hero from "../COMPONENT/Hero/Hero";
import Popular from "../COMPONENT/Popular/Popular";
import Offer from "../COMPONENT/Offer/Offer";
import NewCollection from "../COMPONENT/NewCollection/NewCollection";
import Newsletter from "../COMPONENT/New/Newsletter";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
    </div>
  );
}
