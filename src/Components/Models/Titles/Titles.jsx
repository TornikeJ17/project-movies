import React from "react";
import { TitleContainer } from "./TitlesStyle";

const Titles = ({ children, icons }) => {
    return (
        <TitleContainer>
            {icons}
            {children}
        </TitleContainer>
    );
};

export default Titles;
