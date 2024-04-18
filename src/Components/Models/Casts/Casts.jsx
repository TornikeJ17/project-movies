import React, { useState } from "react";

import {
    CastsContainer,
    CastsSubContainer,
    CastsBlock,
    ButtonBlock,
    CastImage,
    CastButton,
} from "./CastsStyle";
import { icons } from "../../../API/svgFiles";
import Titles from "../Titles/Titles";
const baseURL = "https://image.tmdb.org/t/p/original";

const Casts = ({ castData }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 8;

    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < castData?.length - itemsPerPage) {
            setStartIndex(startIndex + itemsPerPage);
            setActiveIndex(activeIndex + 1);
        }
    };
    return (
        <CastsContainer>
            <CastsSubContainer>
                <Titles children={"Cast"} />
                <ButtonBlock>
                    <CastButton onClick={() => handleLeftClick()}>
                        {icons[3].svg}
                    </CastButton>
                    <CastButton onClick={() => handleRightClick()}>
                        {icons[2].svg}
                    </CastButton>
                </ButtonBlock>
            </CastsSubContainer>
            <CastsBlock>
                {castData
                    ?.slice(startIndex, startIndex + itemsPerPage)
                    .map((castItem) => (
                        <CastImage src={baseURL + castItem.profile_path} />
                    ))}
            </CastsBlock>
        </CastsContainer>
    );
};

export default Casts;
