import React, { useState } from "react";
import {
    SliderContainer,
    SliderButton,
    SliderIndicator,
} from "./SliderHeaderStyle";
import { icons } from "../../../API/svgFiles";
const SliderHeader = ({
    handleLeftClick,
    handleRightClick,
    handleSliderChange,
    activeIndex,
    totalPages,
}) => {
    const renderIndicators = () => {
        const indicators = [];
        for (let i = 0; i < totalPages; i++) {
            indicators.push(<div key={i}></div>);
        }
        return indicators;
    };

    return (
        <>
            <SliderContainer>
                <SliderButton onClick={handleLeftClick}>
                    {icons[3].svg}
                </SliderButton>
                <SliderIndicator activeIndex={activeIndex}>
                    {renderIndicators()}
                </SliderIndicator>
                <SliderButton onClick={handleRightClick}>
                    {icons[2].svg}
                </SliderButton>
            </SliderContainer>
        </>
    );
};

export default SliderHeader;
