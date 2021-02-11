import React from "react";
import BigHero from "../components/heroes/bigHero";
import TeamSummary from "../components/misc/teamSummaryRow";
import TeamDetails from "../components/misc/teamDetails";
import ContactCTA from "../components/cta/ContactCTA";
import coverImage from "../img/trevor-neely--vj4XtDTxYc-unsplash-pichi.jpg"
import verticalCover from "../img/headshots/large/Renegade-132.jpg"

const Team = () => {

    return (
        <div>
            <BigHero image={window.innerWidth > 1000 ? coverImage : verticalCover} title={"Our Team"}/>
            <TeamSummary/>
            <TeamDetails/>
            <ContactCTA/>
        </div>
    )
}

export default Team;
