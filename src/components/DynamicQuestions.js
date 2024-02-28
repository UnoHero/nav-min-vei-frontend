import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from "@navikt/ds-react";

const DynamicQuestions = ({ onAnswersUpdate }) => {
    // Define all potential questions
    const allQuestions = {
        1: { id: 1, question: "Do you have pets?", options: ["Yes", "No"] },
        2: { id: 2, question: "What kind of pet do you have?", options: ["Dog", "Cat", "Other"] },
        3: { id: 3, question: "Do you like outdoor activities?", options: ["Yes", "No"] },
        // Add more questions and follow-ups as needed
    };

    const [activeQuestionIds, setActiveQuestionIds] = useState([1]); // Start with the first question
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        if (typeof onAnswersUpdate === 'function') {
            onAnswersUpdate(answers);
        }
    }, [answers, onAnswersUpdate]);

    const handleAnswerChange = (questionId, value) => {
        setAnswers(prevAnswers => {
            const newAnswers = { ...prevAnswers, [questionId]: value };
            updateQuestions(questionId, value);
            return newAnswers;
        });
    };

    const updateQuestions = (questionId, answer) => {
        // Logic to determine which question(s) should be active based on the current answer
        let newActiveQuestions = [...activeQuestionIds];
    
        // For the first question, depending on Yes or No, determine the path
        if (questionId === 1) {
            // Remove any follow-up questions of question 1 that are already in the active list
            newActiveQuestions = newActiveQuestions.filter(id => id === 1);
    
            if (answer === "Yes") {
                newActiveQuestions.push(2); // Add follow-up question for "Yes"
            } else if (answer === "No") {
                newActiveQuestions.push(3); // Add follow-up question for "No"
            }
        }
    
        // Update the active question IDs
        setActiveQuestionIds(newActiveQuestions);
    
        // Add more logic for other questions and their follow-ups as needed
    };
    

    return (
        <div>
            {activeQuestionIds.map(id => {
                const question = allQuestions[id];
                return (
                    <div key={question.id}>
                        <p>{question.question}</p>
                        <RadioGroup 
                            value={answers[question.id]} 
                            onChange={(value) => handleAnswerChange(question.id, value)}
                        >
                            {question.options.map(option => (
                                <Radio key={option} value={option}>{option}</Radio>
                            ))}
                        </RadioGroup>
                    </div>
                );
            })}
        </div>
    );
};

export default DynamicQuestions;
