import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../PNT/css/style.css';

class Inserer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DAY_OF_ORIGIN: '',
      TLC: '',
      FLIGHT_NO: '',
      EXPECTED_DEPARTURE_TIME: '',
      FROM_AIRPORT: '',
      TO_AIRPORT: '',
      OUT_TIME: '',
      IN_TIME: '',
      BLOCK_TIME: '',
      OFF_TIME: '',
      ON_TIME: '',
      FLIGHT_TIME: '',
      PREVIOUS_FUEL: '',
      ADDED_FUEL: '',
      DEPARTURE_FUEL: '',
      FUEL_USED: '',
      REMAINING_FUEL: '',
      errorMessage: '',
      contacts: [],
      selectedContact: null,
      searchTLC: '', 
      searchDayOfOrigin: '', 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    if (name === 'TLC' || name === 'searchTLC' || name === 'searchDayOfOrigin' || name === 'DAY_OF_ORIGIN') {
      // Fetch contact details when TLC or DAY_OF_ORIGIN is changed
      this.fetchContactDetails(this.state.searchTLC, this.state.searchDayOfOrigin);
    }
  }

  fetchContactDetails(TLC, DAY_OF_ORIGIN) {
    axios.get(`http://localhost/devtest/reactjs/feuille.php?TLC=${TLC}&DAY_OF_ORIGIN=${DAY_OF_ORIGIN}`)
      .then(response => {
        const { data } = response;
        if (data.length > 0) {
          this.setState({ contacts: data });
          if (data.length === 1) {
            const contact = data[0];
            this.setState({ ...contact, selectedContact: null });
          }
        } else {
          this.setState({ contacts: [], selectedContact: null });
        }
      })
      .catch(error => {
        console.error('Error fetching contact details:', error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Prepare form data
    const formData = new FormData();
    Object.entries(this.state).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Submit form data to update contact
    axios.post(`http://localhost/devtest/reactjs/feuille.php`, formData)
      .then(response => {
        console.log(response);
        alert('Contact added successfully');
      })
      .catch(error => {
        console.error('Error adding contact:', error);
        this.setState({ errorMessage: "An error occurred while adding the contact" });
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">Add New Contact</h1>
        <Link to="/" className="btn btn-primary btn-xs">Home</Link>
        <div className="col-md-12">
          <div className="panel panel-primary">
            <div className="panel-body">
              {this.state.errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMessage}
                </div>
              )}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="searchTLC"
                    className="form-control"
                    placeholder="Search by TLC"
                    value={this.state.searchTLC}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="searchDayOfOrigin"
                    className="form-control"
                    placeholder="Search by Day of Origin"
                    value={this.state.searchDayOfOrigin}
                    onChange={this.handleChange}
                  />
                </div>
                {/* Table for displaying contact details */}
                {this.state.contacts.length > 0 && (
                  <table className="table table-bordered" border={1}>
                    {/* Table headers */}
                    <thead>
                    <tr>
    <td>DAY_OF_ORIGIN</td>
    <th>TLC</th>
    <th>FLIGHT_NO</th>
    <th>EXPECTED_DEPARTURE_TIME</th>
    <th>FROM_AIRPORT</th>
    <th>TO_AIRPORT</th>
    {/* Add more headers here */}
    <th>OUT_TIME</th>
    <th>IN_TIME</th>
    <th>BLOCK_TIME</th>
    <th>OFF_TIME</th>
    <th>ON_TIME</th>
    <th>FLIGHT_TIME</th>
    <th>PREVIOUS_FUEL</th>
    <th>ADDED_FUEL</th>
    <th>DEPARTURE_FUEL</th>
    <th>FUEL_USED</th>
    <th>REMAINING_FUEL</th>
    {/* Add more headers as needed */}
  </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                      {/* Map through contacts and display each contact */}
                      {this.state.contacts.map((contact, index) => (
                            <tr key={index}>
                            <td><input type="text" name="DAY_OF_ORIGIN" className="form-control" value={this.state.DAY_OF_ORIGIN} onChange={this.handleChange} />{contact.DAY_OF_ORIGIN}</td>
                            <td>{contact.TLC}</td>
                            <td>{contact.FLIGHT_NO}</td>
                            <td>{contact.EXPECTED_DEPARTURE_TIME}</td>
                            <td>{contact.FROM_AIRPORT}</td>
                            <td>{contact.TO_AIRPORT}</td>
                            {/* Add more cells for additional contact details */}
                            <td>{contact.OUT_TIME}</td>
                            <td>{contact.IN_TIME}</td>
                            <td>{contact.BLOCK_TIME}</td>
                            <td>{contact.OFF_TIME}</td>
                            <td>{contact.ON_TIME}</td>
                            <td>{contact.FLIGHT_TIME}</td>
                            <td>{contact.PREVIOUS_FUEL}</td>
                            <td>{contact.ADDED_FUEL}</td>
                            <td>{contact.DEPARTURE_FUEL}</td>
                            <td>{contact.FUEL_USED}</td>
                            <td>{contact.REMAINING_FUEL}</td>
                            {/* Add more cells for additional contact details */}
                          </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {/* Form for adding or updating contact details */}
               
                    <tr> <th>DAY_OF_ORIGIN</th>
    <th>TLC</th>
    <th>FLIGHT_NO</th>
    <th>EXPECTED_DEPARTURE_TIME</th>
    <th>FROM_AIRPORT</th>
    <th>TO_AIRPORT</th>
    {/* Add more headers here */}
    <th>OUT_TIME</th>
    <th>IN_TIME</th>
    <th>BLOCK_TIME</th>
    <th>OFF_TIME</th>
    <th>ON_TIME</th>
    <th>FLIGHT_TIME</th>
    <th>PREVIOUS_FUEL</th>
    <th>ADDED_FUEL</th>
    <th>DEPARTURE_FUEL</th>
    <th>FUEL_USED</th>
    <th>REMAINING_FUEL</th></tr>
    <tr>
   <td></td> 
 
  
   
   <td> <input type="text" name="TLC" className="form-control" value={this.state.TLC} onChange={this.handleChange} /></td>
 
  
   <td> <input type="text" name="FLIGHT_NO" className="form-control" value={this.state.FLIGHT_NO} onChange={this.handleChange} /></td>

 
  <td>  <input type="time" name="EXPECTED_DEPARTURE_TIME" className="form-control" value={this.state.EXPECTED_DEPARTURE_TIME} onChange={this.handleChange} /></td>


   <td> <input type="text" name="FROM_AIRPORT" className="form-control" value={this.state.FROM_AIRPORT} onChange={this.handleChange} /></td>
 

  <td>  <input type="text" name="TO_AIRPORT" className="form-control" value={this.state.TO_AIRPORT} onChange={this.handleChange} /></td>
 

   <td> <input type="time" name="OUT_TIME" className="form-control" value={this.state.OUT_TIME} onChange={this.handleChange} /></td>

   <td> <input type="time" name="IN_TIME" className="form-control" value={this.state.IN_TIME} onChange={this.handleChange} /></td>
  
   <td> <input type="time" name="BLOCK_TIME" className="form-control" value={this.state.BLOCK_TIME} onChange={this.handleChange} /></td>
 
    <td><input type="time" name="OFF_TIME" className="form-control" value={this.state.OFF_TIME} onChange={this.handleChange} /></td>
 
   <td> <input type="time" name="ON_TIME" className="form-control" value={this.state.ON_TIME} onChange={this.handleChange} /></td>

   <td> <input type="time" name="FLIGHT_TIME" className="form-control" value={this.state.FLIGHT_TIME} onChange={this.handleChange} /></td>

   <td> <input type="text" name="PREVIOUS_FUEL" className="form-control" value={this.state.PREVIOUS_FUEL} onChange={this.handleChange} /></td>

   <td> <input type="text" name="ADDED_FUEL" className="form-control" value={this.state.ADDED_FUEL} onChange={this.handleChange} /></td>
 
 <td>   <input type="text" name="DEPARTURE_FUEL" className="form-control" value={this.state.DEPARTURE_FUEL} onChange={this.handleChange} /></td>

 <td>   <input type="text" name="FUEL_USED" className="form-control" value={this.state.FUEL_USED} onChange={this.handleChange} /></td>
 
   <td> <input type="text" name="REMAINING_FUEL" className="form-control" value={this.state.REMAINING_FUEL} onChange={this.handleChange} /></td>

  </tr>
  {/* Add more input fields for other contact details */}
  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inserer;
