import { type } from '@testing-library/user-event/dist/type';
import './login.css';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    useEffect(() =>{
        let login = localStorage.getItem("login");
        if (login === "true") {
            navigate("/nav");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(function(){
                localStorage.clear();
                window.location.reload();
            },3000);
        }
        setTimeout(function(){
        setMsg("");
        },5000)
    },[msg])
    const handleInputChange =(e , type)=> {
   switch(type){
    case "email":
        setError("");
        setEmail(e.target.value);
        if(e.target.value === ""){
            setError("Email has left blank");
        }
        break;

        case "pass":
        setError("");
        setPass(e.target.value);
        if(e.target.value === ""){
            setError("password has left blank");
        }
        break;
        default:
   }
        
    };
    function LoginSubmit(){
        if(email !== "" && pass !== ""){
            var url ="http://localhost/devtest/reactjs/login.php";
            var headres = {
                "Accept" :"application/json",
                "Content-type" :"application/json"
            };
            var Data ={
            email :email,
            pass :pass
            };
            fetch(url,{
                method: "POST",
                headers: headres,
                body: JSON.stringify(Data)
            }).then((response) =>response.json())
            .then((response) =>{
                setMsg(response[0].result);
                
                if (response[0].result === "login in successfully") {
                    setTimeout(() => {
                        localStorage.setItem("login", "true");
                        navigate("/nav");
                    }, 5000);
                }


            }).catch((err) => {
                setError(err.message); // Set error message instead of entire error object
                console.log(err);
        })
        }
        else{
            setError("all field are required!");
        }
    
    }
    
    
    return (
      <div className="Form">
        <p>
            {
                error !== ""?
                <span className='error'>{error}</span>:
                <span className='success'>{msg}</span>
            }
        </p>
        
        <label>Login</label>
          <input type="text" placeholder='login' value={email} onChange={(e) =>handleInputChange(e, "email")}/>
        <label>Password</label>
          <input type="password" placeholder='Password' value={pass} onChange={(e) =>handleInputChange(e, "pass")}/>
          <label></label>
      <input type='submit' defaultValue='Login' className='Button' onClick={LoginSubmit}/>
  </div>
    );
};

export default Login;
