import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/home";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
