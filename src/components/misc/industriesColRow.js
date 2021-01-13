import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import colors from "../../utils/colors"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserHardHat, faWindTurbine, faAbacus, faPencilRuler} from "@fortawesome/pro-duotone-svg-icons";


const IndustryCol = (props) => {
    return (
        <Col xs={10} md={3}>
            <FontAwesomeIcon icon={props.icon} color={colors.primary} size={"5x"} className={"mb-3"}/>
            <h3 style={{color: colors.primary}}>{props.title}</h3>
            <p>{props.paragraph}</p>
        </Col>
    );
}

const IndustriesColumns = () => {

    return (
        <Container>
            <Row className={"pb-5 pt-5 text-center justify-content-center justify-content-md-start"}>
                <IndustryCol
                    icon={faUserHardHat}
                    title={"Construction"}
                    paragraph={"We're the best working with this industry because we are really cool and we are nice"}
                />
                <IndustryCol
                    icon={faWindTurbine}
                    title={"Energy"}
                    paragraph={"We're the best working with this industry because we are really cool and we are nice"}
                />
                <IndustryCol
                    icon={faAbacus}
                    title={"Accounting & Finance"}
                    paragraph={"We're the best working with this industry because we are really cool and we are nice"}
                />
                <IndustryCol
                    icon={faPencilRuler}
                    title={"Engineering"}
                    paragraph={"We're the best working with this industry because we are really cool and we are nice"}
                />
            </Row>
        </Container>
    )
}

export default IndustriesColumns;
