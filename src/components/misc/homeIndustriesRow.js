import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import {HashLink} from 'react-router-hash-link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserHardHat, faLightbulbOn, faAbacus, faPencilRuler} from "@fortawesome/pro-duotone-svg-icons";


const useStyles = createUseStyles({
    industryBox:{
        // borderRadius:10,
        boxShadow:"0 0 1px var(--primaryOffset)",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        overflow:"hidden",
        transition:"all ease-out .2s",
        marginBottom:30,
        width:"calc(20% - 20px)",
        margin:"0 10px",
        padding:"20px",

        '&:hover':{
            boxShadow:"0 0 1px var(--primaryOffset), -7px 7px 0 var(--primary)"
        }
    },
    '@media screen and (max-width:992px)':{
        industryBox:{
            width: "calc(40% - 10px)"
        }
    },
    '@media screen and (max-width:600px)':{
        industryBox:{
            width: "90%"
        }
    },
    industryBoxTitle:{
        fontSize:18,
        textAlign:"center",
    },
    industryBoxParagraph:{
        textAlign:"left",
    },
    industryBackground:{
        paddingTop:"100px",
        paddingBottom:"100px"
    }
})

const IndustryBox = (props) =>{
    const style = useStyles();

    return (
        // <Col xs={12} md={2}>
            <div className={style.industryBox}>
                <FontAwesomeIcon icon={props.icon} color={colors.primary} size={"5x"} className={"mb-3"}/>
                <div className={"d-flex flex-column justify-content-between h-50"}>
                    <h3 className={style.industryBoxTitle}>{props.title}</h3>
                    {/*<p className={style.industryBoxParagraph}>{props.paragraph}</p>*/}
                    <HashLink to={props.href} style={{textAlign:"center"}}>Learn More</HashLink>
                </div>
            </div>
        // </Col>
    )
}

const IndustriesRow = () => {
    const style = useStyles();

    return(
        <Container fluid className={style.industryBackground}>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{textAlign:"center"}}>
                            <span className={"left"}>Our Expertise</span>
                        </h2>
                    </Col>
                </Row>
                <Row className={"mt-5 mb-5 justify-content-center"}>
                    <IndustryBox
                        icon={faAbacus}
                        title={"Accounting & Finance"}
                        href={"/industries#accounting"}
                    />

                    <IndustryBox
                        icon={faUserHardHat}
                        title={"Construction"}
                        href={"/industries#construction"}
                    />

                    <IndustryBox
                        icon={faLightbulbOn}
                        title={"Energy"}
                        href={"/industries#energy"}
                    />

                    <IndustryBox
                        icon={faPencilRuler}
                        title={"Engineering"}
                        href={"/industries#engineering"}
                    />

                </Row>
            </Container>
        </Container>
    )

}

export default IndustriesRow;
