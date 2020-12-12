import React, { useEffect, useState } from 'react'
const endPoint = "https://restcountries.eu/rest/v2/all"
const Context = React.createContext()

export default function ContextProvider({ children }) {
    const [countries, setCountries] = useState([])
    const [answerText, setAnswerText] = useState([])
    const [random, setRandom] = useState(0)
    const [isCorrect, setIsCorrect] = useState(false)
    const [nextQuestion, setNextQuestion] = useState(false)
    const [isTryAgain, setIsTryAgain] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [score, setScore] = useState(0)

    async function fetchCountries() {
        const res = await fetch(endPoint)
        const data = await res.json()
        const randomData = data[Math.floor(Math.random() * data.length)]
        setCountries(randomData)
        const answerOption1 = data[Math.floor(Math.random() * data.length)]
        const answerOption2 = data[Math.floor(Math.random() * data.length)]
        const answerOption3 = data[Math.floor(Math.random() * data.length)]
        const answerOptions = [answerOption3, answerOption1, randomData, answerOption2];
        answerOptions.sort(() => { return 0.5 - Math.random() });
        setAnswerText(answerOptions)
    }
    useEffect(() => {
        fetchCountries()
        setRandom(Math.floor(Math.random() * 5))
    }, [])


    function handleClick(e) {
        e.preventDefault()
        document.getElementById(countries.name).style.background = 'green';
        document.getElementById(countries.name).style.color = 'white';
        if (countries.name === e.target.value) {
            setIsCorrect(true)
            setNextQuestion(!nextQuestion)
            setIsTryAgain(false)
            setScore(score + 1)
        } else {
            setIsCorrect(false)
            setIsTryAgain(true)
        }
    }
    function takeNextQuestion() {
        setNextQuestion(true)
        fetchCountries()
        setIsCorrect(false)
    }
    function openPopup(e) {
        e.preventDefault()
        if (countries.name != e.target.value) {
            setIsOpen(true);
        }
    }
    function retry() {
        setIsOpen(false)
        fetchCountries()
    }

    return (
        <Context.Provider
            value={{
                countries, 
                answerText, 
                random, 
                handleClick,
                isCorrect, 
                isTryAgain, 
                buttonRef, 
                takeNextQuestion, 
                retry, 
                openPopup, 
                isOpen, 
                score
            }}
        >
            {children}
        </Context.Provider>
    )
}
export { ContextProvider, Context }
