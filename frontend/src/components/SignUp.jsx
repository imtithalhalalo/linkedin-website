import React from 'react'
import { useState } from "react";
import { signup } from '../hooks/signup';
import Input from './Input';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [role, setRole] = useState('');
    const [iscompany, setIsCompany] = useState(false);
    const handleChange = event => {
        if (event.target.checked) {
          setRole('company');
        } else {
          setRole('user');
        }
        setIsCompany(current => !current);
      };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill All Fields");
            return;
        }
        const user = {
            email: email,
            password: password,
            role: role
        }
        signup(user);
        localStorage.setItem('role', role);
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
                        <Input text={"Email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input text={"Password"} value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <p className='text-gray-400 text-xs text-center'>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                        <div className="flex items-center mr-4">
                            <input id="checkbox" type="checkbox" value={iscompany} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">As Company? </label>
                        </div>
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
