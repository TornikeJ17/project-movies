import React from "react";
import { icons } from "../../../API/svgFiles";
import { StarBlock } from "./RatingsStyle";

const StarIcon = ({ filled }) => {
    return <StarBlock filled={filled}>{icons[6].svg}</StarBlock>;
};
export default StarIcon;
