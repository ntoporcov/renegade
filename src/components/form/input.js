import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import colors from "../../utils/colors"

const useStyles = createUseStyles({})

const Input = (props) => {
    //const style = useStyles();

    return (
        <label>
            <span>
                {props.label}
            </span>
            <input
                type={props.type}
                placeholder={props.placeholder}
                onChange={(change) => props.updateState(change.target.value)}
            />
        </label>
    )
}

export default Input;
