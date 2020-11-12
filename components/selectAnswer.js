import React from "react"
import WinLogo from "../img/winer.svg"
function SelectAnswer({
  getCountry,
  answerText,
  random,
  handleChosen,
  isChosen,
  isCorrect,
  isOpen,
  handleOpenModal,
  trial,
  handleTry,
  handleScore,
  score }) {
  return (
    <div>
      {!isOpen 
      ? <div>
          {random % 5 === 0
            ?
            <div>
              <img src={getCountry.flag} alt={`This is ${getCountry.name} flag`} />
              <p className="question">Which country does this flag belong to?</p>
            </div>
            : <p className="question"><strong>{getCountry.name}</strong> is a capital city of</p>
          }

          <div className="option-answer">
            {answerText.map(answer => <button onClick={handleScore} className="btn" value={answer.capital}>{answer.capital}</button>)}
          </div>
          {isCorrect && <button className="next" onClick={handleOpenModal}>Next</button>}
        </div>
        :
         <div className="win">
           <img className="cup" src={WinLogo} alt="Logo of winer"/>
           <h3>Result</h3>
           <span>You got {score} correct answer</span>
           <br></br>
           <button className="try-btn" onClick={handleTry}>Try again</button>
        </div>
  }
    </div>
  )
}
export default SelectAnswer;