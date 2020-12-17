import React, {useRef, useState} from "react";
import {Col} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Alert} from '@material-ui/lab';
import {Snackbar} from "@material-ui/core";

const FormCol = () => {

    const [name, setName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [phone, setPhone] = useState(undefined)
    const [message, setMessage] = useState(undefined)
    const [formSent,setFormSent] = useState(false)
    const [toastOpen,setToastOpen] = useState(false)

    const formData = {name,email,phone:phone || "---",message}

    const submitButton = useRef(null);


    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const submitForm = (params) => {

        for(let input of Object.keys(params)){

            switch (input){
                //look for false conditions

                case 'email':
                    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if(!emailRegex.test(formData[input])){
                        return;
                    }
                    break;
                default:
                    if(!formData[input]){
                        return;
                    }
            }

        }
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setFormSent(true);
                setToastOpen(true)
            })
            .catch(error => alert(error));
    }

    return (
        <Col>
            <form name={"contact"} method={"POST"} onSubmit={(event => event.preventDefault())}>
                <h2 className={"pb-4"}><span>Contact Us</span></h2>
                <TextField
                    type={"text"}
                    variant={"filled"}
                    color={"primary"}
                    label={"Full Name"}
                    name={"name"}
                    fullWidth={true}
                    required={true}
                    disabled={formSent}
                    onChange={(change)=>setName(change.target.value)}
                />
                <TextField
                    type={"email"}
                    variant={"filled"}
                    color={"primary"}
                    label={"Email Address"}
                    name={"email"}
                    fullWidth={true}
                    required={true}
                    disabled={formSent}
                    onChange={(change)=>setEmail(change.target.value)}
                />
                <TextField
                    type={"tel"}
                    variant={"filled"}
                    color={"primary"}
                    label={"Phone Number"}
                    name={"phone"}
                    fullWidth={true}
                    required={true}
                    disabled={formSent}
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
                    required={true}
                    disabled={formSent}
                    onChange={(change)=>setMessage(change.target.value)}
                />
                <Button
                    fullWidth={true}
                    variant={"contained"}
                    color={"primary"}
                    size={"large"}
                    type={"submit"}
                    disabled={formSent}
                    onClick={() => {
                        submitForm(formData);
                    }}
                    ref={submitButton}
                >
                Send Message
                </Button>
            </form>
            <Snackbar
                open={toastOpen}
                children={
                    <Alert
                        color={"orange"}
                        severity={"success"}
                        variant={"filled"}
                        onClose={() => setToastOpen(false)}
                    >
                        Form Submitted!{"\u00A0".repeat(30)}
                    </Alert>}
            />
        </Col>
    )
};

export default FormCol;
