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
        backgroundPosition:"center 90px",
        textAlign:"center"
    },
    industries:{
        color:colors.gray.medium,
        fontWeight:"600",
        alignItems:"center",

        "& span":{
            display:"inline-block",
            paddingBottom:"20px"
        }
    }
})

const Hero = () => {
    const style = useStyles()

    return (
        <Container fluid className={style.heroBG}>
            <Row className={"justify-content-center"}>
                    <Col xs={12} sm={10} md={9} lg={7} xl={6}>
                        <h1 className={"home"}>A NEW APPROACH TO RECRUITMENT</h1>
                    </Col>
                    <Col md={9}>
                        <Row className={style.industries}>
                            <Col xs={6} md={3}><span>Accounting & Finance</span></Col>
                            <Col xs={6} md={3}><span>Construction</span></Col>
                            <Col xs={6} md={3}><span>Energy</span></Col>
                            <Col xs={6} md={3}><span>Engineering</span></Col>
                        </Row>
                    </Col>
                </Row>
        </Container>
    )
}

export default Hero;
