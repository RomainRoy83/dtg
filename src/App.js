import { Routes, Route } from "react-router-dom";
import Home from '../src/screens/Home'
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reservation" element={<Reservation/>}/>
      </Routes> 
    </div>
  );
}

export default App;