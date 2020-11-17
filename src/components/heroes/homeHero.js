import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import bgimage from "../../img/dave-hoefler-X6l7F9gL6rw-unsplash.jpg"
import colors from "../../utils/colors";

const useStyles = createUseStyles({
    heroBG:{
        height:"calc(100vh - 118px)",
        background:"url("+bgimage+") no-repeat center",
        backgroundSize:"cover",
        textAlign:"center"
    },
    industries:{
        color:colors.gray.medium,
        fontWeight:"600"
    }
})

const Hero = () => {
    const style = useStyles()

    return (
        <Container fluid className={style.heroBG}>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col md={9}>
                        <h1 className={"pt-5"}>HEADLINE GOES HERE</h1>
                        <Row className={style.industries}>
                            <Col><span>Accounting<br/>& Finance</span></Col>
                            <Col><span>Construction</span></Col>
                            <Col><span>Energy</span></Col>
                            <Col><span>Engineering</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Hero;
