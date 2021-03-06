import React, {useEffect, useState} from 'react';
import {Nav, Container, Navbar} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import renegadeLogo from "../../img/logos/SVG/Logo Full - Gray.svg";
import colors from "../../utils/colors"
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

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
    const routerLocation = useLocation();
    const [navExpanded, setNavExpanded] = useState(false)

    useEffect(() => {
        setNavExpanded(false)
    }, [routerLocation]);

    return (
        <Container fluid>
                <Navbar expand={"md"} className={style.navbar} expanded={navExpanded}>
                    <Link to={"/"}>
                        <img alt={"Renegade Resource Logo featuring a horse's head"} className={"navbar-brand"} src={renegadeLogo}/>
                    </Link>
                    <Navbar.Toggle onClick={()=>setNavExpanded(!navExpanded)}/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className={"text-center"}>
                            <NavItem href={"/about"}        text={"Why Renegade"}/>
                            <NavItem href={"/industries"}   text={"Industries"}/>
                            <NavItem href={"/team"}         text={"Team"}/>
                            <NavItem href={"/contact"}      text={"Contact"}/>
                            <a className={"externalLink"} href={"https://www.linkedin.com/company/renegade-resources-inc/"} target={"_blank"} rel={"noreferrer"}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
    )
}
