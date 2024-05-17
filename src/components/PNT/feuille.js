import '../PNT/css/feuille.css';

import axios from 'axios';
import Nav from './nav';



import React, { useEffect,useState, Component } from 'react';


const Feuille = () => {
  const [dayOfOrigin, setDayOfOrigin] = useState('');
  const [flightNo, setFlightNo] = useState('');
  const [fromairport, setFromairport] = useState('');
  const [toairport, setToairport] = useState('');
  const [expected, setExpected] = useState('');
  const [out, setOut] = useState('');
const [inTime, setInTime] = useState('');
const [blocktime, setBlocktime] = useState('');
const [off, setOff] = useState('');
const [on, setOn] = useState('');
const [flighttime, setFlighttime] = useState('');
const [previousFuel, setPreviousFuel] = useState('');
const [addedFuel, setAddedFuel] = useState('');
const [departureFuel, setDepartureFuel] = useState('');
const [fuelUsed, setFuelUsed] = useState('');
const [remainingFuel, setRemainingFuel] = useState('');
const [TLC, setTLC] = useState('');

  const [flights, setFlights] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'dayOfOrigin':
        setDayOfOrigin(value.trim());
        break;
      case 'flightNo':
        setFlightNo(value);
        break;
      case 'fromairport':
        setFromairport(value);
        break;
      case 'toairport':
        setToairport(value);
        break;
        case 'expected':
          setExpected(value);
        break;
        case 'out':
    setOut(value.trim());
    break;
case 'inTime':
    setInTime(value.trim());
    break;
case 'blocktime':
  setBlocktime(value.trim());
    break;
case 'off':
    setOff(value.trim());
    break;
case 'on':
    setOn(value.trim());
    break;
case 'flighttime':
  setFlighttime(value.trim());
    break;
case 'previousFuel':
    setPreviousFuel(value.trim());
    break;
case 'addedFuel':
    setAddedFuel(value.trim());
    break;
case 'departureFuel':
    setDepartureFuel(value.trim());
    break;
case 'fuelUsed':
    setFuelUsed(value.trim());
    break;
case 'remainingFuel':
    setRemainingFuel(value.trim());
    break;
    case 'TLC':
      setTLC(value.trim());
      break;
      default:
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the data object with all the input values
      const data = {
        dayOfOrigin,
        TLC,
        flightNo,
        fromairport,
        toairport,
        expected,
        out,
     inTime,
     blocktime,
      off,
      on,
      flighttime,
      previousFuel,
      addedFuel,
     departureFuel,
      fuelUsed,
      remainingFuel,
       
        // Add other input values here...
      };

      // Send a POST request to feuille.php with the input data
      const response = await axios.post('http://localhost/devtest/reactjs/feuille.php', data);
      
      // Handle the response if needed
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


  const fetchFlights = async () => {
    try {
      const response = await axios.get(`http://localhost/devtest/reactjs/feuille.php/?dayOfOrigin=${dayOfOrigin}&TLC=${TLC}`); // GET request with optional dayOfOrigin parameter
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  useEffect(() => {
    fetchFlights(); // Fetch all flights on component mount
  }, [dayOfOrigin,TLC]); // Empty dependency array ensures fetching only on initial render

  


  return (
    <div className='all'>
      {window.location.pathname !== "/login" && <Nav />}
      <nav className="nav">
        <img
          className="logo"
          src="tunisair.png"
          alt="Tunisair Logo"
        />
        <h1 className="title">JOURNEY LOG</h1>
        <div className="details">
          <div className="detail">{/* Replace with placeholder value */}</div>
          <div className="detail">
          <div className='input-container'>
      <input
                    type="date"
                    name="dayOfOrigin"
                    className="t1"
                    value={dayOfOrigin}
                    onChange={handleChange}
                  onBlur={fetchFlights}
                  /></div>
                   <div className='input-container'>
      <input
                    type="text"
                    name="TLC"
                    className="t1"
                    value={TLC}
                    onChange={handleChange}
                  onBlur={fetchFlights}
                  /></div>
          </div>
          <div className="detail">
            <span className="label">Month: </span>
            <span className="value">@mois</span>
          </div>
          <div className="detail">
            <span className="label">Year: </span>
            <span className="value">@anne</span>
          </div>
          <div className="detail">
            <span className="label">Airplane Reg: </span>
            <span className="value">@avion</span>
          </div>
          <div className="detail">
            <span className="label">Printing Date:</span>
            <span className="value">@dateImpression</span>
          </div>
          <div className="detail">
            <span className="label">N°FDL: </span>
            <span className="value">@fdlNumber</span>
          </div>
          <div className="detail">
            <span className="label">Edition Number: </span>
            <span className="value">@editionNumber</span>
          </div>
        </div>
      </nav>
     
      <div className="App">
     
        <div className="table-container" style={{paddingTop:'60px'}}>
          <table border={1} cellSpacing={0} style={{   top: 0,
width: '100%' }}>
           
            <thead >
              <tr>
                <th rowSpan={3}>Day</th>
                <th rowSpan={3}>FLT ID</th>
                <th colSpan={2}>Leg</th>
                <th colSpan={7}>Flight Hours UTC</th>
                <th colSpan={5}>Fuel(Kilograms)</th>
              </tr>
              <tr>
                <th rowSpan={2}>From</th>
                <th rowSpan={2}>To</th>
                <th rowSpan={2}>Expected Dep Time</th>
                <th colSpan={3}>Block times</th>
                <th colSpan={3}>Airborne</th>
                <th rowSpan={2}>Remain Fuel Previous Leg</th>
                <th rowSpan={2}>Added fuel</th>
                <th rowSpan={2}>Fuel at Departure</th>
                <th rowSpan={2}>Fuel Used</th>
                <th rowSpan={2}>Remaining Fuel</th>
              </tr>
              <tr>
                <th>Out</th>
                <th>In</th>
                <th>Block Time</th>
                <th>Off</th>
                <th>On</th>
                <th>Flight Time</th>
              </tr>
            </thead>
            <tbody>
                  {flights.length > 0 && ( flights.map((flight) => (
                <tr key={flight.id}> {/* Add unique identifier for each row */}
                  <td>{flight.DAY_OF_ORIGIN}</td>
             
                  <td>{flight.FLIGHT_NO}</td>  
                  <td>{flight.FROM_AIRPORT}</td>
                  <td>{flight.TO_AIRPORT}</td>
                  <td>{flight.EXPECTED_DEPARTURE_TIME}</td>
                  <td className='input-container'>
  <input
    type='time'
    name='out' // Nom de l'attribut pour identifier le champ de saisie
    value={out} // La valeur du champ de saisie est liée à la variable d'état 'out'
    onChange={(event) => setOut(event.target.value)} // Mettre à jour la variable d'état 'out' lorsque la saisie change
    onBlur={fetchFlights} // Facultatif : déclenche une fonction lorsque le champ de saisie perd le focus
    min='00:00' // Valeur minimale autorisée
    max='23:59' // Valeur maximale autorisée
    step='60' // Incrément de l'heure en secondes (ici, une minute)
    // Ajoutez d'autres attributs au besoin
  />
</td>
<td className='input-container'>
  <input
    type='time'
    name='inTime'
    value={inTime}
    onChange={(event) => setInTime(event.target.value)}
    onBlur={fetchFlights}
    min='00:00'
    max='23:59'
    step='60'
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='blocktime'
    value={blocktime}
    onChange={(event) => setBlocktime(event.target.value)}
    onBlur={fetchFlights}
  />
</td>
<td className='input-container'>
  <input
    type='time'
    name='off'
    value={off}
    onChange={(event) => setOff(event.target.value)}
    onBlur={fetchFlights}
    min='00:00'
    max='23:59'
    step='60'
  />
</td>
<td className='input-container'>
  <input
    type='time'
    name='on'
    value={on}
    onChange={(event) => setOn(event.target.value)}
    onBlur={fetchFlights}
    min='00:00'
    max='23:59'
    step='60'
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='flighttime'
    value={flighttime}
    onChange={(event) => setFlighttime(event.target.value)}
    onBlur={fetchFlights}
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='previousFuel'
    value={previousFuel}
    onChange={(event) => setPreviousFuel(event.target.value)}
    onBlur={fetchFlights}
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='addedFuel'
    value={addedFuel}
    onChange={(event) => setAddedFuel(event.target.value)}
    onBlur={fetchFlights}
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='departureFuel'
    value={departureFuel}
    onChange={(event) => setDepartureFuel(event.target.value)}
    onBlur={fetchFlights}
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='fuelUsed'
    value={fuelUsed}
    onChange={(event) => setFuelUsed(event.target.value)}
    onBlur={fetchFlights}
  />
</td>
<td className='input-container'>
  <input
    type='text'
    name='remainingFuel'
    value={remainingFuel}
    onChange={(event) => setRemainingFuel(event.target.value)}
    onBlur={fetchFlights}
  />
</td>

                  {/* ... other table cells displaying flight data */}
                </tr>))
            )}
            </tbody>
          </table>
         
        </div>
        <div className="equipage-container">
          <h2>Equipage Table</h2>
          {/* Add Equipage table content */}
        </div>
      </div>
      <div className="table-container">
      <table border={1} cellspacing={0} style={{width:'100%',  position: 'absolute'
,top: '190px'}} >
    <thead>
        <tr>
            <th>DC</th>
            <th>DL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="number" name="DC" max={100} /></td>
            <td><input type="text" name="DL"  style={{width:'100%'}}/></td>
        </tr>
    </tbody>
</table><button onSubmit={handleSubmit} type="submit">Submit</button></div>
    </div>
  );
}

export default Feuille;