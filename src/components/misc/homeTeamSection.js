import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import teamBackground from "../../img/headshots/large/Renegade-139.jpg"
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = createUseStyles({
    teamBackground:{
        background:colors.gray.light+" url("+teamBackground+") no-repeat bottom",
        backgroundSize:"cover",
        backgroundPosition:"right bottom",
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
                    <Col md={{span:10,offset:1}} className={"pt-5 pb-4"}>
                        <h2><span className={"primary"}>We work with the best,<br/>so the best can work for you.</span></h2>
                    </Col>
                    <Col md={{span:3,offset:1}}>
                        <Link to={"/team"}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                            >Meet The Team</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default TeamRow;
