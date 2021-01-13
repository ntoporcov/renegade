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
        },

        '& li':{
            lineBreak:"auto"
        }
    },
    logoImage:{
        filter:"grayscale(100%)"
    },
    '@media screen and (max-width: 768px)':{
        industryBG:{
          marginBottom:"100px",
        },
        details:{
            padding: "25px",
        }
    }
})

const ListItem = (props) => {
    return props.value?<li>{props.value}</li>:null
}

const IndustryDetailRow = (props) => {
    const style = useStyles();

    return (
        <Container fluid id={props.id} className={style.industryBG} style={{
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
                            <FontAwesomeIcon icon={props.icon} size={"1x"} color={colors.primary}/>
                            &nbsp;&nbsp;
                            {props.title}
                        </h2>
                        <p>{props.paragraph}</p>

                        {props.areas?
                            <Row>
                                <Col xs={12}>
                                    <h3 style={{color:colors.primary,fontWeight:"bold"}}>Areas of Focus</h3>
                                </Col>
                                <Col>
                                    <ul>
                                        {
                                            props.areas.map((value,index) => (
                                                index<props.areas.length/2?
                                                    <ListItem value={value}/>:null
                                            ))
                                        }
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        {
                                            props.areas.map((value,index) => (
                                                index>=props.areas.length/2?
                                                    <ListItem value={value}/>:null
                                            ))
                                        }
                                    </ul>
                                </Col>
                            </Row>
                            :null
                        }

                        {props.searches ?
                            <Row>
                                <Col xs={12}>
                                    <h3 style={{color:colors.primary,fontWeight:"bold"}}>Recent Searches</h3>
                                </Col>
                                <Col>
                                    <ul>
                                        {
                                            props.searches.map((value,index) => (
                                                index<props.searches.length/2?
                                                    <ListItem value={value}/>:null
                                            ))
                                        }
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        {
                                            props.searches.map((value,index) => (
                                                index>=props.searches.length/2?
                                                    <ListItem value={value}/>:null
                                            ))
                                        }
                                    </ul>
                                </Col>
                            </Row>
                            :null
                        }

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default IndustryDetailRow;
