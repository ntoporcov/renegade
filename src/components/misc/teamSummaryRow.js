import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import headshot from "../../img/headshots/test.jpg"

const useStyles = createUseStyles({
    headshot:{
        borderRadius:"100%",
        marginBottom:"15px",
        boxShadow:"0 4px 6px rgba(0,0,0,.2)",
    },
    teamBox:{
        padding:"10px",
        marginTop:"15px",
    }
})

const TeamMember = (props) => {
    const style = useStyles();

    return (
        <Col xs={7} md={6} lg={3} className={style.teamBox+" text-center"}>
            <Row className={"justify-content-center"}>
                <Col xs={9} md={8}>
                    <img src={props.headshot} alt={props.name+" headshot"} className={style.headshot+" img-fluid"} />
                </Col>
            </Row>
            <h3 className={"mb-0"}>{props.name}</h3>
            <span>{props.position}</span>
        </Col>
    )
}

const TeamSummary = () => {

    return (
        <Container>
            <Row className={"pt-5"}>
                <Col className={"text-center"}>
                    <h2>Meet The Team</h2>
                </Col>
            </Row>
            <Row className={"justify-content-center pb-5"}>
                <TeamMember
                    headshot={headshot}
                    name={"Colton Clark"}
                    position={"President & Managing Partner"}
                />
                <TeamMember
                    headshot={headshot}
                    name={"Will LastName"}
                    position={"VP & Managing Partner"}
                />
                <TeamMember
                    headshot={headshot}
                    name={"Clayton LastName"}
                    position={"Sr. Executive Recruiter"}
                />
            </Row>
        </Container>
    )
}

export default TeamSummary;
