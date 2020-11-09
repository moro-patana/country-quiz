import React, { useEffect, useState } from "react"
import SelectAnswer from "../components/selectAnswer"
const endPoint = "https://restcountries.eu/rest/v2/name/united"
console.log(endPoint);
function App() {
    return (
        <SelectAnswer/>
    )
}
export default App;