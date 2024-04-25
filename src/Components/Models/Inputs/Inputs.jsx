import React from "react";
import { InputBlock, Input, InputLabel } from "./InputsStyle";

const Inputs = ({ id, name, type, label, placeholder }) => {
    return (
        <InputBlock>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <Input type={type} name={name} id={id} placeholder={placeholder} />
        </InputBlock>
    );
};

export default Inputs;
