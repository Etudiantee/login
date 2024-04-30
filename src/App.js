import Nav from './components/nav';
import Login from './components/login';
import { BrowserRouter  as Router,Routes, Route } from "react-router-dom";
import React from 'react';
import Registration from './components/Registration';
import Protected from './components/Protected';


 
function App() {
  
      return (
        <Router>
        <div>
          <Routes>
           
            <Route exact path='/' Component={Login} />
              <Route path='/nav' element={<Protected Component={Nav}/>}  />
            </Routes>
        </div>
        </Router>
      );
  
}


export default App;
