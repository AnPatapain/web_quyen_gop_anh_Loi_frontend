import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddPost from "./pages/AddPost.jsx";
import Login from "./pages/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/add"} element={<AddPost/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
