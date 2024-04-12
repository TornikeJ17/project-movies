import React from "react";
import Container from "../Models/Container/Container";
import Trial from "../Models/Trial/Trial";
import Plans from "../Models/Plans/Plans";
import Header from "../Models/Header/Header";
import {
    CompareContainer,
    CompareBlock,
    SubHeader,
    SubRowsBlock,
    SubRows,
    SubData,
} from "./SubscriptionsStyle";
import { plans } from "../../API/svgFiles";
const Subscriptions = () => {
    const compareHeader = () => {
        return (
            <>
                <SubHeader>
                    <span>Features</span>
                </SubHeader>
                <SubHeader>
                    <span>Basic</span>
                </SubHeader>
                <SubHeader>
                    <div>
                        <span>Standard</span>
                        <span className="popular">Popular</span>
                    </div>
                </SubHeader>
                <SubHeader>
                    <span>Premium</span>
                </SubHeader>
            </>
        );
    };
    const compareRows = () => {
        return (
            <SubRowsBlock>
                <SubRows>Price</SubRows>
                <SubRows>Content</SubRows>
                <SubRows>Devices</SubRows>
                <SubRows>Free Trail</SubRows>
                <SubRows>Cancel Anytime</SubRows>
                <SubRows>HDR</SubRows>
                <SubRows>Dolby Atmos</SubRows>
                <SubRows>Ad - Free</SubRows>
                <SubRows>Offline Viewing</SubRows>
                <SubRows>Family Sharing</SubRows>
            </SubRowsBlock>
        );
    };
    const compareData = (data) => {
        return (
            <>
                <SubData>${data.price}/Month</SubData>
                <SubData>{data.content}</SubData>
                <SubData>{data.devices}</SubData>
                <SubData>{data.freeTrial}</SubData>
                <SubData>{data.cancelAnytime}</SubData>
                <SubData>{data.hdr}</SubData>
                <SubData>{data.dolbyAtmos}</SubData>
                <SubData>{data.adFree}</SubData>
                <SubData>{data.offlineView}</SubData>
                <SubData>{data.familySharing}</SubData>
            </>
        );
    };
    const comparePlans = () => {
        return (
            <CompareContainer>
                {compareHeader()}

                {plans.map((item, index) => (
                    <>
                        {index === 0 && compareRows()}
                        <CompareBlock key={index[0]}>
                            {compareData(item)}
                        </CompareBlock>
                    </>
                ))}
            </CompareContainer>
        );
    };

    return (
        <Container>
            <Plans />
            <Header
                title={"Compare our plans and find the right one for you"}
                text={
                    "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
                }
            />
            {comparePlans()}
            <Trial />
        </Container>
    );
};

export default Subscriptions;
