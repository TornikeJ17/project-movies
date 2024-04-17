import React from "react";
import {
    DescriptionContainer,
    DescriptionTitle,
    DescriptionText,
} from "./DescriptionStyle";
const Description = ({ descriptionText }) => {
    return (
        <DescriptionContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{descriptionText}</DescriptionText>
        </DescriptionContainer>
    );
};

export default Description;
