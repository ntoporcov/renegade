import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import heroBG from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg"

const useStyles = createUseStyles({
    heroBG:{
        background:colors.gray.dark+" url("+heroBG+") no-repeat center",
        backgroundSize:"cover",
        backgroundBlendMode:"multiply",
    }
})

const BigHero = (props) => {
    const style = useStyles();

    return (
        <Container fluid className={style.heroBG+" pb-5 pt-5"} style={{height:props.height || "80vh"}}>
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
