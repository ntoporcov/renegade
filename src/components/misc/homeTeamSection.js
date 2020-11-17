import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import teamBackground from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg"
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = createUseStyles({
    teamBackground:{
        background:colors.gray.dark+" url("+teamBackground+") no-repeat bottom",
        backgroundSize:"cover",
        backgroundBlendMode:"multiply",
        minHeight:"80vh",
        color:"white !important"
    }
})

const TeamRow = () => {
    const style = useStyles();

    return(
        <Container fluid className={style.teamBackground}>
            <Container>
                <Row>
                    <Col md={{span:10,offset:2}} className={"pt-5"}>
                        <h2><span className={"teal"}>Meet The Team</span></h2>
                    </Col>
                    <Col md={{span:3,offset:2}}>
                        <p>Something about the team, this is kind of optional, we might not really need text here</p>
                        <Link to={"/team"}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                            >Check It Out</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default TeamRow;
