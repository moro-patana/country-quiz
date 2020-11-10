import React, { useState } from "react"
import QuizQuestion from "../quiz.json"
function SelectAnswer({country}) {
    return (
            <div className="flags">
                {country.map(item => {
                  return (<button className="btn"><img src={item.flag}/></button>)
    })}
            <button className="next">Next</button>
            </div>
    )
}
export default SelectAnswer;