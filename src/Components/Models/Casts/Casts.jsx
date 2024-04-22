import React, { useState } from "react";

import {
    CastsContainer,
    CastsSubContainer,
    CastsBlock,
    ButtonBlock,
    CastImage,
    CastButton,
    CastImageSVG,
} from "./CastsStyle";
import { icons } from "../../../API/svgFiles";
import Titles from "../Titles/Titles";
const baseURL = "https://image.tmdb.org/t/p/original";

const Casts = ({ castData, CastsTitle }) => {
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
    console.log(castData, "castData");
    return (
        <CastsContainer>
            <CastsSubContainer>
                <Titles
                    children={CastsTitle === "Crew" ? CastsTitle : CastsTitle}
                />
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
                        <div>
                            {console.log(castItem.profile_path, "profilePath")}
                            {castItem.profile_path ? (
                                <CastImage
                                    src={baseURL + castItem.profile_path}
                                />
                            ) : (
                                <CastImageSVG>{icons[11].svg}</CastImageSVG>
                            )}
                            <div>{castItem.name}</div>
                        </div>
                    ))}
            </CastsBlock>
        </CastsContainer>
    );
};

export default Casts;
