import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import image1 from "../img/annie-spratt-sggw4-qDD54-unsplash.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIcons} from "@fortawesome/pro-duotone-svg-icons";
import colors from "../utils/colors";
import ContactCTA from "../components/cta/ContactCTA";
import SmallHero from "../components/heroes/smallHero";

const About = () => {

    let list=[];
    for(let i=0;i < 13; i++){
        list.push('Service Here')
    }

    return (
        <>
            <SmallHero title={"Why Renegade"}/>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col md={8} className={"pt-5 pb-5"}>
                        <h2 className={"simple"}>
                            <span>Mission Statement</span>
                        </h2>
                        <p className={"pb-3"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat.
                            Dui nunc mattis enim ut. Ac orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut
                            lectus. Molestie ac feugiat sed lectus vestibulum mattis. Elementum eu facilisis sed odio
                            morbi quis commodo odio aenean. Viverra suspendisse potenti nullam ac. Justo laoreet sit
                            amet cursus sit. Nisl purus in mollis nunc sed id semper risus. Nullam eget felis eget nunc
                            lobortis
                        </p>
                        <img alt={"Description"} src={image1} className={"img-fluid textImage"}/>
                    </Col>
                    <Col md={8} className={"pt-5 pb-5"}>
                        <h2 className={"simple"}>
                            <span>Services</span>
                        </h2>
                        <p className={"pb-3"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat.
                            Dui nunc mattis enim ut. Ac orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut
                            lectus. Molestie ac feugiat sed lectus vestibulum mattis. Elementum eu facilisis sed odio
                            morbi quis commodo odio aenean. Viverra suspendisse potenti nullam ac. Justo laoreet sit
                            amet cursus sit. Nisl purus in mollis nunc sed id semper risus. Nullam eget felis eget nunc
                            lobortis
                        </p>
                        <Row className={"pb-4"}>
                            <Col xs={4}>
                                <ul>
                                    <li>{list[0]}</li>
                                    <li>{list[1]}</li>
                                    <li>{list[2]}</li>
                                    <li>{list[3]}</li>
                                </ul>
                            </Col>
                            <Col xs={4}>
                                <ul>
                                    <li>{list[4]}</li>
                                    <li>{list[5]}</li>
                                    <li>{list[6]}</li>
                                    <li>{list[7]}</li>
                                </ul>
                            </Col>
                            <Col xs={4}>
                                <ul>
                                    <li>{list[8]}</li>
                                    <li>{list[9]}</li>
                                    <li>{list[10]}</li>
                                    <li>{list[11]}</li>
                                </ul>
                            </Col>
                        </Row>
                        <img alt={"Description"} src={image1} className={"img-fluid textImage"}/>
                    </Col>
                    <Col md={8} className={"pt-5 pb-5"}>
                        <h2 className={"simple"}>Why We're Different</h2>
                        <Row className={"pt-4"}>
                            <Col md={2} className={"text-center"}>
                                <FontAwesomeIcon icon={faIcons} size={"5x"} color={colors.teal}/>
                            </Col>
                            <Col>
                                <h3>Topic</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat.
                                    Dui nunc mattis enim ut.
                                </p>
                            </Col>
                        </Row>
                        <Row className={"pt-4"}>
                            <Col md={2} className={"text-center"}>
                                <FontAwesomeIcon icon={faIcons} size={"5x"} color={colors.teal}/>
                            </Col>
                            <Col>
                                <h3>Topic</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat.
                                    Dui nunc mattis enim ut.
                                </p>
                            </Col>
                        </Row>
                        <Row className={"pt-4"}>
                            <Col md={2} className={"text-center"}>
                                <FontAwesomeIcon icon={faIcons} size={"5x"} color={colors.teal}/>
                            </Col>
                            <Col>
                                <h3>Topic</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat.
                                    Dui nunc mattis enim ut.
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
