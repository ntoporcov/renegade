import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const useStyles = createUseStyles({
    industryBG:{
        backgroundSize:"cover",
        backgroundBlendMode:"multiply",
        backgroundColor:colors.gray.dark,
        backgroundPosition:"center",
        marginBottom:"300px",
        marginTop:"100px",
        minHeight:"100vh",

        '&:last-of-type':{
            marginBottom:0
        }
    },
    details:{
        backgroundColor:colors.white,
        padding:"50px",
        marginBottom:"100px",
        borderBottomRightRadius:"30px",
        borderBottomLeftRadius:"30px",

        '& .row':{
            paddingTop:"15px"
        }
    },
    logoImage:{
        filter:"grayscale(100%)"
    }
})

const ListItem = (props) => {
    return props.value?<li>{props.value}</li>:null
}

const IndustryDetailRow = (props) => {
    const style = useStyles();
    let ListIndex = 0;

    return (
        <Container fluid className={style.industryBG} style={{
            backgroundImage:"url("+props.bg+")",
        }}>
            <Container>
                <Row>
                    <Col
                        xs={props.col.xs||null}
                        sm={props.col.sm||null}
                        md={props.col.md||null}
                        lg={props.col.lg||null}
                        xl={props.col.xl||null}
                        className={style.details}
                    >
                        <h2 className={"simple"}>
                            <FontAwesomeIcon icon={props.icon} size={"1x"} color={colors.teal}/>
                            &nbsp;&nbsp;
                            {props.title}
                        </h2>
                        <p>{props.paragraph}</p>

                        <Row>
                            <Col xs={12}>
                                <h3 style={{color:colors.teal,fontWeight:"bold"}}>Services</h3>
                            </Col>
                            <Col>
                                <ul>
                                    <ListItem value={props.services[ListIndex]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                    <ListItem value={props.services[ListIndex++]}/>
                                </ul>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <h3 style={{color:colors.teal,fontWeight:"bold"}}>Clients</h3>
                            </Col>
                                {
                                    props.clientList?props.clientList.map((image)=>{
                                        return (
                                            <Col xs={3}>
                                                <img alt={"Client Logo"} src={image} className={"img-fluid "+style.logoImage}/>
                                            </Col>
                                        )
                                    }):null
                                }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default IndustryDetailRow;
