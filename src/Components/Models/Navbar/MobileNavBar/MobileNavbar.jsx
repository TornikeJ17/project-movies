import React from "react";
import { MobileNavBarContainer, MenuItem } from "./MobileNavBarStyle";
import { mobileNav } from "../../../../API/svgFiles";
import { NavLink } from "react-router-dom";

const MobileNavBar = ({ isActive, setIsActive }) => {
    const handleClick = (id) => {
        if (id) {
            setIsActive(id);
        }
    };
    return (
        <MobileNavBarContainer>
            {mobileNav.map((item, index) => (
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
                        {item.svg}
                    </MenuItem>
                </NavLink>
            ))}
        </MobileNavBarContainer>
    );
};

export default MobileNavBar;
