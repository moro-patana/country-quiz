import React, { useState } from "react"
import question from "../quiz"
function SelectAnswer({country, filterMexico}) {
    // const [mexFlag, setmexFlag] = useState("https://restcountries.eu/data/mex.svg")
    // console.log(mexFlag);
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
        console.log("open");
    }
    const correctAnswer = () => {
        if(img.src === mexFlag) {
            console.log("correct");
        } else {
            console.log("wrong");
        }
    }
    return (

        <div>
            <h2>Which one is Mexico's flag?</h2>
            <div className="flags">
                {country.map(item => {
                  return (
                  <button className="btn">
                    <img src={item.flag}/>
                  </button>)
    })}
            <button className="next" onClick={handleClick}>Next</button>
            {isOpen && 
            <div className="popup">
                <p>You got 0 correct answer</p>
                <button>Try Again</button>
            </div>}
            </div>
        </div>
    )
}
export default SelectAnswer;