import React, { useEffect, useState } from "react"
import SelectAnswer from "../components/selectAnswer"
import Question from "../components/selectAnswer"
const endPoint = "https://restcountries.eu/rest/v2/name/united"
function App() {
    const [country, setCountry] = useState([])
    const fetchData = async() => {
        try {
         const res = await fetch(endPoint);
         const data = await res.json();
         setCountry(data)
         console.log(data);
        } catch(e) {
         console.error(e);
        }
 }

    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            <Question country={country}/>
            <SelectAnswer country={country}/>
        </div>
    )
}
export default App;