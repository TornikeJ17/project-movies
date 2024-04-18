import React from "react";
import Container from "../Models/Container/Container";
import {
    SupportContainer,
    SupportBlock,
    SupportTitleBlock,
    SupportTitle,
    SupportText,
} from "./SupportStyle";
import Trial from "../Models/Trial/Trial";
import Questions from "../Models/Questions/Questions";
const Support = () => {
    return (
        <Container>
            <SupportContainer>
                <SupportBlock>
                    <SupportTitleBlock isForm={false}>
                        <SupportTitle>
                            Welcome to our support page!
                        </SupportTitle>
                        <SupportText>
                            We're here to help you with any problems you may be
                            having with our product.
                        </SupportText>
                    </SupportTitleBlock>
                    <div>image block</div>
                </SupportBlock>
                <SupportBlock isForm={true}>
                    <form>
                        <div>
                            <label htmlFor="">first name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">first name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">first name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">first name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">first name</label>
                            <input type="text" name="" id="" />
                        </div>
                    </form>
                </SupportBlock>
            </SupportContainer>
            <Questions />
            <Trial />
        </Container>
    );
};

export default Support;
