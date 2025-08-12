import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Layout from "./Layout";
import Hero from "./pages/Hero";
import Forecast from "./pages/Forecast";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Hero />} />
                        <Route path="/forecast" element={<Forecast />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
