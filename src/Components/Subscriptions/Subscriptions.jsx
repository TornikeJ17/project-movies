import React, { useState } from "react";
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
    TabContainer,
    TabsBlock,
    TabsButton,
} from "./SubscriptionsStyle";
import { plans } from "../../API/svgFiles";
const Subscriptions = ({ isMobile }) => {
    const [tabs, setTabs] = useState("Basic");
    const clickTabs = (tabName) => {
        setTabs(tabName);
    };
    const compareHeader = () => {
        return (
            <>
                {isMobile ? (
                    <TabContainer>
                        <TabsBlock>
                            <TabsButton
                                isActive={tabs === "Basic"}
                                onClick={() => clickTabs("Basic")}
                            >
                                Movies
                            </TabsButton>
                            <TabsButton
                                isActive={tabs === "Standard"}
                                onClick={() => clickTabs("Standard")}
                            >
                                Standard
                            </TabsButton>
                            <TabsButton
                                isActive={tabs === "Premium"}
                                onClick={() => clickTabs("Premium")}
                            >
                                Premium
                            </TabsButton>
                        </TabsBlock>
                    </TabContainer>
                ) : (
                    <>
                        <SubHeader index={0}>
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
                        <SubHeader index={1}>
                            <span>Premium</span>
                        </SubHeader>
                    </>
                )}
            </>
        );
    };
    const getSelectedPlanData = () => {
        return plans.find((plan) => plan.tab === tabs);
    };
    const compareRowsMobile = () => {
        const selectedPlanData = getSelectedPlanData();
        console.log(selectedPlanData, "selectedPlanData");
        return (
            <div
                style={{
                    padding: 16,
                    borderRadius: "12px",
                }}
            >
                <CompareBlock>
                    <SubData>Price: ${selectedPlanData?.price}/Month</SubData>
                    <SubData>Free Trial: {selectedPlanData?.freeTrial}</SubData>
                    <SubData>Content: {selectedPlanData?.content}</SubData>
                    <SubData>Devices: {selectedPlanData?.devices}</SubData>
                    <SubData>
                        Cancel Anytime: {selectedPlanData?.cancelAnytime}
                    </SubData>
                    <SubData>HDR: {selectedPlanData?.hdr}</SubData>
                    <SubData>
                        Dolby Atmos: {selectedPlanData?.dolbyAtmos}
                    </SubData>
                    <SubData>Ad-Free: {selectedPlanData?.adFree}</SubData>
                    <SubData>
                        Offline Viewing: {selectedPlanData?.offlineView}
                    </SubData>
                    <SubData>
                        Family Sharing: {selectedPlanData?.familySharing}
                    </SubData>
                </CompareBlock>
            </div>
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
            <CompareContainer isMobile={isMobile}>
                {compareHeader()}
                {isMobile ? (
                    // Only render the rows for the selected plan when in mobile view
                    compareRowsMobile()
                ) : (
                    <>
                        {compareRows()}
                        {plans.map((item, index) => (
                            <CompareBlock key={index}>
                                {compareData(item)}
                            </CompareBlock>
                        ))}
                    </>
                )}
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
