import React, { useEffect, useState } from "react"
const endPoint = "https://restcountries.eu/rest/v2/all"
import SelectAnswer from "../components/selectAnswer.js"
function App() {
    const [getCountry, setGetCountry] = useState([])
    const [answerText, setAnswerText] = useState([])
    const [random, setRandom] = useState(0)
    const [isChosen, setIsChosen] = useState(false)
    const [isCorrect, setIsCorrect] = useState("")
    const [score, setScore] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [trial, setTrial] = useState(true)
    async function fetchData() {
        const response = await fetch(endPoint)
        const data = await response.json()
        const randomData = data[Math.floor(Math.random() * data.length)]
        setGetCountry(randomData);
        const answerOption1 = data[Math.floor(Math.random() * data.length)]
        const answerOption2 = data[Math.floor(Math.random() * data.length)]
        const answerOption3 = data[Math.floor(Math.random() * data.length)]
        const answerOptions = [answerOption3, answerOption1, randomData, answerOption2];
        answerOptions.sort(() => {return 0.5 - Math.random()});
        setAnswerText(answerOptions)

    }
    useEffect(() => {
        fetchData()
        setRandom(Math.floor(Math.random() * 5))
    },[])
    function handleChosen() {
        setIsChosen(!isChosen)
    }
    function handleOpenModal() {
        setIsOpen(!isOpen)
    }
    function handleScore(e) {
        setIsCorrect(getCountry.name)
        console.log(getCountry.name);
        console.log(getCountry.capital);
        const button = e.target.value
        if(isCorrect === button) {
            console.log("True");
            setScore(score + 1);
        } else {
            console.log("false");
        }
    }
    function handleTry() {
        setTrial(!trial)
        fetchData()
        setIsOpen(!isOpen)
    }
    return (
        <div>
          <SelectAnswer 
          getCountry={getCountry}
          answerText={answerText}
          random={random}
          handleChosen={handleChosen}
          isChosen={isChosen}
          isCorrect={isCorrect}
          score={score}
          isOpen={isOpen}
          handleOpenModal={handleOpenModal}
          handleScore={handleScore}
          try={trial}
          handleTry={handleTry}
          />
        </div>
    )
}
export default App;