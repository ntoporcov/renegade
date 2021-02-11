import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import image1 from "../img/headshots/large/Renegade-122.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAtom, faHandshakeAlt, faLightbulbOn} from "@fortawesome/pro-duotone-svg-icons";
import colors from "../utils/colors";
import ContactCTA from "../components/cta/ContactCTA";
import SmallHero from "../components/heroes/smallHero";
import bgImage from "../img/mike-scheid-xoYPV4oVQJI-unsplash-pichi.jpg"

const About = () => {

    return (
        <>
            <SmallHero image={bgImage} title={"Why Renegade"}/>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col md={12} lg={8} className={"pt-5 pb-5"}>
                        <h2 className={"simple"}>
                            <span>Mission Statement</span>
                        </h2>
                        <p className={"pb-3"}>
                            Renegade Resources is a full cycle recruitment and executive search firm focused on creating a new standard and approach to the recruitment industry. The Renegade model was designed to cut through the noise of the executive recruitment process. Through years of accumulated experience our partners at Renegade have identified the core flaw to the executive recruitment process. That is, high volume, non-specialized resume farming that other firm’s practice. A clear exchange for quantity over quality. In contrast, we have tailored our business model specifically around the personalized relationships we forge with our clients. We start the process with a conversation, and we close the deal with a handshake.
                            <br/><br/>
                            To complement our lasting relationships with our clients we believe the most essential component to improve operational fluency is industry knowledge. We know what our clients want and where our competitors fall short to meet those individualized needs. At Renegade we pride ourselves in our ability to match our premier recruits with a company best fit for their career goals, lifestyle, and general wellbeing. By gathering these specific data points, Renegade has uniquely customized our service to fit each of our client’s specific needs and constraints.
                            <br/><br/>
                            <b>Companies</b> augment their existing talent for a competitive edge, <b>Management</b> is under perpetual pressure to obtain innovative talent, <b>Renegade</b> is uniquely focused on delivering that premier talent. At Renegade, delivering top tier recruits under budget and on time is our bottom line. Through a finely cultivated organizational culture and an acute devotion to the process, we are in the business of hiring the best for you.
                        </p>
                        <img alt={"Description"} src={image1} className={"img-fluid textImage"}/>
                    </Col>
                    <Col md={12} lg={8} className={"pt-5 pb-5"}>
                        <h2 className={"simple"}>Why We're Different</h2>
                        <Row className={"pt-4 pb-4"}>
                            <Col md={2} className={"text-lg-center pb-3"}>
                                <FontAwesomeIcon icon={faHandshakeAlt} size={"5x"} color={colors.primary}/>
                            </Col>
                            <Col>
                                <h3>Personalized Relationships</h3>
                                <p>
                                    At Renegade we pride ourselves in our relentless devotion to our clients. It is the definitive factor to our boutique style operations versus big box competition. Every incoming phone call at Renegade is handled by a partner to ensure your business is our business. Our goal is to not only provide you with the best candidate available, but the best candidate for your company.
                                </p>
                            </Col>
                        </Row>
                        <Row className={"pt-4 pb-4"}>
                            <Col md={2} className={"text-lg-center pb-3"}>
                                <FontAwesomeIcon icon={faAtom} size={"5x"} color={colors.primary}/>
                            </Col>
                            <Col>
                                <h3>Knowledge of Industry</h3>
                                <p>
                                    At Renegade we are hyperaware of the ever-changing landscapes within all our focused industries. We are constantly updating our intel on industry specific standards so we can best serve our clients. Our expertise is the perfect complement to our dedication.
                                </p>
                            </Col>
                        </Row>
                        <Row className={"pt-4 pb-4"}>
                            <Col md={2} className={"text-lg-center pb-3"}>
                                <FontAwesomeIcon icon={faLightbulbOn} size={"5x"} color={colors.primary}/>
                            </Col>
                            <Col>
                                <h3>Innovation Driven</h3>
                                <p>
                                    At Renegade we work with industries that are constantly being molded by innovation and shaped by technological advancement. It is our duty to ensure that we pivot with unprecedented times and unforeseeable circumstances. Nothing could possibly stand in between us and our clients.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <ContactCTA/>
        </>
    )
}

export default About;
