import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleColumn from "./components/SingleColumn";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import CreateUser from "./components/pages/CreateUser";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <SingleColumn>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<CreateUser />} />
          </Routes>
          <Routes>
            <Route path="/edit" element={<h2>Edit</h2>} />
          </Routes>
          <Routes>
            <Route path="/delete" element={<h2>Delete</h2>} />
          </Routes>
        </SingleColumn>
      </BrowserRouter>
    </>
  );
}

export default App;