import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import colors from "../../utils/colors"
import heroBG from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg"

const SmallHero = (props) => {

    const heroBGStyles = {
        background:props.image ?
          colors.gray.dark+" url("+props.image+") no-repeat center"
          : colors.gray.dark+" url("+heroBG+") no-repeat center",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundBlendMode:"multiply"
    }

    return (
        <Container
          fluid
          className={"pb-5 pt-5"}
          style={heroBGStyles}
        >
            <Row className={"pb-5 pt-5 text-center"}>
                <Col>
                    <h1 style={{color:colors.white}}>
                        {props.title}
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default SmallHero;
