import React, { useState } from "react";
import {
    SliderContainer,
    SliderButton,
    SliderIndicator,
    SliderRangeInput,
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
            {/* <SliderRangeInput
                min="1"
                max={totalPages}
                value={activeIndex + 1}
                onChange={handleSliderChange}
                totalPages={totalPages} // Pass the totalPages as a prop
                activeIndex={activeIndex} // And the activeIndex for the styled component
            /> */}
        </>
    );
};

export default SliderHeader;
