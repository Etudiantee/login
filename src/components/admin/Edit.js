import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contacts, setContact] = useState({
    matricule: '',
    nom: '',
    prenom: '',
    base: '',
    college: '',
    secteur: '',
    pass: ''
  });

  useEffect(() => {
    axios.get(`http://localhost/devtest/reactjs/contacts.php/?id=${id}`)
      .then(response => {
        setContact(response.data);
      })
      .catch(error => console.error('Error fetching contact details:', error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('matricule', contacts.matricule);
    formData.append('nom', contacts.nom);
    formData.append('prenom', contacts.prenom);
    formData.append('base', contacts.base);
    formData.append('college', contacts.college);
    formData.append('secteur', contacts.secteur);
    formData.append('pass', contacts.pass);
    
    axios.post(`http://localhost/devtest/reactjs/contacts.php/?id=${id}`, formData)
      .then(response => {
        if (response.status === 200) {
          alert('PNT mis à jour avec succès.');
          navigate('/'); // Redirect to home page after successful update
        }
      })
      .catch(error => console.error('Erreur lors de la mise à jour de PNT:', error));
  };

  return (
    <div className="container">
      <h1 className="page-header text-center">Mise à jour PNT</h1>
      <Link to="/" className="btn btn-primary btn-xs">Retour</Link>
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form onSubmit={handleSubmit}>
              <label>Matricule</label>
              <input type="text" name="matricule" className="form-control" value={contacts.matricule} onChange={handleChange}  />

              <label>Nom</label>
              <input type="text" name="nom" className="form-control" value={contacts.nom} onChange={handleChange} disabled />

              <label>Prénom</label>
              <input type="text" name="prenom" className="form-control" value={contacts.prenom} onChange={handleChange} disabled/>

              <label>Base</label>
              <input type="text" name="base" className="form-control" value={contacts.base} onChange={handleChange} disabled/>

              <label>Collège</label>
              <input type="text" name="college" className="form-control" value={contacts.college} onChange={handleChange} disabled/>

              <label>Secteur</label>
              <input type="text" name="secteur" className="form-control" value={contacts.secteur} onChange={handleChange} disabled/>

              <label>Mot de passe</label>
              <input type="text" name="pass" className="form-control" value={contacts.pass} onChange={handleChange} />

              <br />
              <input type="submit" className="btn btn-primary btn-block" value="Mise à jour PNT" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
