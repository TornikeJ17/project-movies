import React from "react";
import { DescriptionContainer, DescriptionText } from "./DescriptionStyle";
import Titles from "../Titles/Titles";
const Description = ({ descriptionText }) => {
    return (
        <DescriptionContainer>
            <Titles children={"Description"} />
            <DescriptionText>{descriptionText}</DescriptionText>
        </DescriptionContainer>
    );
};

export default Description;
