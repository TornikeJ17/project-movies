import React from "react";
import {
    ContainerPlayBlock,
    ContainerPlayBlockButton,
    ContainerPlayBlockAction,
} from "./ContainerPlayStyle";
import { icons } from "../../../API/svgFiles";
const ContainerPlay = () => {
    return (
        <ContainerPlayBlock>
            <ContainerPlayBlockButton>
                {icons[10].svg}Play Now
            </ContainerPlayBlockButton>
            <ContainerPlayBlockAction>{icons[0].svg}</ContainerPlayBlockAction>
            <ContainerPlayBlockAction>{icons[13].svg}</ContainerPlayBlockAction>
            <ContainerPlayBlockAction>{icons[12].svg}</ContainerPlayBlockAction>
        </ContainerPlayBlock>
    );
};
export default ContainerPlay;
