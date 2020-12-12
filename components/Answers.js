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
            {answerText.map(answer => (
                <div className="answer-button" key={answer.name}>
                    <button onClick={handleClick} ref={buttonRef} className={countries.name === answer.name ? "answer green" : "answer red"} key={answer.name} value={answer.name} id={answer.name}>
                        {answer.name}
                    </button>
                </div>
            ))}
            {isCorrect && <button className="next" onClick={takeNextQuestion}>Next</button>}
            {isTryAgain && <button className="next" onClick={openPopup}>Next</button>}
        </div>
    )
}
