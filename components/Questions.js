import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function Questions() {
    const { countries, random } = useContext(Context)
    return (
        <div className="question-component">
            <div className="question-container">
                <div>
                    {random % 2 === 0
                        ?
                        <div>
                            <img className="flag-image" src={countries?.flag} alt={`This is ${countries?.name} flag`} />
                            <p className="question">Which country does this flag belong to?</p>
                        </div>
                        : <p className="question">{countries?.capital} is a capital city of?</p>
                    }

                </div>
            </div>
        </div>
    )
}
