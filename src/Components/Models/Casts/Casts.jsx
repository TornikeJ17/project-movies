import React, { useState } from "react";

import { CastsContainer } from "./CastsStyle";
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
            {castData
                ?.slice(startIndex, startIndex + itemsPerPage)
                .map((castItem) => (
                    <div>
                        {console.log(castItem, "safafafa")}
                        <img
                            style={{
                                width: 100,
                                height: 87.5,
                            }}
                            src={baseURL + castItem.profile_path}
                        />
                    </div>
                ))}
            <button onClick={() => handleLeftClick()}>back</button>
            <button onClick={() => handleRightClick()}>next</button>
        </CastsContainer>
    );
};

export default Casts;
