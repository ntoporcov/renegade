import React, {useState} from "react";
import {Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = createUseStyles({

})

const FormCol = () => {
    //const style = useStyles();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, phoneNumber] = useState("")

    const formData = {name,email,phoneNumber}

    return (
        <Col>
            <h2 className={"pb-4"}><span>Contact Us</span></h2>
            <TextField
                type={"text"}
                variant={"filled"}
                color={"primary"}
                label={"Full Name"}
                fullWidth={true}
                onChange={(change)=>setName(change.target.value)}
            />
            <TextField
                type={"email"}
                variant={"filled"}
                color={"primary"}
                label={"Email Address"}
                fullWidth={true}
                onChange={(change)=>setEmail(change.target.value)}
            />
            <TextField
                type={"tel"}
                variant={"filled"}
                color={"primary"}
                label={"Phone Number"}
                fullWidth={true}
                onChange={(change)=>setEmail(change.target.value)}
            />
            <TextField
                type={"text"}
                multiline={true}
                rows={10}
                variant={"filled"}
                color={"primary"}
                label={"Enter Message"}
                fullWidth={true}
                onChange={(change)=>setEmail(change.target.value)}
            />
            <Button
                fullWidth={true}
                variant={"contained"}
                color={"primary"}
                size={"large"}
            >
                Send Message
            </Button>
        </Col>
    )
}

export default FormCol;
