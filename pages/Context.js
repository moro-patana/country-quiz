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
    const [disabled, setDisabled] = useState(false)

    const buttonRef = useRef();

    async function fetchCountries() {
        const res = await fetch(endPoint)
        const data = await res.json()
        let indexes = new Set([Math.floor(Math.random() * data.length)])
        while(indexes.size < 4) {
            indexes.add(Math.floor(Math.random() * data.length))
        }
        indexes = [... indexes];
        const answerOption1 = data[indexes[0]]
        const answerOption2 = data[indexes[1]]
        const answerOption3 = data[indexes[2]]
        const answerOption4 = data[indexes[3]]
        setCountries(answerOption4)
        const answerOptions = [answerOption3, answerOption1, answerOption4, answerOption2];
        answerOptions.sort(() => { return 0.5 - Math.random() });
        setAnswerText(answerOptions)
    }
    useEffect(() => {
        fetchCountries()
        setRandom(Math.floor(Math.random() * 5))
    }, [])


    function handleClick(e) {
        e.preventDefault()
        setDisabled(true)
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
        setDisabled(false)
    }
    function openPopup(e) {
        e.preventDefault()
        if (countries.name != e.currentTarget.value) {
            setIsOpen(true);
        }
        setDisabled(false)
    }
    function retry() {
        setIsOpen(false)
        fetchCountries()
        setNextQuestion(true)
        setIsTryAgain(false)
        setDisabled(false)
        setScore(0)
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
                score,
                disabled
            }}
        >
            {children}
        </Context.Provider>
    )
}
export { ContextProvider, Context }
