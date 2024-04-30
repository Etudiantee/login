import { useNavigate } from 'react-router-dom';
import './nav.css';
export function Nav(){
    const navigate = useNavigate();
    function Logout(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "logged out successfully");

        navigate("/");
    }
    return(
        <div className="form">
            <h3>dash</h3>
            <p  className="buttonlogout"onClick={Logout}>logout</p>
        </div>
    );
}
export default Nav;