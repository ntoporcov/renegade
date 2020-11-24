import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import heroBG from "../../img/annie-spratt-sggw4-qDD54-unsplash.jpg";
import headshot from "../../img/headshots/test.jpg"

const useStyles = createUseStyles({
    featuredImage:{
        height:"500px"
    },
    headshot:{
        borderRadius:"100%",
        marginBottom:30
    },
    detailBox:{
        backgroundColor:"white",
        padding:"50px",
        boxShadow:"0 4px 6px rgba(0,0,0,.3)",
        borderRadius:"15px",
        marginTop:"-150px",

        '& h2':{
            color:colors.teal
        },

        '& h3':{
            color:colors.darkTeal
        }
    },
    detailWrapper:{
        paddingBottom:"200px"
    }
})

const TeamMemberDetail = (props) => {
    const style = useStyles();

    return(
        <div className={style.detailWrapper}>
            <Row
                fluid
                className={style.featuredImage}
                style={{background:"url("+props.featuredImage+") no-repeat center",backgroundSize: "cover"}}
            />
            <Container>
                <Row className={"justify-content-center"}>
                    <Col lg={10} className={style.detailBox}>
                        <Row>
                            <Col xs={8} lg={3}>
                                <img src={props.headshot} alt={props.name+" headshot"} className={style.headshot+" img-fluid"} />
                            </Col>
                            <Col xs={12} xl={9}>
                                <h2>{props.name}</h2>
                                <h3>{props.position}</h3>
                                <p className={"mb-0"}>{props.description}</p>
                                <Row className={"pt-4"}>
                                    {
                                        props.questions.map((item,index)=>{
                                            return  (
                                                <Col lg={6} key={index} className={"pt-3"}>
                                                    <h3>{item[0]}</h3>
                                                    <p>{item[1]}</p>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const TeamDetails = () => {

    return (
        <Container fluid style={{backgroundColor: colors.gray.barely}}>
            <TeamMemberDetail
                featuredImage={heroBG}
                headshot={headshot}
                name={"John Doe"}
                position={"CEO"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut."}
                questions={[
                    ['What\'s your cover image?','Just the image I used everywhere'],
                    ['You have a common name right?','Hell yeah, really common'],
                    ['What\'s your cover image?','Just the image I used everywhere'],
                    ['You have a common name right?','Hell yeah, really common'],
                ]}
            />
            <TeamMemberDetail
                featuredImage={heroBG}
                headshot={headshot}
                name={"John Doe"}
                position={"CEO"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut."}
                questions={[
                    ['What\'s your cover image?','Just the image I used everywhere'],
                    ['You have a common name right?','Hell yeah, really common'],
                    ['What\'s your cover image?','Just the image I used everywhere'],
                    ['You have a common name right?','Hell yeah, really common'],
                ]}
            />
            <TeamMemberDetail
                featuredImage={heroBG}
                headshot={headshot}
                name={"John Doe"}
                position={"CEO"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut."}
                questions={[
                    ['What\'s your cover image?','Just the image I used everywhere'],
                    ['You have a common name right?','Hell yeah, really common'],
                    ['What\'s your cover image?','Just the image I used everywhere'],
                    ['You have a common name right?','Hell yeah, really common'],
                ]}
            />
        </Container>
    )
}

export default TeamDetails;
