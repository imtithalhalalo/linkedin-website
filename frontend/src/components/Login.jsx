import React from 'react'
import { login } from "../hooks/login";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Login = ({onLogin}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill All Fields");
            return;
        }
        const user = {
            email: email,
            password: password
        }
        await login(user);
        
        if (localStorage.getItem('status') === 'success') {
            if(localStorage.getItem('role') === 'company'){
                navigate('/company');
            }else if (localStorage.getItem('role') === 'user'){
                navigate('/user');
            }else {
                navigate('/login');
            }
            onLogin(localStorage.getItem('role'));
        }

        setEmail("");
        setPassword("");
    }
    return (
        <>
            <div className="bg-white flex flex-col justify-center items-center">
                <div className="pl-16 flex w-48 self-start">
                    <img src={process.env.PUBLIC_URL + "images/linkedin-logo.png"} alt="logo" />
                </div>

                <div className="bg-white w-96 shadow-2xl rounded p-5 h-5/6">
                    <h1 className="text-3xl font-medium mb-3">Sign in</h1>
                    <p className="text-sm">Stay updated on your professional world</p>
                    <form className="space-y-5 mt-5" onSubmit={ onSubmit }>
                        <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="password" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <button className="text-center w-full bg-blue rounded-full text-white py-3 font-medium">Sign In</button>
                    </form>
                </div>
                <p>New to LinkedIn?
                    <a href="/" className="color-blue font-medium hover:bg-blue-200 rounded-full p-2">Join now</a>
                </p>
            </div>
        </>

    )
}

export default Login
