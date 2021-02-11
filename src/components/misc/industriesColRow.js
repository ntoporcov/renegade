import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import colors from "../../utils/colors"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserHardHat, faLightbulbOn, faAbacus, faPencilRuler} from "@fortawesome/pro-duotone-svg-icons";


const IndustryCol = (props) => {
    return (
        <Col xs={10} md={3} className={"scrollButton"}
             onClick={()=>{
               document.getElementById(props.scrollTo).scrollIntoView({behavior:"smooth"})
             }}
        >
            <FontAwesomeIcon icon={props.icon} color={colors.primary} size={"5x"} className={"mb-3"}/>
            <h3 style={{color: colors.primary}}>{props.title}</h3>
            <p>{props.paragraph}</p>
        </Col>
    );
}

const IndustriesColumns = () => {

    return (
        <Container>
          <Row className={"pt-5 text-center justify-content-center justify-content-md-start"}>
                <IndustryCol
                    icon={faUserHardHat}
                    title={"Construction"}
                    scrollTo={"construction"}
                />
                <IndustryCol
                    icon={faLightbulbOn}
                    title={"Energy"}
                    scrollTo={"energy"}
                />
                <IndustryCol
                    icon={faAbacus}
                    title={"Accounting & Finance"}
                    scrollTo={"accounting"}
                />
                <IndustryCol
                    icon={faPencilRuler}
                    title={"Engineering"}
                    scrollTo={"engineering"}
                />
            </Row>
        </Container>
    )
}

export default IndustriesColumns;
