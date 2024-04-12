import React, { useState } from "react";
import {
    PlanBlocks,
    PlansTab,
    PlanCard,
    PlanTitle,
    PlanText,
    PlanPrice,
    PlanButtonBlock,
    PlanButton,
    PlanButtonTrial,
    PlansTabButton,
} from "./PlansStyle";
import Header from "../Header/Header";

import { plans } from "../../../API/svgFiles";
const Plans = () => {
    const [planActive, setPlanActive] = useState("monthly");
    const plansHandleClick = (plans) => {
        setPlanActive(plans);
    };
    return (
        <>
            <Header
                title={`Choose the plan that's right for you`}
                text={`Join StreamVibe and select from our flexible
                    subscription options tailored to suit your viewing
                    preferences. Get ready for non-stop entertainment!`}
            >
                <PlansTab>
                    <PlansTabButton
                        isActive={planActive === "monthly"}
                        onClick={() => plansHandleClick("monthly")}
                    >
                        Monthly
                    </PlansTabButton>
                    <PlansTabButton
                        isActive={planActive === "yearly"}
                        onClick={() => plansHandleClick("yearly")}
                    >
                        Yearly
                    </PlansTabButton>
                </PlansTab>
            </Header>
            <PlanBlocks>
                {plans.map((item, index) => (
                    <PlanCard key={index}>
                        <PlanTitle>{item.title}</PlanTitle>
                        <PlanText>{item.text}</PlanText>
                        <PlanPrice>
                            {planActive === "monthly" ? (
                                <>
                                    ${item.price}
                                    <span>/month</span>
                                </>
                            ) : (
                                <>
                                    ${item.yearlyPrice}
                                    <span>/yearly</span>
                                </>
                            )}
                        </PlanPrice>
                        <PlanButtonBlock>
                            <PlanButton>
                                <span>Start Free Trial</span>
                            </PlanButton>
                            <PlanButtonTrial>
                                <span>Choose Plan</span>
                            </PlanButtonTrial>
                        </PlanButtonBlock>
                    </PlanCard>
                ))}
            </PlanBlocks>
        </>
    );
};

export default Plans;
