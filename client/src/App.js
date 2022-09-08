import { BrowserRouter, Routes,Route, Link } from "react-router-dom";

import Home from "./components/Home";

import Add from "./components/Add";

import Update from "./components/Update";
function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/"  element={<Home />}></Route>
    <Route path="/add" element={<Add />}></Route>
    <Route path="/update/:id" element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
