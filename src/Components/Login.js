import React, { useState } from 'react'
import '../Css/Login.css';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message));
    };

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");
        })
        .catch(e => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email (phone for mobile accounts)</h5>
                    <input 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="email" 
                    />
                    <h5>Password</h5>
                    <input 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password" 
                    />
                    <button 
                        onClick={login} 
                        type="submit" 
                        className="login_signButton">Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's <span>Conditions of Use </span> and <span>Privacy Notice.</span>
                </p>

                <button 
                    onClick={register} 
                    className="login_accountButton">Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
