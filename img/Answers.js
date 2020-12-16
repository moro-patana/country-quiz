import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function Answers() {
    const {
        answerText,
        handleClick,
        countries,
        buttonRef,
        isCorrect,
        isTryAgain,
        takeNextQuestion,
        openPopup } = useContext(Context)
    return (
        <div className="answer-container">
            {answerText.map((answer, index) => (
                <button
                    onClick={handleClick}
                    ref={answer.name === countries.name ? buttonRef : null}
                    className="answer-button"
                    key={answer.name}
                    value={answer.name}
                    id={answer.name}>
                    <span className="alpha">{index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : index === 3 ? "D" : ""}</span>
                    <span className="country-name">{answer.name}</span>
                </button>
            ))}
            {isCorrect && <div className="next-button">
                <button className="next" onClick={takeNextQuestion}>Next</button>
            </div>}
            {isTryAgain && <div className="next-button">
                <button className="next" onClick={openPopup}>Next</button>
            </div>}
        </div>
    )
}
