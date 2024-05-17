import React, { useState } from 'react';
import Nav from './nav';

import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Feuille1() {
   
    const [collapsedRows, setCollapsedRows] = useState(Array(10).fill(false));
    

    const toggleRow = (index) => {
        const newCollapsedRows = [...collapsedRows];
        newCollapsedRows[index] = !newCollapsedRows[index];
        setCollapsedRows(newCollapsedRows);
    };

   
    return (
        
        <React.Fragment>
              <Nav />
              
              <div className='together' style={{position:''}}>
              
             
        
        <div className="details">
        <img
          className="logo"
          src="tunisair.png" // Replace with your logo image path
          alt="Tunisair Logo"
        />
        <div className="detail">
        
       
  <span className="label">DCOA/CICO</span>
  <span className="value">@dcoaCico</span></div></div>
        {window.location.pathname !== "/login" && <Nav />}  {/* Conditionally render Nav */}
        
       
        <nav className="nav">
        
          <h1 className="title">JOURNEY LOG</h1>
          
          
          <div className="details">
            <div className="detail">
              
                {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">Month: </span>
              <span className="value">@mois</span>  {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">Year: </span>
              <span className="value">@anne</span>  {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">Airplane Reg: </span>
              <span className="value">@avion</span>  {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">Printing Date:</span>
              <span className="value">@dateImpression</span>  {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">N°FDL: </span>
              <span className="value">@fdlNumber</span>  {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">Edition Number: </span>
              <span className="value">@editionNumber</span>  {/* Replace with placeholder value */}
            </div>
            <div className="detail">
              <span className="label">Visa DCOA</span>
            </div>
          </div>
        </nav>
      <body>
           
            <div style={{marginTop:'150px'}}> 
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <table className='tab1' style={{ width: '700px' }} border={1}>

                        <tr onClick={() => toggleRow(0)} className="cursor-pointer">
                            <td style={{ width: '700px', height: '30px', fontSize: '25px', paddingLeft: '40%' }} onClick={() => toggleRow(0)}>{"Flight Hours"}

                                {collapsedRows[0]}

                            </td>

                        </tr>
                        {collapsedRows[0] && (
                            <tr className="collapse-row">
                                <td colSpan="4" className="bg-light">
                                    <form className='form1'>
                                        <div className="form-row" >
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Expected dep Time</label>
                                                <input type="text" className="form-control" id="inputEmail4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">OUT </label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">IN </label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Block Time</label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">ON</label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">OFF</label>
                                                <input type="text" className="form-control" id="inputPassword4" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Flight Time</label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                        </div>
                                        
                                        
                                        <button type="submit" className="btn-btn-primary">Sign in</button>
                                    </form>
                                </td>
                            </tr>
                        )}

                    </table>


                    <table className='tab2' style={{ width: '700px' }} border={1}>

                        <tr onClick={() => toggleRow(1)} className="cursor-pointer">
                            <td style={{ width: '700px', height: '30px', fontSize: '25px', paddingLeft: '40%' }} onClick={() => toggleRow(1)}>{"Fuel(Kilograms)"}

                                {collapsedRows[1]}

                            </td>

                        </tr>
                        {collapsedRows[1] && (
                            <tr className="collapse-row">
                                <td colSpan="4" className="bg-light">
                                    <form className='form1'>
                                    <div className="form-row" >
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Remain Fuel Previous Leg</label>
                                                <input type="text" className="form-control" id="inputEmail4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Added Fuel </label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Fuel at Departure </label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Used Fuel</label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Reamin Fuel</label>
                                                <input type="text" className="form-control" id="inputPassword4"  />
                                            </div>
                                            
                                        </div>
                                        
                                        
                                        <button type="submit" className="btn-btn-primary">Sign in</button>
                                    </form>
                                </td>
                            </tr>
                        )}

                    </table>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <table className='tab3' style={{ width: '700px' }} border={1}>

                        <tr onClick={() => toggleRow(2)} className="cursor-pointer">
                            <td style={{ width: '700px', height: '30px', fontSize: '25px', paddingLeft: '40%' }} onClick={() => toggleRow(2)}>{"Crew"}

                                {collapsedRows[2]}

                            </td>

                        </tr>
                        {collapsedRows[2] && (
                            <tr className="collapse-row">
                                <td colSpan="4" className="bg-light">
                                    <form className='form1'>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">nom</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Password</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Password</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress2">Address 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
                                </td>
                            </tr>
                        )}

                    </table>

                    <table className='tab3' style={{ width: '700px' }} border={1}>

                        <tr onClick={() => toggleRow(3)} className="cursor-pointer">
                            <td style={{ width: '700px', height: '30px', fontSize: '25px', paddingLeft: '40%' }} onClick={() => toggleRow(3)}>{"Dlay"}

                                {collapsedRows[3]}

                            </td>

                        </tr>
                        {collapsedRows[3] && (
                            <tr className="collapse-row">
                                <td colSpan="4" className="bg-light">
                                    <form className='form1'>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">nom</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Password</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Password</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress2">Address 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
                                </td>
                            </tr>
                        )}

                    </table>
                </div>
            </div></body>
            </div>
            

   
        </React.Fragment>
    );
}

export default Feuille1;
