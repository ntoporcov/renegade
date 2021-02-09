import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../utils/colors"
import BigHero from "../components/heroes/bigHero";
import FormCol from "../components/form/form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,faMailbox} from "@fortawesome/pro-duotone-svg-icons";
import image from "../img/lance-asper-d9Cs-9I1fPo-unsplash.jpg"

const useStyles = createUseStyles({
    formCol:{
        marginTop:"-320px",
        backgroundColor:colors.gray.almostWhite,
        paddingTop:"40px",
        borderRadius:"10px"
    }
})

const Contact = () => {
    const style = useStyles();

    return (
        <div>
            <BigHero image={image} height={"60vh"}/>
            <Container fluid style={{backgroundColor:colors.gray.almostWhite}}>
                <Container>
                    <Row className={"pt-5 pb-5 justify-content-center"}>
                        <Col md={12} lg={6} className={style.formCol}>
                            <FormCol/>
                        </Col>
                        <Col style={{paddingLeft:40}} className={"mt-5 mt-lg-0"}>
                            <Row className={"text-center text-lg-left"}>
                                <Col xs={12} className={"mb-5"}>
                                    <h2><FontAwesomeIcon icon={faMailbox} color={colors.primary}/> Address</h2>
                                    <p className={"mb-0"}>1510 Robert’s Dr<br/>Jacksonville Beach, FL – 32250</p>
                                </Col>
                                {/*<Col xs={12} className={"mb-5"}>*/}
                                {/*    <h2><FontAwesomeIcon icon={faPhone} color={colors.primary}/> Phone</h2>*/}
                                {/*    <a href={"tel:(123) 123-1234"}>(123) 123-1234</a>*/}
                                {/*</Col>*/}
                                <Col xs={12} className={"mb-5"}>
                                    <h2><FontAwesomeIcon icon={faEnvelope} color={colors.primary}/> Email</h2>
                                    <a href={"mailto:info@renegadeus.com"}>info@renegadeus.com</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact;
