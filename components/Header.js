import React from 'react'
import QuizLogo from "../img/logo.svg"

export default function Header() {
    return (
        <div className="header-card">
            <h1>Country Quiz</h1>
            <img className="quiz-image" src={QuizLogo} alt="Quiz logo" />
        </div>
    )
}
