import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from "@navikt/ds-react";

const DynamicQuestions = ({ onAnswersUpdate }) => {
    // Define all potential questions
    const allQuestions = {
        1: { id: 1, question: "Har du eller skal du pleie noen som er syke eller skadet?", options: ["Ja", "Nei"] },
        2: { id: 2, question: "Hvem er den du pleier for?", options: ["Barn", "Ektefelle", "Samboer", "Annet"] },
        3: { id: 3, question: "Bor den du pleier i ditt eller sitt personlige hjem?", options: ["Ja", "Nei"] },
        4: { id: 4, question: "Er personen du har tatt vare på i livets sluttfase i perioden du søker for?", options: ["Ja", "Nei"] },
        5: { id: 5, question: "Har du gjort særlig tyngende oppgaver din kommune ellers måtte stått for?", options: ["Ja", "Nei"] },
        // Add more questions if needed
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
        let newActiveQuestions = [...activeQuestionIds];
    
        if (questionId === 1) {
            // If they are caring for someone, we need to determine the next question
            if (answer === "Ja") {
                // If 'Yes', add the question about whom they are caring for
                newActiveQuestions = [1, 2];
            } else {
                // If 'No', we don't need to add more questions
                newActiveQuestions = [1];
            }
        } else if (questionId === 2) {
            // After answering whom they care for, ask if the cared for person lives with them
            newActiveQuestions = [1, 2, 3];
        } else if (questionId === 3) {
            // After answering where the person lives, ask if the person is in the final stages of life
            newActiveQuestions = [1, 2, 3, 4];
        } else if (questionId === 4) {
            // Finally, ask if they're performing particularly burdensome tasks
            newActiveQuestions = [1, 2, 3, 4, 5];
        }
    
        // Update the active question IDs
        setActiveQuestionIds(newActiveQuestions);
    };
    useEffect(() => {
        // Map over the activeQuestionIds to get the answers in order
        const currentAnswers = activeQuestionIds.map(id => ({
            questionId: id,
            answer: answers[id] || '' // If no answer is given yet, default to an empty string
        }));
    
        // Log the current answers to the console
        console.log(currentAnswers);
    
        // Call the onAnswersUpdate function if it's provided
        if (typeof onAnswersUpdate === 'function') {
            onAnswersUpdate(currentAnswers);
        }
    }, [answers, activeQuestionIds, onAnswersUpdate]);
    
    
    

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
