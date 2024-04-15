import React from "react";
import {
    Container,
    BackgroundImage,
    Block,
    SecondBlock,
    Title,
    Text,
    Button,
} from "./TrialStyle";
import { images } from "../../../API/svgFiles";
const Trial = () => {
    return (
        <Container>
            <BackgroundImage>
                {images.map((item, index) => (
                    <Block key={index}>
                        {item.name.map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    background: `url('${img.URL}') lightgray 50% / cover no-repeat`,
                                }}
                            ></div>
                        ))}
                    </Block>
                ))}
            </BackgroundImage>
            <SecondBlock>
                <div>
                    <Title>Start your free trial today!</Title>
                    <Text>
                        This is a clear and concise call to action that
                        encourages users to sign up for a free trial of
                        StreamVibe.
                    </Text>
                </div>
                <Button>Start a Free Trail</Button>
            </SecondBlock>
        </Container>
    );
};

export default Trial;
