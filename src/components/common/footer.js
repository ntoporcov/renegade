import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import whiteLogo from "../../img/logos/SVG/Logo Full - White.svg"
// import {Link} from "react-router-dom";

const useStyles = createUseStyles({
    footer:{
        backgroundColor:colors.gray.darker,

        '& a':{
            color:'white !important',
        }
    }
})

// const FooterLink = (props) => {
//     return (
//         <Col md={props.colSize || 2}  className={"text-center text-left-md"}>
//             <Link to={props.href}>{props.text}</Link>
//         </Col>
//     )
// }

const Footer = () => {
    const style = useStyles();

    return (
        <Container fluid className={style.footer}>
            <Row className={"pt-3 pb-3 justify-content-end align-items-center"}>
                {/*<Col>*/}
                {/*    <Row className={"justify-content-center justify-content-md-start"}>*/}
                {/*        <FooterLink href={"/about"} center={true} text={"Why Renegade"} colSize={3}/>*/}
                {/*        <FooterLink href={"/industries"}   text={"Industries"}/>*/}
                {/*        <FooterLink href={"/team"}         text={"Team"}/>*/}
                {/*        <FooterLink href={"/contact"}      text={"Contact"}/>*/}
                {/*    </Row>*/}
                {/*</Col>*/}
                <Col xs={6} sm={4} md={3}>
                    <img alt={"Renegade Resources logo"} src={whiteLogo}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
