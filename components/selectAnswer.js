import React from "react"
function SelectAnswer({country}) {
    return (
        <div>
            <h2>What is your country?</h2>
            {country.map(item => (
            <div>
                <button className="btn">{item.nativeName}</button>
            </div>

            ))}
            <button>Next</button>
        </div>
    )
}
export default SelectAnswer;