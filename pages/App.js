import React, { useEffect, useState } from "react"
import SelectAnswer from "../components/selectAnswer"
const endPoint = "https://restcountries.eu/rest/v2/all"
function App() {
    const [country, setCountry] = useState([])
    const [dataCapital, setDataCapital] = useState([])
    const fetchData = async() => {
        try {
         const res = await fetch(endPoint);
         const data = await res.json();
         const randomData = data[Math.floor(Math.random() * data.length)]
         const capital1 = data[Math.floor(Math.random() * data.length)]
         const capital2 = data[Math.floor(Math.random() * data.length)]
         const capital3 = data[Math.floor(Math.random() * data.length)]
         const optionCapital = [capital3, capital1, randomData, capital2]
         setDataCapital(optionCapital)
         setCountry(randomData)
      
        } catch(e) {
         console.error(e);
        }
 }
 
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            <SelectAnswer 
            fetchData={fetchData}
            country={country}
            dataCapital={dataCapital}
            />
        </div>
    )
}
export default App;