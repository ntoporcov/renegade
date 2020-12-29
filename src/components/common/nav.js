import React from "react";
import {Nav, Container, Navbar} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import renegadeLogo from "../../img/logos/SVG/Logo Full - Gray.svg";
import colors from "../../utils/colors"
import {Link} from "react-router-dom";

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
        paddingRight:"15px !important",
        paddingLeft:"15px !important",
        marginLeft:10,
        fontWeight:"700",
        borderRadius:3,
        color:colors.gray.medium+" !important",

        '&:hover':{
            background:colors.primary,
            color:colors.white+"! important",
            boxShadow:"0 3px 5px rgba(0,0,0,.2)"
        }
    }
})



const NavItem = (props) => {
    const style = useStyles()

    return (
        <Link className={"nav-link "+style.navlink} to={props.href}>
            {props.text}
        </Link>
    )
}

export const NavBar = () => {
    const style = useStyles()

    return (
        <Container fluid>
                <Navbar expand={"md"} className={style.navbar}>
                    <Link to={"/"}>
                        <img alt={"Renegade Resource Logo featuring a horse's head"} className={"navbar-brand"} src={renegadeLogo}/>
                    </Link>
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
