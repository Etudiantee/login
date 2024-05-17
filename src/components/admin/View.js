import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import '../admin/css/recherche.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            currentPage: 1,
            contactsPerPage: 50,
            searchQuery: '' // Initialize search query state
        };
        this.headers = [
            { key: 'id', label: 'Id' },
            { key: 'matricule', label: 'Matricule' },
            { key: 'nom', label: 'Nom' },
            { key: 'prenom', label: 'Prénom' },
            { key: 'base', label: 'Base' },
            { key: 'college', label: 'Collège' },
            { key: 'secteur', label: 'Secteur' },
            { key: 'pass', label: 'Pass' }
        ];
        this.deleteContact = this.deleteContact.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevios = this.handlePrevios.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this); // Bind handleSearchChange function
    }

    componentDidMount() {
        this.fetchContacts();
    }

    fetchContacts() {
        const url = 'http://localhost/devtest/reactjs/contacts.php/';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ contacts: data });
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }

    deleteContact(id, event) {
        event.preventDefault();
        if(window.confirm("Are you sure want to delete?")) {
            axios.post(`http://localhost/devtest/reactjs/contacts.php/?delete=${id}`)
                .then(response => {
                    console.log(response);
                    if(response.status === 200) {
                        alert("Contact deleted successfully");
                        this.fetchContacts(); // Refresh contacts after deletion
                    }
                })
                .catch(error => {
                    console.error('Error deleting contact:', error);
                });
        }
    }

    handleNext() {
        const { currentPage } = this.state;
        const { contactsPerPage } = this.state;
        const pageCount = Math.ceil(this.state.contacts.length / contactsPerPage);
        if (currentPage < pageCount) {
            this.setState({ currentPage: currentPage + 1 });
        }
    }

    handlePrevios() {
        const { currentPage } = this.state;
        if (currentPage > 1) {
            this.setState({ currentPage: currentPage - 1 });
        }
    }

    handleSearchChange(event) {
        this.setState({ searchQuery: event.target.value }); // Update searchQuery state with input value
    }

    render() {
        const { contacts, currentPage, contactsPerPage, searchQuery } = this.state;

        // Filter contacts based on search query
        const filteredContacts = contacts.filter(contact => {
            const { nom, email, base, college, secteur, pass } = contact;
            return (
                (nom && nom.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (email && email.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (base && base.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (college && college.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (secteur && secteur.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (pass && pass.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        });
        const indexOfLastContact = currentPage * contactsPerPage;
        const indexOfFirstContact = indexOfLastContact - contactsPerPage;
        const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

        return (
            <div className="container">
                <h1>Admin</h1>
               

                {/* Search input field */}
        



<div class="ui-input-container">
  <input
   placeholder="Rechercher un PNT"
   value={searchQuery}
   onChange={this.handleSearchChange}
    required=""
   
    class="ui-input"
    type="text"
  />
  <div class="ui-input-underline"></div>
  <div class="ui-input-highlight"></div>
  <div class="ui-input-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="currentColor"
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      ></path>
    </svg>
  </div>
</div>



                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {this.headers.map(h => <th key={h.key}>{h.label}</th>)}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentContacts.map((item, key) => (
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.matricule}</td>
                                <td>{item.nom}</td>
                                <td>{item.prenom}</td>
                                <td>{item.base}</td>
                                <td>{item.college}</td>
                                <td>{item.secteur}</td>
                                <td>{item.pass}</td>
                                <td>
                                    <Link to={`/Edit/${item.id}`} className="btn btn-primary btn-xs">Edit</Link>
                                    <Link to="#" onClick={(event) => this.deleteContact(item.id, event)} className="btn btn-danger btn-xs">Supprimer</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='d-flex justify-content-end'>
                    <Pagination>
                        <Pagination.Prev onClick={this.handlePrevios} disabled={currentPage === 1} />
                        {Array(Math.ceil(filteredContacts.length / contactsPerPage)).fill(null).map((_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => this.setState({ currentPage: index + 1 })}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={this.handleNext} disabled={currentPage === Math.ceil(filteredContacts.length / contactsPerPage)} />
                    </Pagination>
                </div>
            </div>
        );
    }
}

export default Contact;
