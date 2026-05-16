import{BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
const Navigation = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Navigation;