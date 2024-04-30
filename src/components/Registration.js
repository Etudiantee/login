
import React, { useState, useEffect } from 'react';
import './Registration.css';
function Registration(){
    const [matricule, setMatricule] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [base, setBase] = useState('');
    const [secteur, setSecteur] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() =>{
        setTimeout(function(){
        setMsg("");
        },5000)
    },[msg])

    const handleInputChange =(e , type)=> {
        switch(type){
         case "matricule":
             setError("");
             setMatricule(e.target.value);
             if(e.target.value === ""){
                 setError("Matricule has left blank");
             }
             break;
     
             case "nom":
             setError("");
             setNom(e.target.value);
             if(e.target.value === ""){
                 setError("Nom has left blank");
             }
             break;
             case "prenom":
             setError("");
             setPrenom(e.target.value);
             if(e.target.value === ""){
                 setError("Prenom has left blank");
             }
             break;
             case "base":
             setError("");
             setBase(e.target.value);
             if(e.target.value === ""){
                 setError("Base has left blank");
             }
             break;
             case "secteur":
             setError("");
             setSecteur(e.target.value);
             if(e.target.value === ""){
                 setError("Secteur has left blank");
             }
             break;
             case "email":
             setError("");
             setEmail(e.target.value);
             if(e.target.value === ""){
                 setError("Email has left blank");
             }
             break;

             case "pass1":
             setError("");
             setPass1(e.target.value);
             if(e.target.value === ""){
                 setError("Password has left blank");
             }
             break;
             case "pass2":
                setError("");
                setPass2(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank");
                }
                else if(e.target.value !==pass1){
                    setError("confirm password does not match!")
                }
                else{
                    setMsg("all fields are valid !")
                }
                break;
                default:

     
            }
        }

        function handleSubmit() {
            if (matricule !== ""&& nom !== "" && prenom !== ""  && base !== "" && secteur !== "" && email !== ""  && pass1 !== "" && pass2 !== "") {
                var url = "http://localhost/devtest/reactjs/registration.php/";
                var headers = {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                };
                var data = {
                    matricule:matricule,
                    nom: nom,
                    prenom: prenom,
                    base: base,
                    secteur: secteur,
                    email: email,
                    pass: pass2
                };
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                })
                .then((response) => {
                    console.log("Response Status:", response.status);
                    return response.json();
                })
                .then((response) => {
                    console.log("Response Data:", response);
                    setMsg(response.result);
                })
                .catch((err) => {
                    console.error("Fetch Error:", err);
                    setError("Failed to fetch data. Please try again later.");
                });
        
                setMatricule("");
                setNom("");
                setPrenom("");
                setBase("");
                setSecteur("");
                setPass1("");
                setPass2("");
            } else {
                setError("all fields are required!");
            }
        }
        
        
    return(
        <div className="form">
            <p>
            {
                msg !== ""?
                <span className='success'>{msg}</span>:
                <span className='error'>{error}</span>
                
            }
        </p>
            <label>Matricule</label>
            <input type="text" name="matricule" value={matricule}
            onChange={(e) =>handleInputChange(e, "matricule")}/>
            <label>Nom</label>
            <input type="text" name="nom" value={nom}
            onChange={(e) =>handleInputChange(e, "nom")}/>
            <label>Prenom</label>
            <input type="text" name="prenom" value={prenom}
            onChange={(e) =>handleInputChange(e, "prenom")}/>
            <label>Base</label>
            <input type="text" name="base" value={base}
            onChange={(e) =>handleInputChange(e, "base")}/>
            <label>Secteur</label>
            <input type="text" name="prenom" value={secteur}
            onChange={(e) =>handleInputChange(e, "secteur")}/>
            <label>E-mail</label>
            <input type="email" name="email" value={email}
            onChange={(e) =>handleInputChange(e, "email")}/>
            <label>Mot de passe</label>
            <input type="password" name="pass1" value={pass1}
            onChange={(e) =>handleInputChange(e, "pass1")}/>
            <label>confirm mot de passe</label>
            <input type="password" name="pass2" value={pass2}
            onChange={(e) =>handleInputChange(e, "pass2")}/>
            <input type="submit" defaultValue="Submit" className="button" onClick={handleSubmit}/>
        </div>
    );
        }
export default Registration;