import React, { useEffect, useState, useRef } from 'react'
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

    const buttonRef = useRef();

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
        console.log(answerOptions);
        setAnswerText(answerOptions)
    }
    console.log(countries);
    useEffect(() => {
        fetchCountries()
        setRandom(Math.floor(Math.random() * 5))
    }, [])


    function handleClick(e) {
        console.log(countries.name)
        e.preventDefault()
        if (countries.name === e.currentTarget.value) {
            e.currentTarget.classList.add("green")
            setIsCorrect(true)
            setNextQuestion(true)
            setIsTryAgain(false)
            setScore(score + 1)
        } else {
            e.currentTarget.classList.add("red")
            buttonRef.current.classList.add("green")
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
        if (countries.name != e.currentTarget.value) {
            setIsOpen(true);
        }
    }
    function retry() {
        setIsOpen(false)
        fetchCountries()
        setNextQuestion(true)
        setIsTryAgain(false)
    }

    return (
        <Context.Provider
            value={{
                countries,
                answerText,
                random,
                handleClick,
                nextQuestion,
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
