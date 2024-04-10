import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from "@navikt/ds-react";
import { useLifeEvent } from '../contexts/LifeEventContext';


const DynamicQuestions = ({ onAnswersUpdate }) => {
    const { lifeEvents } = useLifeEvent();
        const allQuestions = {
        1: { id: 1, question: "Har du sjekket hvilke stønader du kan få som nybakt forelder?", options: ["Ja", "Nei"] },
        2: { id: 2, question: "Er du kjent med barnehageplass- og permisjonsregler?", options: ["Ja", "Nei"] },

        3: { id: 3, question: "Har du behov for informasjon om støtteordninger for barn med spesielle behov?", options: ["Ja", "Nei"] },
        4: { id: 4, question: "Ønsker du veiledning om hvordan du kan tilrettelegge hjemmet for et sykt barn?", options: ["Ja", "Nei"] },

        5: { id: 5, question:"Ønsker du informasjon om kurs eller opplæring for å øke sjansene for ny jobb?" , options: ["Ja", "Nei"] },
        6: { id: 6, question: "Er du interessert i rådgivning om karriereveiledning og jobbsøking?", options: ["Ja", "Nei"] },

        7: { id: 7, question: "Trenger du informasjon om integreringsprogrammer og språkopplæring?", options: ["Ja", "Nei"] },
        8: { id: 8, question: "Har du spørsmål om boligsøking eller offentlige tjenester for nyankomne?", options: ["Ja", "Nei"] },

        9: { id: 9, question: "Er du klar over de ulike støtteordningene for nyetablerte bedrifter?", options: ["Ja", "Nei"] },
        10: { id: 10, question: "Trenger du veiledning om skatteregler og næringsdrift?", options: ["Ja", "Nei"] },

        11: { id: 11, question: "Ønsker du informasjon om registrering og drift av frivillige organisasjoner?", options: ["Ja", "Nei"] },
        12: { id: 12, question: "Trenger du råd om finansiering og støtte til frivillige prosjekter?", options: ["Ja", "Nei"] },

        13: { id: 13, question: "Har du behov for informasjon om arveregler og testament?", options: ["Ja", "Nei"] },
        14: { id: 14, question: "Ønsker du rådgivning om hvordan håndtere praktiske aspekter ved et dødsfall?", options: ["Ja", "Nei"] },

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
            questionIds.push(1, 2); // Questions for 'Having a Child'
        }
        if (boxStates.box2) {
            questionIds.push(3, 4); // Questions for 'Seriously Ill Child'
        }
        if (boxStates.box3) {
            questionIds.push(5, 6); // Questions for 'Losing and Finding a Job'
        }
        if (boxStates.box4) {
            questionIds.push(7, 8); // Questions for 'New to Norway'
        }
        if (boxStates.box5) {
            questionIds.push(9, 10); // Questions for 'Starting and Running a Business'
        }
        if (boxStates.box6) {
            questionIds.push(11, 12); // Questions for 'Starting a Non-profit Organization'
        }
        if (boxStates.box7) {
            questionIds.push(13, 14); // Questions for 'Death and Inheritance'
        }
    
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
