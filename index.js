import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./pages/App"
import { ContextProvider } from "./pages/Context"

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App/>
        </Router>
    </ContextProvider>, document.getElementById('root'))