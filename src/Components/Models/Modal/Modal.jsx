import React from "react";
import { ModalContainer } from "./ModalStyle";
const Modal = ({ children, handleClickModal }) => {
    return (
        <ModalContainer>
            <div onClick={() => handleClickModal()}>back</div>
            {children}
        </ModalContainer>
    );
};

export default Modal;
