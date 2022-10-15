import React from 'react'
import { useState } from "react";
import { signup } from '../hooks/signup';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill All Fields");
            return;
        }
        const user = {
            email: email,
            password: password
        }
        signup(user);

        setEmail("");
        setPassword("");
    };
    return (
        <>
            <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center bg-grey">
                <div className="pl-16 flex w-48 self-start ">
                    <img src={process.env.PUBLIC_URL + "images/linkedin-logo.png"} alt="logo" />
                </div>
                <h1 className='text-4xl text-center'>Make the most of your professional life</h1>
                <div className="bg-white w-96 rounded p-5 h-5/6">
                    <form className="space-y-3 mt-2" onSubmit={onSubmit}>
                        <label className='text-gray-800'>Email</label>
                        <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <label className='text-gray-800'>Password (6 or more characters)</label>
                        <input type="password" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <p className='text-gray-400 text-xs text-center'>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                        <button className="text-center rounded-full w-full bg-blue text-white py-3 font-medium">Agree & Join</button>
                    </form>
                </div>
                <p>Already on LinkedIn?
                    <a href="/login" className="color-blue rounded-full font-medium hover:bg-blue-200 p-2">Sign in</a>
                </p>
            </div>
        </>
    )
}

export default SignUp
