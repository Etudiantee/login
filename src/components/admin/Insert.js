import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matricule: '',
      nom: '',
      prenom: '',
      base: '',
      college: '',
      secteur: '',
      pass: '',
      errorMessage: '' // State variable to hold error message
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // Fetch contact details when city is changed
    if (name === 'matricule') {
      axios.get(`http://localhost/devtest/reactjs/contacts.php?matricule=${value}`)
        .then(response => {
          const { data } = response;
          if (data.length > 0) {
            const {  matricule, nom, prenom, base, college, secteur, pass } = data[0];
            this.setState({  matricule, nom, prenom, base, college, secteur, pass });
          }
        })
        .catch(error => {
          console.error('Error fetching contact details:', error);
        });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
 
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
        alert('Password Updated for Contacts in ' + this.state.matricule);
      })
      .catch(error => {
        console.error('Error updating password for contacts:', error);
        if (error.response && error.response.data && error.response.data.error === "Matricule already exists") {
          // If the error indicates that matricule already exists, set state to display error message
          this.setState({ errorMessage: "Matricule already exists" });
        } else {
          // For other errors, you can handle as required
          this.setState({ errorMessage: "An error occurred while adding the contact" });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header text-center">Add New Contact</h1>
        <Link to="/AdminDashboard" className="btn btn-primary btn-xs">Home</Link>
        <div className="col-md-12">
          <div className="panel panel-primary">
            <div className="panel-body">
              {this.state.errorMessage && ( // Display error message if it exists
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMessage}
                </div>
              )}
              <form onSubmit={this.handleSubmit}>
                <label>Matricule</label>
                <input type="text" name="matricule" className="form-control" value={this.state.matricule} onChange={this.handleChange} />

                <label>Nom</label>
                <input type="text" name="nom" className="form-control" value={this.state.nom} onChange={this.handleChange} disabled />

                <label>Prénom</label>
                <input type="text" name="prenom" className="form-control" value={this.state.prenom} onChange={this.handleChange} disabled />

               
                <label>Base</label>
                <input type="text" name="base" className="form-control" value={this.state.base} onChange={this.handleChange} disabled />

                <label>Collège</label>
                <input type="text" name="college" className="form-control" value={this.state.college} onChange={this.handleChange} disabled/>

                <label>Secteur</label>
                <input type="text" name="secteur" className="form-control" value={this.state.secteur} onChange={this.handleChange} disabled/>

                <label>Password</label>
                <input type="text" name="pass" className="form-control" value={this.state.pass} onChange={this.handleChange} />

                <br />
                <input type="submit" className="btn btn-primary btn-block" value="Create Contact" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;

