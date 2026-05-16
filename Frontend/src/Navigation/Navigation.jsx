import{BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Navigation = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Navigation;