import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import colors from "../../utils/colors"
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const ContactCTA = () => {

    return (
        <Container fluid style={{backgroundColor:colors.teal}}>
            <Row>
                <Col className={"pt-5 pb-5 text-center"}>
                    <h2 className={"simple"} style={{color:"white"}}>
                        Learn More About Us
                    </h2>
                    <Link to={"/contact"}>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            size={"large"}
                        >
                            Get In Touch
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactCTA;
