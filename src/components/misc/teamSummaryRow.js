import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import coltonHeadshot from "../../img/headshots/small/Renegade-102-square.jpg"
import claytonHeadshot from "../../img/headshots/small/Renegade-106-square.jpg"
import willHeadshot from "../../img/headshots/small/Renegade-108-square.jpg"

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
            <div className={"scrollButton"} onClick={()=>{
              document.getElementById(props.hash).scrollIntoView({behavior:"smooth"})
            }}>
            <Row className={"justify-content-center"}>
                  <Col xs={9} md={8}>
                      <img src={props.headshot} alt={props.name+" headshot"} className={style.headshot+" img-fluid"} />
                  </Col>
              </Row>
              <h3 className={"mb-0"}>{props.name}</h3>
              <span>{props.position}</span>
            </div>
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
                    headshot={coltonHeadshot}
                    name={"Colton Clark"}
                    position={"President & Managing Partner"}
                    hash={"colton"}
                />
                <TeamMember
                    headshot={willHeadshot}
                    name={"Will Sheaf"}
                    position={"VP & Managing Partner"}
                    hash={"will"}
                />
                <TeamMember
                    headshot={claytonHeadshot}
                    name={"Clayton Fraleigh"}
                    position={"Sr. Executive Recruiter"}
                    hash={"clayton"}
                />
            </Row>
        </Container>
    )
}

export default TeamSummary;
