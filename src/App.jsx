import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";


function App() {
    return (
        <Router>
            <HomePage />
            <div>
                <Switch>

                    <Route exact path="/" element={<HomePage />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
