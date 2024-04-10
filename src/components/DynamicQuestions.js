import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from "@navikt/ds-react";
import { useLifeEvent } from '../contexts/LifeEventContext';


const DynamicQuestions = ({ onAnswersUpdate }) => {
    const { lifeEvents } = useLifeEvent();
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
        const newActiveQuestionIds = determineQuestionsToShow(lifeEvents);
        setActiveQuestionIds(newActiveQuestionIds);
      }, [lifeEvents]);
      

    const handleAnswerChange = (questionId, value) => {
        setAnswers(prevAnswers => {
            return { ...prevAnswers, [questionId]: value };
        });
    };

    useEffect(() => {
        // Update the active question IDs based on the state of the boxes
        const newActiveQuestionIds = determineQuestionsToShow(lifeEvents);
        setActiveQuestionIds(newActiveQuestionIds);
    }, [lifeEvents]);

    const determineQuestionsToShow = (boxStates) => {
        let questionIds = [];
        if (boxStates.box1) {
          // If box1 is checked, show specific questions related to it
          questionIds.push(1, 2); // Add question IDs related to box1
        }
        // Repeat for other boxes
        if (boxStates.box2) {
          questionIds.push(3, 4); // Add question IDs related to box2
        }
        // ... add conditions for other boxes as needed ...
      
        return questionIds;
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
