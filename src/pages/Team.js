import React from "react";
import BigHero from "../components/heroes/bigHero";
import TeamSummary from "../components/misc/teamSummaryRow";
import TeamDetails from "../components/misc/teamDetails";
import ContactCTA from "../components/cta/ContactCTA";
import coverImage from "../img/iStock-1067849932-pichi.jpg"

const Team = () => {

    return (
        <div>
            <BigHero position={"center 20%"} image={coverImage} title={"Our Team"}/>
            <TeamSummary/>
            <TeamDetails/>
            <ContactCTA/>
        </div>
    )
};

export default Team;
