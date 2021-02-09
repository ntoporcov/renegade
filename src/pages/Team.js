import React from "react";
import BigHero from "../components/heroes/bigHero";
import TeamSummary from "../components/misc/teamSummaryRow";
import TeamDetails from "../components/misc/teamDetails";
import ContactCTA from "../components/cta/ContactCTA";
import coverImage from "../img/headshots/large/Renegade-114.jpg"

const Team = () => {

    return (
        <div>
            <BigHero image={coverImage} title={"Our Team"}/>
            <TeamSummary/>
            <TeamDetails/>
            <ContactCTA/>
        </div>
    )
}

export default Team;
