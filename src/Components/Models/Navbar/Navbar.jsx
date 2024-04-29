import React, { useState } from "react";
import {
    SubContainer,
    SubContainerBlock,
    SubContainerTitle,
    SubContainerText,
    SubContainerButton,
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
import logo from "./transparent-logo.svg";
import { icons, images, menuItems, navbar } from "../../../API/svgFiles";
import UseSearchRequest from "../../../API/useSearchRequest";
import MovieShowSearch from "../../Movies/MovieShowSearch/MovieShowSearch";
const Navbar = ({ isActive, setIsActive, isMobile }) => {
    const handleClick = (id) => {
        if (id) {
            setIsActive(id);
        }
    };
    return (
        <>
            <SubContainer isActive={isActive}>
                {/* {images.map(
                    (item, index) =>
                        isActive === "home" && (
                            <ImageContainer key={index}>
                                {item.name.map((img, index) => (
                                    <ImageBlock
                                        key={index}
                                        images={img.URL}
                                    ></ImageBlock>
                                ))}
                            </ImageContainer>
                        )
                )} */}
                {isActive === "home" && (
                    <>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                top: "10%",
                            }}
                        >
                            <img width={500} src={logo} alt="" />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SubContainerBlock>
                                <SubContainerTitle>
                                    The Best Streaming Experience
                                    <SubContainerText>
                                        StreamVibe is the best streaming
                                        experience for watching your favorite
                                        movies and shows on demand, anytime,
                                        anywhere. With StreamVibe, you can enjoy
                                        a wide variety of content, including the
                                        latest blockbusters, classic movies,
                                        popular TV shows, and more. You can also
                                        create your own watchlists, so you can
                                        easily find the content you want to
                                        watch.
                                    </SubContainerText>
                                </SubContainerTitle>

                                <SubContainerButton>
                                    {icons[10].svg}Start Watching Now
                                </SubContainerButton>
                            </SubContainerBlock>
                        </div>
                    </>
                )}
            </SubContainer>
            <NavContainer>
                <NavbarLogo>{navbar[0].svg}</NavbarLogo>
                <NavbarMenu isMobile={isMobile}>
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
                    {/* <UseSearchRequest /> */}
                    {/* <MovieShowSearch /> */}
                    <div>{navbar[2].svg}</div>

                    {/* <HamburgerMenu>{navbar[3].svg}</HamburgerMenu> */}
                </NavbarSearch>
            </NavContainer>
        </>
    );
};

export default Navbar;
