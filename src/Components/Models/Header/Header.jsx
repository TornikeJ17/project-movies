import React from "react";
import { Title, H1, Span } from "./HeaderStyle";
const Header = ({ title, text, children, isActive }) => {
    return (
        <Title isActive={isActive}>
            <div>
                <H1>{title}</H1>
                <Span>{text}</Span>
            </div>
            {children}
        </Title>
    );
};

export default Header;