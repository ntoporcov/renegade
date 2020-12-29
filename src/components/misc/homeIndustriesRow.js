import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import {HashLink} from 'react-router-hash-link';


const useStyles = createUseStyles({
    industryBox:{
        borderRadius:10,
        boxShadow:"0px 3px 6px rgba(0,0,0,.2)",
        display:"flex",
        flexDirection:"column",
        overflow:"hidden",
        transition:"all ease-out .2s",
        marginBottom:30,
        width:"calc(20% - 20px)",
        margin:"0 10px",

        '&:hover':{
            boxShadow:"0 5px 8px rgba(0,0,0,.2)"
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
        textAlign:"left",
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
                <div style={{height:150,backgroundColor:colors.primary}}/>
                <div className={"d-flex flex-column p-4 justify-content-between h-50"}>
                    <h3 className={style.industryBoxTitle}>{props.title}</h3>
                    {/*<p className={style.industryBoxParagraph}>{props.paragraph}</p>*/}
                    <HashLink to={props.href} style={{textAlign:"right"}}>Learn More</HashLink>
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
                        title={"Accounting & Finance"}
                        href={"/industries#accounting"}
                    />

                    <IndustryBox
                        title={"Construction"}
                        href={"/industries#construction"}
                    />

                    <IndustryBox
                        title={"Energy"}
                        href={"/industries#energy"}
                    />

                    <IndustryBox
                        title={"Engineering"}
                        paragraph={"Something about services for this industry here and can go about 3 lines. Not too much but something."}
                        href={"/industries#engineering"}
                    />

                    <IndustryBox
                        title={"Executive Search"}
                        href={"/industries#executivesearch"}
                    />
                </Row>
            </Container>
        </Container>
    )

}

export default IndustriesRow;
