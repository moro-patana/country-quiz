import React from "react"
import QuizQuestion from "../quiz.json"
function SelectAnswer({country}) {
    return (
        <div>
            {QuizQuestion.map((item, index) => {
              return (<button>{answers[index]}</button>)
})}
        <button>Next</button>
        </div>
    )
}
export default SelectAnswer;