import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import {Link} from "react-router-dom";

const useStyles = createUseStyles({
    industryBox:{
        borderRadius:10,
        boxShadow:"0px 3px 6px rgba(0,0,0,.2)",
        display:"flex",
        flexDirection:"column",
        overflow:"hidden",
        transition:"all ease-out .2s",
        marginBottom:30,

        '&:hover':{
            boxShadow:"0 5px 8px rgba(0,0,0,.2)"
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
        marginTop:-150,
        background:"linear-gradient(0deg, rgba(255,255,255,1) 85%, rgba(255,255,255,0) 100%);",
        paddingTop:"10vw",
        paddingBottom:"100px"
    }
})

const IndustryBox = (props) =>{
    const style = useStyles();

    return (
        <Col md={6} lg={3}>
            <div className={style.industryBox}>
                <div style={{height:150,backgroundColor:"red"}}/>
                <div className={"d-flex flex-column p-4"}>
                    <h3 className={style.industryBoxTitle}>{props.title}</h3>
                    <p className={style.industryBoxParagraph}>{props.paragraph}</p>
                    <Link to={props.href} style={{textAlign:"right"}}>Learn More</Link>
                </div>
            </div>
        </Col>
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
                            <span className={"left"}>Our Industries</span>
                        </h2>
                    </Col>
                </Row>
                <Row className={"mt-5 mb-5"}>
                    <IndustryBox
                        title={"Accounting & Finance"}
                        paragraph={"Something about services for this industry here and can go about 3 lines. Not too much but something."}
                        href={"/industry#accounting"}
                    />

                    <IndustryBox
                        title={"Construction"}
                        paragraph={"Something about services for this industry here and can go about 3 lines. Not too much but something."}
                        href={"/industry#construction"}
                    />

                    <IndustryBox
                        title={"Energy"}
                        paragraph={"Something about services for this industry here and can go about 3 lines. Not too much but something."}
                        href={"/industry#energy"}
                    />

                    <IndustryBox
                        title={"Engineering"}
                        paragraph={"Something about services for this industry here and can go about 3 lines. Not too much but something."}
                        href={"/industry#engineering"}
                    />
                </Row>
            </Container>
        </Container>
    )

}

export default IndustriesRow;
