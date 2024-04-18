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
    HamburgerMenu,
} from "./NavbarStyle";
import { NavLink } from "react-router-dom";

import { images, menuItems, navbar } from "../../../API/svgFiles";
const Navbar = ({ isActive, setIsActive }) => {
    const handleClick = (id) => {
        setIsActive(id);
        console.log(id, "active Index");
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
                {/* {isActive === "home" && (
                    <svg
                        width="472"
                        height="472"
                        viewBox="0 0 472 472"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_b_1_2)">
                            <path
                                d="M390.97 189.658C387.681 86.6396 304.206 3.505 200.84 1C198.178 1 195.985 3.03531 195.985 5.69687L195.828 74.8974C195.828 78.3418 193.166 81.0033 189.72 81.1599C86.6681 84.2911 3.50583 167.895 1 271.227C1 273.888 3.03599 276.08 5.69843 276.08L74.7654 276.236C78.2109 276.236 80.8734 278.898 81.03 282.342C84.3189 385.36 167.951 468.495 271.16 471C273.822 471 276.015 468.965 276.015 466.303L276.172 397.103C276.172 393.658 278.834 390.997 282.28 390.84C385.332 387.552 468.494 303.948 471 200.773C471 198.112 468.964 195.92 466.302 195.92L397.235 195.763C393.789 195.763 391.127 193.102 390.97 189.658ZM269.281 390.37C210.707 386.926 163.722 339.331 161.53 280.464C161.373 277.959 159.337 275.923 156.831 275.923L87.921 275.767C84.3189 275.767 81.4998 272.792 81.6564 269.191C85.102 210.637 132.713 163.668 191.6 161.476C194.106 161.32 196.142 159.284 196.142 156.779L196.298 87.7355C196.298 84.1346 199.274 81.3165 202.876 81.473C261.45 84.9174 308.434 132.512 310.627 191.38C310.783 193.885 312.819 195.92 315.325 195.92L384.236 196.077C387.838 196.077 390.657 199.051 390.5 202.652C387.055 262.772 337.095 310.524 276.172 310.524L276.015 384.108C275.858 387.709 272.883 390.527 269.281 390.37Z"
                                fill="url(#paint0_linear_1_2)"
                                fill-opacity="0.3"
                            />
                            <path
                                d="M200.852 0.5V0.500147C304.482 3.01156 388.171 86.3576 391.47 189.639C391.617 192.827 394.07 195.263 397.235 195.263H397.236L466.302 195.42L200.852 0.5ZM200.852 0.5H200.84M200.852 0.5H200.84M200.84 0.5C197.924 0.5 195.486 2.73727 195.485 5.69574L200.84 0.5ZM195.328 74.8974V74.8963L195.485 5.69687L195.328 74.8974ZM195.328 74.8974C195.328 78.0603 192.891 80.5133 189.702 80.6602C86.3855 83.8014 3.01238 167.619 0.500147 271.214H0.5M195.328 74.8974L0.5 271.214M0.5 271.214V271.227M0.5 271.214V271.227M0.5 271.227C0.5 274.142 2.73825 276.579 5.6973 276.58L0.5 271.227ZM74.7654 276.736H74.7643L5.69843 276.58L74.7654 276.736ZM74.7654 276.736C77.93 276.736 80.3838 279.173 80.5304 282.362C83.8296 385.643 167.675 468.988 271.148 471.5H271.16M74.7654 276.736L271.16 471.5M271.16 471.5C274.076 471.5 276.514 469.263 276.515 466.304L271.16 471.5ZM276.672 397.103V397.104L276.515 466.303L276.672 397.103ZM276.672 397.103C276.672 393.939 279.11 391.486 282.3 391.34M276.672 397.103L471.5 200.773M471.5 200.773V200.786C468.988 304.224 385.615 388.041 282.3 391.34M471.5 200.773C471.5 197.858 469.262 195.421 466.303 195.42L471.5 200.773ZM282.3 391.34C282.299 391.34 282.297 391.34 282.296 391.34L282.28 390.841L282.302 391.34C282.302 391.34 282.301 391.34 282.3 391.34ZM162.029 280.432L162.03 280.445C164.212 339.052 210.989 386.44 269.306 389.871C272.618 390.013 275.365 387.425 275.515 384.096C275.515 384.093 275.515 384.089 275.515 384.086L275.672 310.523L275.673 310.024H276.172C336.827 310.024 386.569 262.482 390.001 202.626C390.143 199.309 387.548 196.577 384.236 196.577H384.234L315.325 196.42L162.029 280.432ZM162.029 280.432C161.857 277.682 159.619 275.424 156.833 275.423L162.029 280.432ZM87.921 275.267H87.9222L156.831 275.423L87.921 275.267ZM87.921 275.267C84.608 275.267 82.0136 272.535 82.1558 269.217C85.5882 210.92 132.992 164.158 191.618 161.976L191.631 161.975M87.921 275.267L191.631 161.975M191.631 161.975C194.382 161.803 196.641 159.567 196.642 156.781L191.631 161.975ZM196.798 87.7355V87.7366L196.642 156.779L196.798 87.7355ZM196.798 87.7355C196.798 84.424 199.531 81.8302 202.85 81.9724C261.167 85.4036 307.944 132.791 310.127 191.398L310.128 191.411M196.798 87.7355L310.128 191.411M310.128 191.411C310.3 194.161 312.537 196.419 315.324 196.42L310.128 191.411Z"
                                stroke="url(#paint1_linear_1_2)"
                                stroke-opacity="0.5"
                            />
                        </g>
                        <g filter="url(#filter1_b_1_2)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M193.938 194.348C193.938 184.875 204.094 178.869 212.395 183.435L289.054 225.598C297.658 230.329 297.658 242.692 289.054 247.424L212.395 289.587C204.094 294.152 193.938 288.147 193.938 278.673V194.348Z"
                                fill="url(#paint2_linear_1_2)"
                                fill-opacity="0.3"
                            />
                            <path
                                d="M194.438 194.348C194.438 185.255 204.186 179.491 212.154 183.873L288.813 226.036C297.072 230.578 297.072 242.444 288.813 246.986L212.154 289.149C204.186 293.531 194.438 287.766 194.438 278.673V194.348Z"
                                stroke="url(#paint3_linear_1_2)"
                                stroke-opacity="0.5"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_b_1_2"
                                x="-12"
                                y="-12"
                                width="496"
                                height="496"
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
                                    result="effect1_backgroundBlur_1_2"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_1_2"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter1_b_1_2"
                                x="181.938"
                                y="169.875"
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
                                    result="effect1_backgroundBlur_1_2"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_1_2"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_1_2"
                                x1="236"
                                y1="1"
                                x2="236"
                                y2="471"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0.5" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_1_2"
                                x1="236"
                                y1="1"
                                x2="236"
                                y2="471"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_1_2"
                                x1="244.722"
                                y1="181.875"
                                x2="244.722"
                                y2="291.146"
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
                                id="paint3_linear_1_2"
                                x1="244.722"
                                y1="181.875"
                                x2="244.722"
                                y2="291.146"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                )} */}
            </SubContainer>
            <NavContainer>
                <NavbarLogo>{navbar[0].svg}</NavbarLogo>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavLink
                            to={item.url}
                            key={index}
                            className={({ isActive }) =>
                                !isActive ? "Navlink" : "NavLinkActive"
                            }
                        >
                            <MenuItem
                                key={item.id}
                                // isActive={item.id === isActive}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.label}
                            </MenuItem>
                        </NavLink>
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
                    {/* <HamburgerMenu>{navbar[3].svg}</HamburgerMenu> */}
                </NavbarSearch>
            </NavContainer>
        </>
    );
};

export default Navbar;
