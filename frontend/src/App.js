import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./Screens/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
