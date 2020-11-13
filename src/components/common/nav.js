import React from "react";
import {Nav, Container} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import renegadeLogo from "../../img/logos/SVG/Logo Full - Gray.svg";

const useStyles = createUseStyles({
    navbar:{
        paddingTop:2,
        paddingBottom:2,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
})

export const NavBar = () => {
    const style = useStyles()

    return (
        <Container fluid>
            <Container className={style.navbar}>
                <img alt={"Renegade Resource Logo featuring a horse's head"} src={renegadeLogo}/>
                <Nav className="justify-content-end">
                    <Nav.Item>
                            <Nav.Link href={"/about"}>Why Renegade</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link href={"/industries"}>Industries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link href={"/team"}>Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={"/contact"}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Container>
    )
}
