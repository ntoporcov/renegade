import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import heroBG from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg"

const useStyles = createUseStyles({
    heroBG:{
        background:colors.gray.dark+" url("+heroBG+") no-repeat center",
        backgroundSize:"cover",
        backgroundBlendMode:"multiply"
    }
})

const SmallHero = (props) => {
    const style = useStyles();

    return (
        <Container fluid className={style.heroBG+" pb-5 pt-5"}>
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
