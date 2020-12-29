import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import FormCol from "./form";

const useStyles = createUseStyles({
    pictureCol:{
        background:"primary",
        borderRadius:10,
        boxShadow:"0 3px 6px rgba(0,0,0,.2)"
    }
})

const ContactRow = () => {
    const style = useStyles();

    return (
        <Container fluid style={{backgroundColor:colors.gray.almostWhite}}>
            <Container className={"pt-5 pb-5"}>
                <Row className={"pt-5 pb-5"}>
                    <Col md={7} lg={5}>
                        <FormCol/>
                    </Col>
                    <Col className={style.pictureCol} />
                </Row>
            </Container>
        </Container>
    )
}

export default ContactRow;
