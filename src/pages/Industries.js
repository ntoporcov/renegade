import React from "react";
import SmallHero from "../components/heroes/smallHero";
import IndustriesColumns from "../components/misc/industriesColRow";
import IndustryDetailRow from "../components/misc/IndustryDetailRow";
import imageBG from "../img/annie-spratt-sggw4-qDD54-unsplash.jpg"
import {faIcons} from "@fortawesome/pro-duotone-svg-icons/faIcons";
import clientImage from "../img/applelogo.jpg"
import ContactCTA from "../components/cta/ContactCTA";

const Industries = () => {
    //const style = useStyles();

    return (
        <>
            <div>
                <SmallHero title={"Our Industries"}/>
                <IndustriesColumns/>
                <IndustryDetailRow
                    bg={imageBG}
                    icon={faIcons}
                    col={{
                        md:{span:7,offset:0},
                    }}
                    title={"Accounting & Finance"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut. Ac orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut lectus. "}
                    services={["Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here"]}
                    clientList={[clientImage,clientImage]}
                />
                <IndustryDetailRow
                    bg={imageBG}
                    icon={faIcons}
                    col={{
                        md:{span:7,offset:4},
                    }}
                    title={"Construction"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut. Ac orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut lectus. "}
                    services={["Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here"]}
                    clientList={[clientImage,clientImage]}
                />
                <IndustryDetailRow
                    bg={imageBG}
                    icon={faIcons}
                    col={{
                        md:{span:7,offset:1},
                    }}
                    title={"Energy"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut. Ac orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut lectus. "}
                    services={["Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here"]}
                    clientList={[clientImage,clientImage]}
                />
                <IndustryDetailRow
                    bg={imageBG}
                    icon={faIcons}
                    col={{
                        md:{span:7,offset:3},
                    }}
                    title={"Engineering"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dui nunc mattis enim ut. Ac orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut lectus. "}
                    services={["Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here","Service Here"]}
                    clientList={[clientImage,clientImage]}
                />
            </div>
            <ContactCTA/>
        </>
    )
}

export default Industries;
