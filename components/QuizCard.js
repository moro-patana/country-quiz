import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import Questions from "../components/Questions"
import Answers from "../components/Answers"
import WinnerLogo from "../img/winner.svg"

export default function QuizCard() {
    const { isOpen, score, retry } = useContext(Context)
    return (
        <div className="quiz-card">
            {!isOpen
                ? <div>
                    <Questions />
                    <Answers />
                </div>
                : <div className="popup">
                    <img className="cup" src={WinnerLogo} alt="Logo of winer" />
                    <h3>Result</h3>
                    <span>You got <span className="score">{score}</span> correct answer</span>
                    <br></br>
                    <button className="try-btn" onClick={retry}>Try again</button>
                </div>

            }
        </div>
    )
}
