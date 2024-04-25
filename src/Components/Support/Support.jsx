import React from "react";
import Container from "../Models/Container/Container";
import {
    SupportContainer,
    SupportBlock,
    SupportTitleBlock,
    SupportTitle,
    SupportText,
    SubContainer,
    SubContainerBlock,
    ImageBlock,
    Form,
} from "./SupportStyle";
import { images } from "../../API/svgFiles";
import Trial from "../Models/Trial/Trial";
import Questions from "../Models/Questions/Questions";
import Inputs from "../Models/Inputs/Inputs";
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
                    <SubContainer>
                        <SubContainerBlock>
                            {images.map((item, indexItem) =>
                                item.name.map((img, index) => (
                                    <ImageBlock
                                        key={index + 1}
                                        index={index}
                                        image={img.URL}
                                    ></ImageBlock>
                                ))
                            )}
                            {/* <div>
                                {images.map((item, index) =>
                                    item.name
                                        .slice(4, 8)
                                        .map((img, index) => (
                                            <ImageBlock
                                                key={index}
                                                index={index + 4}
                                                image={img.URL}
                                            ></ImageBlock>
                                        ))
                                )}
                            </div>
                            <div>
                                {images.map((item, index) =>
                                    item.name
                                        .slice(8, 12)
                                        .map((img, index) => (
                                            <ImageBlock
                                                key={index}
                                                index={index + 8}
                                                image={img.URL}
                                            ></ImageBlock>
                                        ))
                                )}
                            </div>
                            <div>
                                {images.map((item, index) =>
                                    item.name
                                        .slice(12, 16)
                                        .map((img, index) => (
                                            <ImageBlock
                                                index={index + 12}
                                                key={index}
                                                image={img.URL}
                                            ></ImageBlock>
                                        ))
                                )}
                            </div> */}
                        </SubContainerBlock>
                    </SubContainer>
                </SupportBlock>
                <SupportBlock isForm={true}>
                    <Form>
                        <Inputs
                            name="First Name"
                            label={"First Name"}
                            placeholder={"Enter First Name"}
                        />
                        <Inputs
                            name="First Name"
                            label={"Last Name"}
                            placeholder={"Enter Last Name"}
                        />
                        <Inputs
                            name="First Name"
                            label={"Email"}
                            placeholder={"Enter your Email"}
                        />
                        <Inputs
                            name="First Name"
                            label={"Phone Number"}
                            placeholder={"Enter Phone Number"}
                        />
                        <Inputs
                            name="First Name"
                            label={"Message"}
                            placeholder={"Enter your Message"}
                        />
                    </Form>
                </SupportBlock>
            </SupportContainer>
            <Questions />
            <Trial />
        </Container>
    );
};

export default Support;
