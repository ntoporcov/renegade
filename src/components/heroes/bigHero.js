import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import colors from "../../utils/colors"
import heroBG from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg"

const BigHero = (props) => {

    const heroBGStyles = {
        height:props.height || "80vh",
        backgroundImage:props.image ?
         "url("+props.image+")"
          :" url("+heroBG+")",
        backgroundSize:"cover",
        backgroundPosition:props.position ? props.position : "center",
        backgroundBlendMode:"multiply",
        backgroundRepeat:"no-repeat",
        backgroundColor:colors.gray.medium
    }

    return (
        <Container
          fluid
          className={"pb-5 pt-5"}
          style={heroBGStyles}>
            <Container style={{height:"100%"}}>
                <Row style={{height:"100%"}} className={"align-items-end"}>
                    <Col>
                        <h1 style={{color:colors.white}}>
                            {props.title}
                        </h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default BigHero;
