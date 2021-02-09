import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"
import coltonFeatured from "../../img/james-obernesser-fMHm-ejtF0E-unsplash-pichi.jpg"
import coltonHeadshot from "../../img/headshots/small/Renegade-102-square.jpg"
import willFeatured from "../../img/stephen-momot-UivGzIDhVyw-unsplash-pichi.jpg"
import willHeadshot from "../../img/headshots/small/Renegade-108-square.jpg"
import claytonHeadshot from "../../img/headshots/small/Renegade-106-square.jpg"
import claytonFeatured from "../../img/allan-nygren--xvKQuNtOhI-unsplash-pichi.jpg"

const useStyles = createUseStyles({
    featuredImage:{
        height:"500px",
        backgroundSize:"cover !important"
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
            color:colors.primary
        },

        '& h3':{
            color:colors.primaryDark
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
                className={style.featuredImage}
                style={{background:"url("+props.featuredImage+") no-repeat center"}}
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
                                {props.description}
                                <Row className={"pt-4"}>
                                    {
                                        props.questions?.map((item,index)=>{
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
                featuredImage={coltonFeatured}
                headshot={coltonHeadshot}
                name={"Colton Clark"}
                position={"President & Managing Partner"}
                description={
                    <p>
                        As President and Managing Partner of Renegade Resources, Colton Clark oversees Business Development, Client Relations, Recruiting, Operations, and Finance.<br/><br/>
                        Colton is a relationship-based executive with a passion for building, leading, and growing high-performance teams. He is renowned for fostering a culture of trust and accountability with his colleagues. Colton partners with his clients closely to turn around divisions that have critical talent gaps. His clients depend on him to help establish and recruit strategic new direction for their companies.<br/><br/>
                        Colton is originally from Chattanooga, Tennessee and made the move to Florida shortly after high school. From there, Colton acquired two bachelor’s degrees from Florida State University, in Finance and Real Estate. Thereafter, Colton worked with a recruitment firm ranked among the top firms by Forbes. It was in this position that Colton cultivated his own model for a more personable experience in the headhunting industry.
                    </p>
                }
            />
            <TeamMemberDetail
                featuredImage={willFeatured}
                headshot={willHeadshot}
                name={"Will Sheaf"}
                position={"VP & Managing Partner"}
                description={
                    <p>
                        As Vice President and Managing Partner at Renegade Resources, Will Sheaf brings an accomplished headhunting background in the construction, energy, engineering, and finance.<br/><br/>
                        Will has overseen the exponential growth in all divisions of his expertise. This makes him a highly coveted asset to the Renegade team and its premier clients.<br/><br/>
                        After receiving his bachelor’s degree in social sciences from Florida State University, Will joined a national staffing and services company before moving into the executive search space. After experiencing rapid success with a recruiting outfit in Jacksonville, FL, Renegade Resources became the product of a tailored approach to executive placements.
                    </p>
                }
            />
            <TeamMemberDetail
                featuredImage={claytonFeatured}
                headshot={claytonHeadshot}
                name={"Clayton LastName"}
                position={"Sr. Executive Recruiter"}
                description={
                    <div>
                        As Sr. Executive Recruiter at Renegade Resources, Clayton spearheads all recruiting efforts in accounting and finance, construction, energy, engineering, and executive search. In his role, he sources leading talent for a wide range of employers, working closely with candidates to assist them in finding their next dream job.<br/><br/>
                        Clayton enjoys helping companies find top tier talent they need to be successful and is passionate about building long-term relationships with his candidates ensuring they find their position of significance.<br/><br/>
                        Prior to Renegade Resources, Clayton received his bachelor’s degree in political science from Florida State University. Shortly after college, Clayton joined one of the top national staffing agencies where he quickly became one of their top recruiters, making the Presidents Club multiple years in a row. Clayton also spent 2 years working for one of the largest financial service firms in the country, helping clients with their retirement planning.<br/><br/>
                        In his spare time, Clayton enjoys spending time with his wife, Kelly, and yellow Labrador, Miller, golfing or watching the Seminoles.
                    </div>
                }
            />
        </Container>
    )
};

export default TeamDetails;
