import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import bgimage from "../../img/lance-asper-d9Cs-9I1fPo-unsplash.jpg"
import colors from "../../utils/colors";
import MouseScroll from "../../utils/mouseScroll"

const useStyles = createUseStyles({
    heroBG:{
        height:"calc(100vh - 118px)",
        background:"url("+bgimage+") no-repeat center",
        backgroundColor:"#a0a0a0",
        backgroundBlendMode:"multiply",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        textAlign:"center",
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
            <Row className={"h-100 flex-column align-items-center justify-content-space-between"}>
                <Col sm={12} md={9} lg={8}>
                    <h1 className={"home"}>Recruitment<br/>Redefined</h1>
                </Col>
                <Col className={"d-flex justify-content-center align-items-end pb-5"}>
                    <MouseScroll/>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;
