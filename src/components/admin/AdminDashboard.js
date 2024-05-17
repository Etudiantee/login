// AdminDashboard.js
import { useNavigate } from 'react-router-dom';
import  { useRef } from 'react';
import '../admin/css/AdminDashboard.css';
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Update from '../admin/Edit';
import Create from '../admin/Insert';
import Contact from '../admin/View';
import DeleteContact from './Delete';
import Edit from './Editt';
import 'bootstrap/dist/css/bootstrap.min.css';
const AdminDashboard = () => {
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
  return (
    <div>
      <nav>
        <ul>
        
          <li  >
            <Link to="/">Accueil</Link>
          </li>
         
          <li>
            <Link to="/Insert">Ajouter</Link> {/* Changed "Contact" to "Insert" */}
          </li>
          <li>
            <Link to="/Editt/:matricule">Modifier</Link> {/* Changed "Contact" to "Insert" */}
          </li>
          <li>
            <Link to="/Edit">Feuille de Ligne</Link> 
          </li>
          <li>
            <Link to="/Delete">Supprimer</Link> 
          </li>
          
        </ul>
        <button class="Btn">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text" onClick={Logout}>Logout</div>
</button>

      </nav> 
     <Routes> 
    
      <Route path="/Insert" component={Create} />
     
      <Route path='/Delete' element={<DeleteContact />} /> 
      <Route path="/Editt/:matricule" element={<Edit />} />
      <Route path='/' element={<Contact />} />
              <Route path="/Edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
