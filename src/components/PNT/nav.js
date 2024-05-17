import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef } from 'react';
import '../PNT/css/nav.css';
export function Nav(){
    const navigate = useNavigate();
    function Logout(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "logged out successfully");

        navigate("/");
           
    }
    const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    };
    return(
        <header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Add vol</a>
				
				<a href="/#">About </a>
                <button  className="logout"onClick={Logout}>logout</button>
                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    );
}
export default Nav;