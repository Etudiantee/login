import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';

class Equipage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            currentPage: 1,
            contactsPerPage: 50,
            searchQuery: ''
        };
        this.headers = [
            { key: 'id', label: 'Id'},
            { key: 'CD', label: 'CD' },
            { key: 'Matricule', label: 'Matricule' },
            { key: 'key', label: 'key' },
            { key: 'VM', label: 'VM' },
            { key: 'VL', label: 'VL' }
        ];
        this.deleteContact = this.deleteContact.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevios = this.handlePrevios.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        this.fetchContacts();
    }

    fetchContacts() {
        const url = 'http://localhost/devtest/reactjs/equipe.php/';
        axios.get(url)
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    this.setState({ contacts: response.data });
                } else {
                    console.error('Invalid response:', response);
                }
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }

    deleteContact(id, event) {
        event.preventDefault();
        if(window.confirm("Are you sure want to delete?")) {
            axios.post(`http://localhost/devtest/reactjs/equipe.php/?delete=${id}`)
                .then(response => {
                    console.log(response);
                    if(response.status === 200) {
                        alert("Contact deleted successfully");
                        this.fetchContacts();
                    }
                })
                .catch(error => {
                    console.error('Error deleting contact:', error);
                });
        }
    }

    handleNext() {
        const { currentPage, contactsPerPage, contacts } = this.state;
        const pageCount = Math.ceil(contacts.length / contactsPerPage);
        if (currentPage < pageCount) {
            this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
        }
    }

    handlePrevios() {
        const { currentPage } = this.state;
        if (currentPage > 1) {
            this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
        }
    }

    handleSearchChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { contacts, currentPage, contactsPerPage, searchQuery } = this.state;

        const filteredContacts = contacts.filter(contact =>
            (contact.CD?.toLowerCase().includes(searchQuery.toLowerCase()) || '') &&
            (contact.Matricule?.toLowerCase().includes(searchQuery.toLowerCase()) || '') &&
            (contact.key?.toLowerCase().includes(searchQuery.toLowerCase()) || '') &&
            (contact.VM?.toLowerCase().includes(searchQuery.toLowerCase()) || '') &&
            (contact.VL?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
        );

        const indexOfLastContact = currentPage * contactsPerPage;
        const indexOfFirstContact = indexOfLastContact - contactsPerPage;
        const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

        return (
            <div className="container">
                
                <p><Link to="/Insert" className="btn btn-primary btn-xs">Add New Equipage</Link></p>

                <input
                    type="text"
                    placeholder="Search contacts"
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                />

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
                                <td>{item.CD}</td>
                                <td>{item.Matricule}</td>
                                <td>{item.key}</td>
                                <td>{item.VM}</td>
                                <td>{item.VL}</td>
                                <td>
                                    <Link to={`/Update/${item.id}`} className="btn btn-primary btn-xs">Update</Link>
                                    <Link to="#" onClick={(event) => this.deleteContact(item.id, event)} className="btn btn-danger btn-xs">Delete</Link>
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

export default Equipage;
