import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");
    };
    return(
          <nav
            className="
            bg-black
            text-white
            px-8
            py-4
            flex
            justify-between
            items-center
            "
        >

            <h1 className="text-2xl font-bold">
                Smart Todo
            </h1>

            <button
                onClick={logout}
                className="
                bg-red-500
                px-4
                py-2
                rounded
                hover:bg-red-600
                "
            >
                Logout
            </button>
            </nav>
    )
}
   export default Navbar;