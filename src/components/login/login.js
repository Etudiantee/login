import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/login.css';
function Login() {
    const navigate = useNavigate();
    const [matricule, setMatricule] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        let login = localStorage.getItem("login");
 
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(function () {
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function () {
            setMsg("");
        }, 5000)
    }, [msg])

    const handleInputChange = (e, type) => {
        setError("");
        if (type === "matricule") {
            setMatricule(e.target.value);
            if (e.target.value === "") {
                setError("matricule has been left blank");
            }
        } else if (type === "pass") {
            setPass(e.target.value);
            if (e.target.value === "") {
                setError("Password has been left blank");
            }
        }
    };

    function LoginSubmit() {
        if (matricule !== "" && pass !== "") {
            var url = "http://localhost/devtest/reactjs/login.php";
            var headres = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                matricule: matricule,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headres,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    setMsg(response[0].result);
                    if (response[0].result === "login in successfully") {
                        setTimeout(() => {
                            localStorage.setItem("login", "true");
                            if (response[0].secteur === "admin") {
                                navigate("/AdminDashboard");
                            } else {
                                navigate("/feuille");
                            }
                        }, 5000);
                    }
                }).catch((err) => {
                    setError(err.message);
                    console.log(err);
                });
        } else {
            setError("All fields are required!");
        }
    }

    return (
        <body>
        <div class="form">
        <p>
        {
            error !== ""?
            <span className='error'>{error}</span>:
            <span className='success'>{msg}</span>
        }
    </p>
<p class="form-title">Sign in to your account</p>
<div class="input-container">
 <input placeholder="Enter matricule" type="text"value={matricule} onChange={(e) =>handleInputChange(e, "matricule")}/>

</div>
<div class="input-container">
 <input placeholder="Enter password" type="password" value={pass} onChange={(e) =>handleInputChange(e, "pass")}/>
</div>
<button class="submit" type="submit" onClick={LoginSubmit}>
Sign in
</button>

</div>
</body>
    );
};

export default Login;
