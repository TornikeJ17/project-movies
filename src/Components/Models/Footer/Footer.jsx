import React from "react";
import {
    Container,
    FooterBlocks,
    SecondContainer,
    Line,
    Blocks,
    BlocksCard,
} from "./FooterStyle";

const header = [
    {
        id: 0,
        title: "Home",
        menu: [
            {
                id: 0,
                name: "Categories",
            },
            {
                id: 1,
                name: "Devices",
            },
            {
                id: 2,
                name: "Pricing",
            },
            {
                id: 3,
                name: "FAQ",
            },
        ],
    },
    {
        id: 1,
        title: "Movies",
        menu: [
            {
                id: 0,
                name: "Genres",
            },
            {
                id: 1,
                name: "Trending",
            },
            {
                id: 2,
                name: "New Release",
            },
            {
                id: 3,
                name: "Popular",
            },
        ],
    },
    {
        id: 2,
        title: "Shows",
        menu: [
            {
                id: 0,
                name: "Genres",
            },
            {
                id: 1,
                name: "Trending",
            },
            {
                id: 2,
                name: "New Release",
            },
            {
                id: 3,
                name: "Popular",
            },
        ],
    },
    {
        id: 3,
        title: "Support",
        menu: [
            {
                id: 0,
                name: "Contact Us",
            },
        ],
    },
    {
        id: 4,
        title: "Subscription",
        menu: [
            {
                id: 0,
                name: "Plans",
            },
            {
                id: 1,
                name: "Features",
            },
        ],
    },
    {
        id: 5,
        title: "Connect With Us",
        menu: [
            {
                id: 0,
                name: "Facebook",
            },
            {
                id: 1,
                name: "Twitter",
            },
            {
                id: 2,
                name: "LinkedIn",
            },
        ],
    },
];

const Footer = () => {
    const footerBlock = () => {
        return header.map((item, index) => (
            <div key={index}>
                <FooterBlocks>
                    <span>{item.title}</span>
                    <ul>
                        {item.menu.map((li, index) => (
                            <li key={index}>{li.name}</li>
                        ))}
                    </ul>
                </FooterBlocks>
            </div>
        ));
    };
    return (
        <div>
            <Container>{footerBlock()}</Container>
            <SecondContainer>
                <Line></Line>
                <Blocks>
                    <BlocksCard>
                        @2023 streamvib, All Rights Reserved
                    </BlocksCard>
                    <BlocksCard>
                        <div>Terms of Use</div>
                        <div>Privacy Policy</div>
                        <div>Cookie Policy</div>
                    </BlocksCard>
                </Blocks>
            </SecondContainer>
        </div>
    );
};

export default Footer;
