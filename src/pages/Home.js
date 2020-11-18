import React from "react";
import Hero from "../components/heroes/homeHero"
import IndustriesRow from "../components/misc/homeIndustriesRow"
import TeamRow from "../components/misc/homeTeamSection";
import ContactRow from "../components/form/contactRow";

function Home() {
  return (
    <div>
        <Hero/>
        <IndustriesRow/>
        <TeamRow/>
        <ContactRow/>
    </div>
  );
}

export default Home;
