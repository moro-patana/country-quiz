import React, { useEffect, useState } from "react"
import SelectAnswer from "../components/selectAnswer"
const endPoint = "https://restcountries.eu/rest/v2/name/united"
function App() {
    const [country, setCountry] = useState([])
    async function FetchData() {
        const res = await fetch(endPoint)
        const data = await res.json()
        console.log(data);
        setCountry(data)
    }
    useEffect(() => {
        FetchData()
    })
    return (
        <SelectAnswer/>
    )
}
export default App;