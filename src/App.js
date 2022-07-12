import CavernDetails from "./screens/CavernDetails";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [caverns, setCaverns] = useState([]);
  useEffect(() => {
    axios
      .get("https://sophiel-64.github.io/DTG-dans-ta-grotte-API/api/all.json")
      .then((res) => setCaverns(res.data));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <CavernDetails
              caverns={caverns}
              setCaverns={setCaverns}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
