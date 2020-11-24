import React from "react";
import {createUseStyles} from "react-jss";
import BigHero from "../components/heroes/bigHero";
import TeamSummary from "../components/misc/teamSummaryRow";
import TeamDetails from "../components/misc/teamDetails";

const useStyles = createUseStyles({})

const Team = () => {

    return (
        <div>
            <BigHero title={"Our Team"}/>
            <TeamSummary/>
            <TeamDetails/>
        </div>
    )
}

export default Team;
