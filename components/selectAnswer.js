import React, { useState } from "react"
import question from "../quiz"
function SelectAnswer({country, flag}) {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
        console.log("open");
    }
    return (

        <div>
            <div className="flags">
                {country.map(item => {
                  return (
                    <img src={item.flag}/>
                  )
                })}
                </div>
            <h2>Which country is the owner of that flag?</h2>
            <div>
                <button>Tanzanian</button>
                <button>Eeste</button>
                <button>Mexico</button>
                <button>Brazil</button>
            </div>
            <button className="next" onClick={handleClick}>Next</button>
            {isOpen && 
            <div className="popup">
                <p>You got 0 correct answer</p>
                <button>Try Again</button>
            </div>}
        </div>
    )
}
export default SelectAnswer;