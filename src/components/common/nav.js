import React from "react";
import {Nav, Container, Navbar} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import renegadeLogo from "../../img/logos/SVG/Logo Full - Gray.svg";
import colors from "../../utils/colors"

const useStyles = createUseStyles({
    navbar:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",

        '& img':{
            width:250,
            height:"auto"
        }
    },
    navlink:{
        paddingRight:"25px !important",
        paddingLeft:"25px !important",
        marginLeft:10,
        borderRadius:3,
        '&:hover':{
            background:colors.teal,
            color:colors.white+"! important",
            boxShadow:"0 3px 5px rgba(0,0,0,.2)"
        }
    }
})



const NavItem = (props) => {
    const style = useStyles()

    return (
        <Nav.Item>
            <Nav.Link className={style.navlink} href={props.href}>{props.text}</Nav.Link>
        </Nav.Item>
    )
}

export const NavBar = () => {
    const style = useStyles()

    return (
        <Container fluid>
                <Navbar expand={"md"} className={style.navbar}>
                    <Navbar.Brand href={"/"}>
                        <img alt={"Renegade Resource Logo featuring a horse's head"} src={renegadeLogo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className={"text-center"}>
                            <NavItem href={"/about"}        text={"Why Renegade"}/>
                            <NavItem href={"/industries"}   text={"Industries"}/>
                            <NavItem href={"/team"}         text={"Team"}/>
                            <NavItem href={"/contact"}      text={"Contact"}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
    )
}
