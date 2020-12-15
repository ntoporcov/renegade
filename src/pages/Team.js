import React from "react";
import BigHero from "../components/heroes/bigHero";
import TeamSummary from "../components/misc/teamSummaryRow";
import TeamDetails from "../components/misc/teamDetails";
import ContactCTA from "../components/cta/ContactCTA";

const Team = () => {

    return (
        <div>
            <BigHero title={"Our Team"}/>
            <TeamSummary/>
            <TeamDetails/>
            <ContactCTA/>
        </div>
    )
}

export default Team;
