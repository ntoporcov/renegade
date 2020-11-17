import React, {useState} from "react";
import {Col} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormCol = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")


    const formData = {name,email,phone,message}

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
                onChange={(change)=>setPhone(change.target.value)}
            />
            <TextField
                type={"text"}
                multiline={true}
                rows={10}
                variant={"filled"}
                color={"primary"}
                label={"Enter Message"}
                fullWidth={true}
                onChange={(change)=>setMessage(change.target.value)}
            />
            <Button
                fullWidth={true}
                variant={"contained"}
                color={"primary"}
                size={"large"}
                onClick={()=>{
                    console.log(formData)
                }}
            >
                Send Message
            </Button>
        </Col>
    )
}

export default FormCol;
