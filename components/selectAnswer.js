import React, { useEffect, useState } from "react"
function SelectAnswer({ country, dataCapital, getQuestion, fetchData }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isClosed, setIsClosed] = useState(true)
    const [img, setImg] = useState(country.flag)
    const [random, setRandom] = useState(0)
    const correctFlag = country.flag
    const correctName = country.name
    const correctCapital = country.capital
    const [button, setButton] = useState(country.name)
    useEffect(() => {
        setImg(!img)
        setRandom(Math.floor(Math.random() * 5))
    }, [])
    function handleClick() {
        setIsOpen(!isOpen)
        console.log("open");
    }
    function closeBtn() {
        setIsClosed(!isClosed)
        console.log("closed");
    }
    function handleCheck() {
        setButton(!button)
        fetchData()
    }
    return (

        <div>
            <div>
                {random % 5 === 0
                    ?
                    <div>
                        <img src={correctFlag} alt={`This is ${correctName} flag`} />
                        <p>Which country does this flag belong to?</p>
                    </div>
                    : <p><strong>{correctCapital}</strong> is a capital city of</p>
                }
                <div className="options">
                    {dataCapital.map(item => <button onClick={handleCheck} className={button ? "red-btn" : "green-btn"}>{item.name}</button>)}
                </div>
                <button type="button" className="next" onClick={handleClick}>Next</button>
            </div>
            {isOpen &&
                <div className="popup">
                    <p>You got 0 correct answer</p>
                    <button className="try" onClick={handleClick}>Try Again</button>
                </div>
            }
        </div>
    )
}
export default SelectAnswer;