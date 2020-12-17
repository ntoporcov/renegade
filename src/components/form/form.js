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

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const submitForm = (params) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", params })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    }

    return (
        <Col>
            <form name={"contact"} method={"POST"}>
                <h2 className={"pb-4"}><span>Contact Us</span></h2>
                <TextField
                    type={"text"}
                    variant={"filled"}
                    color={"primary"}
                    label={"Full Name"}
                    name={"name"}
                    fullWidth={true}
                    onChange={(change)=>setName(change.target.value)}
                />
                <TextField
                    type={"email"}
                    variant={"filled"}
                    color={"primary"}
                    label={"Email Address"}
                    name={"email"}
                    fullWidth={true}
                    onChange={(change)=>setEmail(change.target.value)}
                />
                <TextField
                    type={"tel"}
                    variant={"filled"}
                    color={"primary"}
                    label={"Phone Number"}
                    name={"phone"}
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
                    name={"message"}
                    fullWidth={true}
                    onChange={(change)=>setMessage(change.target.value)}
                />
                <Button
                    fullWidth={true}
                    variant={"contained"}
                    color={"primary"}
                    size={"large"}
                    type={"submit"}
                    onClick={(event) => {
                        event.preventDefault();
                        submitForm(formData);
                    }}
                >
                Send Message
                </Button>
            </form>
        </Col>
    )
}

export default FormCol;
