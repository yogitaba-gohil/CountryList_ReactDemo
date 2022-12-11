import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
        <Route path="country/:name" element={ <CountryDetails/> } />
        
      </Routes>
    </div>
  );
}

export default App;
