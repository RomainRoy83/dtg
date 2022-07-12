import { Routes, Route } from "react-router-dom";
import Home from '../src/screens/Home'
import FaqPage from '../src/screens/FaqPage'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/faq" element={<FaqPage />}/>
      </Routes> 
    </div>
  );
}

export default App;
