import { useEffect } from "react";
import Banner from "../modules/Banner";
import Definition from "../modules/Definition";
import Features from "../modules/Features";
import Guide from "../modules/Guide";
import Logos from "../modules/Logos";
import Restrictions from "../modules/Restrictions";
import Tips from "../modules/Tips";

function HomePage() {
  return (
    <>
      <Banner />
      <Features />
      <Definition />
      <Logos />
      <Tips />
      <Guide />
      <Restrictions />
    </>
  );
}

export default HomePage;
