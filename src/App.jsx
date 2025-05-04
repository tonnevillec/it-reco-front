import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />}>
            </Route>
        </Routes>

        <ToastContainer />
    </BrowserRouter>
  )
}

export default App
