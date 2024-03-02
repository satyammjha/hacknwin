import './App.css'
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from './Components/Properties/Properties';
function App() {
  return (

    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </>
    </Router>
  )
}
export default App;