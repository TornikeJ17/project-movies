import React, { useState } from "react";
import {
    ContainerQuestion,
    QuestionButton,
    QuestionBlock,
    QuestionLine,
    QuestionCard,
    QuestionSubCard,
    QuestionNum,
    QuestionTitle,
    QuestionText,
    QuestionAccordion,
} from "./QuestionsStyle";
import Container from "../Container/Container";
import Header from "../Header/Header";
import { questions, icons } from "../../../API/svgFiles";

const Questions = () => {
    const [isActive, setIsActive] = useState(null);
    const handleClick = (activeId) => {
        setIsActive(isActive === activeId || activeId);
    };
    return (
        <Container>
            <Header
                title={"Frequently Asked Questions"}
                text={
                    "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
                }
            >
                <QuestionButton>Ask a Question</QuestionButton>
            </Header>
            <ContainerQuestion>
                {questions.map((item, index) => (
                    <QuestionBlock
                        key={index}
                        onClick={() => handleClick(item.id)}
                    >
                        <QuestionCard>
                            <QuestionSubCard>
                                <QuestionNum>0{index + 1}</QuestionNum>
                            </QuestionSubCard>
                            <QuestionSubCard>
                                <QuestionTitle>{item.title}</QuestionTitle>
                                {isActive === item.id && (
                                    <QuestionText>{item.text}</QuestionText>
                                )}
                            </QuestionSubCard>
                            <QuestionSubCard>
                                <QuestionAccordion>
                                    {icons[0].svg}
                                </QuestionAccordion>
                            </QuestionSubCard>
                        </QuestionCard>
                        <QuestionLine></QuestionLine>
                    </QuestionBlock>
                ))}
            </ContainerQuestion>
        </Container>
    );
};
export default Questions;
