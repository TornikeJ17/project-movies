import React, { useState } from "react";
import {
    SubContainer,
    NavContainer,
    ImageContainer,
    ImageBlock,
    NavbarLogo,
    NavbarMenu,
    NavbarSearch,
    MenuItem,
} from "./NavbarStyle";
import { Link } from "react-router-dom";

import { images, menuItems, navbar } from "../../../API/svgFiles";
const Navbar = ({ isActive, setIsActive }) => {
    const handleClick = (id) => {
        setIsActive(id);
    };
    return (
        <>
            <SubContainer>
                {images.map(
                    (item, index) =>
                        isActive === "home" && (
                            <ImageContainer key={index}>
                                {item.name.map((img, index) => (
                                    <ImageBlock
                                        key={index}
                                        images={img.URL}
                                        s
                                    ></ImageBlock>
                                ))}
                            </ImageContainer>
                        )
                )}
                {isActive === "home" && (
                    <svg
                        width="470"
                        height="470"
                        viewBox="0 0 470 470"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_b_90_250)">
                            <path
                                d="M389.97 188.658C386.681 85.6396 303.206 2.505 199.84 0C197.178 0 194.985 2.03531 194.985 4.69687L194.828 73.8974C194.828 77.3418 192.166 80.0033 188.72 80.1599C85.6681 83.2911 2.50583 166.895 0 270.227C0 272.888 2.03599 275.08 4.69843 275.08L73.7654 275.236C77.2109 275.236 79.8734 277.898 80.03 281.342C83.3189 384.36 166.951 467.495 270.16 470C272.822 470 275.015 467.965 275.015 465.303L275.172 396.103C275.172 392.658 277.834 389.997 281.28 389.84C384.332 386.552 467.494 302.948 470 199.773C470 197.112 467.964 194.92 465.302 194.92L396.235 194.763C392.789 194.763 390.127 192.102 389.97 188.658ZM268.281 389.37C209.707 385.926 162.722 338.331 160.53 279.464C160.373 276.959 158.337 274.923 155.831 274.923L86.921 274.767C83.3189 274.767 80.4998 271.792 80.6564 268.191C84.102 209.637 131.713 162.668 190.6 160.476C193.106 160.32 195.142 158.284 195.142 155.779L195.298 86.7355C195.298 83.1346 198.274 80.3165 201.876 80.473C260.45 83.9174 307.434 131.512 309.627 190.38C309.783 192.885 311.819 194.92 314.325 194.92L383.236 195.077C386.838 195.077 389.657 198.051 389.5 201.652C386.055 261.772 336.095 309.524 275.172 309.524L275.015 383.108C274.858 386.709 271.883 389.527 268.281 389.37Z"
                                fill="url(#paint0_linear_90_250)"
                                fill-opacity="0.3"
                            />
                            <path
                                d="M389.471 188.68L389.47 188.674C386.19 85.9222 302.931 3.00174 199.834 0.500004C197.429 0.503001 195.485 2.33472 195.485 4.69687V4.698L195.328 73.8974L389.471 188.68ZM389.471 188.68C389.639 192.379 392.509 195.263 396.233 195.263L389.471 188.68ZM188.743 80.6594L188.736 80.6597C85.951 83.7828 3.00269 167.169 0.500008 270.232C0.503009 272.636 2.33509 274.58 4.69843 274.58H4.69957L73.7654 274.736L188.743 80.6594ZM188.743 80.6594C192.442 80.4913 195.328 77.6225 195.328 73.8985L188.743 80.6594ZM80.5295 281.32L80.5298 281.326C83.8101 384.077 167.225 466.998 270.165 469.5C272.571 469.497 274.515 467.665 274.515 465.303V465.302L274.672 396.103L80.5295 281.32ZM80.5295 281.32C80.3613 277.621 77.4914 274.737 73.7665 274.736L80.5295 281.32ZM281.257 389.341L281.264 389.34C384.049 386.061 466.997 302.674 469.5 199.768C469.497 197.364 467.665 195.42 465.302 195.42H465.3L396.235 195.263L281.257 389.341ZM281.257 389.341C277.558 389.509 274.672 392.377 274.672 396.101L281.257 389.341ZM268.259 389.87L268.251 389.87C209.424 386.41 162.236 338.612 160.03 279.489C159.886 277.233 158.054 275.423 155.831 275.423H155.83L86.921 275.267L268.259 389.87ZM268.259 389.87C272.146 390.039 275.346 386.997 275.515 383.13L275.515 383.119L275.515 383.109L275.671 310.023C336.634 309.763 386.548 261.9 389.999 201.681L390 201.674M268.259 389.87L390 201.674M80.1569 268.169L80.1572 268.162C83.6177 209.354 131.432 162.182 190.575 159.977C192.832 159.833 194.642 158.001 194.642 155.779V155.778L194.798 86.7355L80.1569 268.169ZM80.1569 268.169C79.9881 272.051 83.0304 275.266 86.9199 275.267L80.1569 268.169ZM201.898 79.9735L201.905 79.9738C260.733 83.4331 307.921 131.231 310.126 190.355C310.271 192.611 312.103 194.42 314.325 194.42H314.326L383.236 194.577L201.898 79.9735ZM201.898 79.9735C198.015 79.8047 194.799 82.8458 194.798 86.7344L201.898 79.9735ZM390 201.674C390.168 197.792 387.126 194.577 383.237 194.577L390 201.674Z"
                                stroke="url(#paint1_linear_90_250)"
                                stroke-opacity="0.5"
                            />
                        </g>
                        <g filter="url(#filter1_b_90_250)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M192.938 193.348C192.938 183.875 203.094 177.869 211.395 182.435L288.054 224.598C296.658 229.33 296.658 241.692 288.054 246.424L211.395 288.587C203.094 293.152 192.938 287.147 192.938 277.674V193.348Z"
                                fill="url(#paint2_linear_90_250)"
                                fill-opacity="0.3"
                            />
                            <path
                                d="M193.438 193.348C193.438 184.255 203.186 178.491 211.154 182.873L287.813 225.036C296.072 229.578 296.072 241.444 287.813 245.986L211.154 288.149C203.186 292.531 193.438 286.766 193.438 277.674V193.348Z"
                                stroke="url(#paint3_linear_90_250)"
                                stroke-opacity="0.5"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_b_90_250"
                                x="-12"
                                y="-12"
                                width="494"
                                height="494"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feGaussianBlur
                                    in="BackgroundImageFix"
                                    stdDeviation="6"
                                />
                                <feComposite
                                    in2="SourceAlpha"
                                    operator="in"
                                    result="effect1_backgroundBlur_90_250"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_90_250"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter1_b_90_250"
                                x="180.938"
                                y="168.875"
                                width="125.569"
                                height="133.271"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feGaussianBlur
                                    in="BackgroundImageFix"
                                    stdDeviation="6"
                                />
                                <feComposite
                                    in2="SourceAlpha"
                                    operator="in"
                                    result="effect1_backgroundBlur_90_250"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_90_250"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_90_250"
                                x1="235"
                                y1="0"
                                x2="235"
                                y2="470"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0.5" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_90_250"
                                x1="235"
                                y1="0"
                                x2="235"
                                y2="470"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_90_250"
                                x1="243.722"
                                y1="180.875"
                                x2="243.722"
                                y2="290.146"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.147231" stop-color="white" />
                                <stop
                                    offset="0.42761"
                                    stop-color="white"
                                    stop-opacity="0.5"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#1600FD"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_90_250"
                                x1="243.722"
                                y1="180.875"
                                x2="243.722"
                                y2="290.146"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                )}
            </SubContainer>
            <NavContainer>
                <NavbarLogo>{navbar[0].svg}</NavbarLogo>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <Link to={item.url} key={index}>
                            <MenuItem
                                key={item.id}
                                isActive={item.id === isActive}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.label}
                            </MenuItem>
                        </Link>
                    ))}
                </NavbarMenu>
                <NavbarSearch>
                    {/* <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1.5"
                            y="1.5"
                            width="51"
                            height="51"
                            rx="7.5"
                            fill="#1A1A1A"
                        />
                        <rect
                            x="1.5"
                            y="1.5"
                            width="51"
                            height="51"
                            rx="7.5"
                            stroke="#262626"
                            strokeWidth="3"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 21.75C18 21.3358 18.3358 21 18.75 21H35.25C35.6642 21 36 21.3358 36 21.75C36 22.1642 35.6642 22.5 35.25 22.5H18.75C18.3358 22.5 18 22.1642 18 21.75ZM18 27C18 26.5858 18.3358 26.25 18.75 26.25H35.25C35.6642 26.25 36 26.5858 36 27C36 27.4142 35.6642 27.75 35.25 27.75H18.75C18.3358 27.75 18 27.4142 18 27ZM26.25 32.25C26.25 31.8358 26.5858 31.5 27 31.5H35.25C35.6642 31.5 36 31.8358 36 32.25C36 32.6642 35.6642 33 35.25 33H27C26.5858 33 26.25 32.6642 26.25 32.25Z"
                            fill="white"
                        />
                    </svg> */}
                    <div>{navbar[1].svg}</div>
                    <div>{navbar[2].svg}</div>
                </NavbarSearch>
            </NavContainer>
        </>
    );
};

export default Navbar;
