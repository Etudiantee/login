import Nav from './components/PNT/nav';
import Login from './components/login/login';
import { BrowserRouter  as Router,Routes, Route } from "react-router-dom";
import React from 'react';
import Registration from './components/PNT/Registration';
import Protected from './components/login/Protected';
import Feuille from './components/PNT/feuille';
import Equipage from './components/PNT/Equipage';
import Feuille1 from './components/PNT/feuille1';
import Inserer from './components/PNT/feu';
import Insert from './components//PNT/feuill';

import AdminDashboard from './components/admin/AdminDashboard';
import Update from './components/admin/Edit';
import Create from './components/admin/Insert';
import Contact from './components/admin/View';

import Tab from './css/tab';
 
function App() {
  
      return (
        <Router>
        <div>
          <Routes>
           
            <Route exact path='/' Component={Login} />
              <Route path='/nav' element={<Protected Component={Nav}/>}  />
              <Route path='/feuille' element={<Protected Component={Feuille}/>}  />
              <Route path='/Equipage' element={<Protected Component={Equipage} />} />
              <Route path='/feuille1' element={<Protected Component={Feuille1}/>}  />
              <Route path='/tab' element={<Protected Component={Tab}/>}  />
              <Route path='/feu' element={<Protected Component={Inserer}/>}  />
              <Route path='/feuill' element={<Protected Component={Insert}/>}  />
              <Route path='/View' element={<Contact />} />
              <Route path="/Edit/:id" element={<Update />} />
             <Route path='/Insert' element={<Create />} />
            <Route path='/AdminDashboard' element={<AdminDashboard />} />

            </Routes>
        </div>
        </Router>
      );
  
}


export default App;
