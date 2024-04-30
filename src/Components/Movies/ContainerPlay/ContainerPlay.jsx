import React from "react";
import {
    ContainerPlayBlock,
    ContainerPlayBlockButton,
    ContainerPlayBlockAction,
} from "./ContainerPlayStyle";
import { icons } from "../../../API/svgFiles";
const ContainerPlay = ({ modalOpen, handleClickModal }) => {
    return (
        <ContainerPlayBlock>
            <ContainerPlayBlockButton onClick={() => handleClickModal()}>
                {icons[10].svg}Play Now
            </ContainerPlayBlockButton>
            <ContainerPlayBlockAction>{icons[0].svg}</ContainerPlayBlockAction>
            <ContainerPlayBlockAction>{icons[13].svg}</ContainerPlayBlockAction>
            <ContainerPlayBlockAction>{icons[12].svg}</ContainerPlayBlockAction>
        </ContainerPlayBlock>
    );
};
export default ContainerPlay;
