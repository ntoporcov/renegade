import React from "react";
import SmallHero from "../components/heroes/smallHero";
import IndustriesColumns from "../components/misc/industriesColRow";
import IndustryDetailRow from "../components/misc/IndustryDetailRow";
import energyImage from "../img/gas-863199_1280.jpg";
import constructionImage from "../img/james-sullivan-ESZRBtkQ_f8-unsplash.jpg"
import ContactCTA from "../components/cta/ContactCTA";
import {faUserHardHat, faLightbulbOn, faAbacus, faPencilRuler} from "@fortawesome/pro-duotone-svg-icons";
import bgImage from "../img/science-in-hd-pAzSrQF3XUQ-unsplash-pichi.jpg"
import engineeringImage from "../img/spacex-IuE715vJo2I-unsplash-pichi.jpg"
import accountingImage from "../img/sean-pollock-PhYq704ffdA-unsplash-pichi.jpg"


const Industries = () => {
    //const style = useStyles();

    return (
        <>
            <div>
                <SmallHero title={"Our Industries"} image={bgImage}/>
                <IndustriesColumns/>
                <IndustryDetailRow
                    id={"construction"}
                    bg={constructionImage}
                    icon={faUserHardHat}
                    shadowDirection={"left"}
                    col={{
                        xl:{span:7,offset:0},
                        lg:{span:8,offset:0},
                        md:{span:12,offset:0}
                    }}
                    title={"Construction"}
                    paragraph={"Renegade Resources’ construction division partners with General Contractors, Construction Managers, Developers, and Owners Reps.  Our team’s construction expertise, compounded with our recruiting experience, delivers our clients unparalleled talent in the market."}
                    areas={[
                        "Healthcare",
                        "Senior Living",
                        "Commercial",
                        "Office / Corporate",
                        "Hospitality",
                        "Multi-Family",
                        "Mixed-Use",
                        "K-12 Education",
                        "Higher Education",
                        "Life Sciences",
                        "Industrial",
                        "Data Centers",
                        "Manufacturing / Warehouse / Distribution",
                        "Sports and Entertainment",
                        "Tenant Improvements",
                        "Retail / Restaurant / Banking",
                        "Federal & Military",
                        "Infrastructure"
                    ]}
                    searches={[
                        "General Superintendents",
                        "Superintendents / Assistant Superintendents",
                        "Project Executives",
                        "Project Managers/Assistant Project Managers",
                        "Project Engineers / Field Engineers",
                        "Vice Presidents",
                        "Estimators",
                        "Chief Estimators",
                        "Preconstruction Managers",
                        "Safety managers",
                        "Schedulers",
                        "Project Admin",
                        "Project Coordinator"
                    ]}
                />
                <IndustryDetailRow
                    id={"energy"}
                    bg={energyImage}
                    icon={faLightbulbOn}
                    col={{
                        xl:{span:8,offset:4},
                        lg:{span:8,offset:3},
                        md:{span:12,offset:0}
                    }}
                    title={"Exploration & Production"}
                    paragraph={"The Renegade Resources’ team are specialist in Exploration & Production and partner with upstream companies in every major play and onshore basin across the country. We have a core focus in executive and non-executive searches for small to mid-size E&P operators in the U.S. and Canada. Additionally, we assist startups and private equity backed energy firms with early-stage growth. Our team has a passion for the oil industry and have built lasting relationships over the last decade."}
                    areas={[
                        "Unconventional",
                        "Conventional"
                    ]}
                    searches={[
                        "C-Suite",
                        "Vice President",
                        "Director of Supply Chain",
                        "Communications Director",
                        "Asset Manager",
                        "Exploration Manager",
                        "Drilling Engineer",
                        "Production Engineer",
                        "Reservoir Engineer",
                        "Completions Engineer",
                        "Facilities Engineer",
                        "Engineering Techs",
                        "Geologists",
                        "Geoscientists",
                        "Surface Landman",
                        "Minerals Landman",
                        "Land Manager",
                        "Land Analyst / Techs"
                    ]}
                />
                <IndustryDetailRow
                    id={"accounting"}
                    bg={accountingImage}
                    icon={faAbacus}
                    col={{
                        md:{span:10,offset:1},
                    }}
                    shadowDirection={"left"}
                    title={"Accounting"}
                    paragraph={"Renegade Resources’ Accounting & Finance Division partners with top Banking & Commercial Finance Institutions, Consumer, Family Office, Healthcare, Private Equity, Retail & Hospitality, and Wealth Management Firms. With backgrounds in the finance industry, Renegade’s Executives and Recruiters bring real-world applications to our crafted approach."}
                    areas={[
                        "Executive Leadership",
                        "Finance & Accounting",
                        "Financial Services"
                    ]}
                    searches={[
                        "Accountant",
                        "Auditor",
                        "Budget Analyst",
                        "Controller",
                        "Credit Analyst",
                        "Executive Leadership",
                        "Financial Analyst",
                        "Financial Manager",
                        "Management Consultant",
                        "Personal Financial Advisor",
                        "Tax Accountant"
                    ]}
                />
                <IndustryDetailRow
                    id={"engineering"}
                    bg={engineeringImage}
                    icon={faPencilRuler}
                    col={{
                        sm:{span:10,offset:0},
                        md:{span:8,offset:0},
                    }}
                    title={"Engineering"}
                    paragraph={"Renegade Resources’ Engineering Division partners with leading engineering & design firms that focus on mechanical and electrical manufacturing. With engineering being one of our most dynamic fields, Renegade harnesses years of technical acumen, augmented with acute attention to detail. As a result, we offer our clients a competitive edge within an everchanging industry."}
                    areas={[
                        "Industrial",
                        "Manufacturing",
                        "Supply Chain"
                    ]}
                    searches={[
                        "Mechanical Engineer",
                        "Electrical Engineer",
                        "Automation Engineer",
                        "Design Engineer",
                        "Staff Manufacturing Engineer",
                        "Casting Engineer",
                        "Process Engineer",
                        "Product Development Engineer",
                        "Operations Manager",
                        "Service Technician",
                        "Quality Assurance Manager",
                        "Production Manager",
                        "Procurement Specialist"
                    ]}
                />
            </div>
            <ContactCTA/>
        </>
    )
}

export default Industries;
