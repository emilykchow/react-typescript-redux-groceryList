import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CityListenersChart from "./components/Dashboard/CityListenersChart";
import Home from "./Home";

export default function RoutesFiles() {
    return (
    <Router>
        <Routes >
            <Route path="/dashboard" element={<CityListenersChart />} />        
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
    )

}

