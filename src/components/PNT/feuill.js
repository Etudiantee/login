import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Insert extends React.Component {
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
      errorMessage: '', // State variable to hold error message
      contacts: [], // State variable to hold contacts with the same matricule and nom
      selectedContact: null // State variable to hold the selected contact
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // Fetch contact details when matricule is changed
    if (name === 'TLC') {
      axios.get(`http://localhost/devtest/reactjs/contacts.php?TLC=${value}`)
        .then(response => {
          const { data } = response;
          if (data.length > 0) {
            this.setState({ contacts: data });
            if (data.length === 1) {
              const { nom, prenom, base, college, secteur, pass } = data[0];
              this.setState({ nom, prenom, base, college, secteur, pass, selectedContact: null });
            } else {
              // If there are multiple contacts, reset fields and let the user choose
              this.setState({ nom: '', prenom: '', base: '', college: '', secteur: '', pass: '' });
            }
          } else {
            // If no contact found, reset fields
            this.setState({ nom: '', prenom: '', base: '', college: '', secteur: '', pass: '', contacts: [], selectedContact: null });
          }
        })
        .catch(error => {
          console.error('Error fetching contact details:', error);
        });
    }
  }

  handleContactSelect(contact) {
    // Set the selected contact
    const { nom, prenom, base, college, secteur, pass } = contact;
    this.setState({ nom, prenom, base, college, secteur, pass, selectedContact: contact });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Check if a contact is selected
    if (!this.state.selectedContact) {
      // Handle the case where no contact is selected
      this.setState({ errorMessage: "Please select a contact" });
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('matricule', this.state.matricule);
    formData.append('nom', this.state.nom);
    formData.append('prenom', this.state.prenom);
    formData.append('base', this.state.base);
    formData.append('college', this.state.college);
    formData.append('secteur', this.state.secteur);
    formData.append('pass', this.state.pass); // Include the "pass" attribute
  
    // Submit form data to update contact password
    axios.post(`http://localhost/devtest/reactjs/contacts.php?matricule=${this.state.matricule}`, formData)
      .then(response => {
        console.log(response);
        alert('Contact added successfully');
      })
      .catch(error => {
        console.error('Error adding contact:', error);
        // Handle other errors as required
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
              {this.state.errorMessage && ( // Display error message if it exists
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMessage}
                </div>
              )}
              <form onSubmit={this.handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Matricule</td>
              <td>Nom</td>
              <td>Prénom</td>
              <td>Base</td>
              <td>Collège</td>
              <td>Secteur</td>
              <td>Password</td>
             
              </tr>
              <tr>
            <td>   <input type="text" name="matricule" className="form-control" value={this.state.matricule} onChange={this.handleChange} /></td> 

                
              <td> <input type="text" name="nom" className="form-control" value={this.state.nom} onChange={this.handleChange} disabled /></td>

              
              <td>  <input type="text" name="prenom" className="form-control" value={this.state.prenom} onChange={this.handleChange} disabled /></td>

               
              <td> <input type="text" name="base" className="form-control" value={this.state.base} onChange={this.handleChange} disabled /></td> 

                
               <td> <input type="text" name="college" className="form-control" value={this.state.college} onChange={this.handleChange} disabled /></td>

               
             <td>  <input type="text" name="secteur" className="form-control" value={this.state.secteur} onChange={this.handleChange} disabled /></td> 

               
               <td> <input type="text" name="pass" className="form-control" value={this.state.pass} onChange={this.handleChange} /></td> 
                </tr>
                <br />
                {this.state.contacts.length > 1 && (
                  <div>
                    <label>Select Contact:</label>
                    <select className="form-control" onChange={(e) => this.handleContactSelect(JSON.parse(e.target.value))}>
                      <option value="">-- Select Contact --</option>
                      {this.state.contacts.map((contact, index) => (
                        <option key={index} value={JSON.stringify(contact)}>{contact.nom} {contact.prenom}</option>
                      ))}
                    </select>
                  </div>
                )}
                <br />
                <input type="submit" className="btn btn-primary btn-block" value="Create Contact" />
                </table>
              </form>









            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Insert;
