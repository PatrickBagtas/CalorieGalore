import React, { useEffect, useState } from 'react';
import Topper from '../components/Topper'
import BottomNote from '../components/BottomNote'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function RegisterView() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            email: email,
            username: username,
            password: password,
        }

        // Make an API call to the backend to register the user
        axios
            .post('http://localhost:8080/register', newUser)
            .then((response) => {
                // Handle the response from the backend
                setErrorMessage('');
                setSuccessMessage('Registration successful');
            })
            .catch((error) => {
                // Handle errors, display error messages, etc.
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Registration failed. Please try again.');
                }
                setSuccessMessage('');
            });
    };
    return (
        <div className="min-h-screen ">
            <Topper />
            <div className="flex flex-1 items-center justify-center mt-10 mb-20">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center mb-20">
                    <form className="text-center" onSubmit={(event) => {
                        handleSubmit(event);
                    }}>
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign up
                        </h1>
                        <div className="py-2 text-left">
                            <input
                                type="text"
                                name="username"
                                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="py-2 text-left">
                            <input
                                type="email"
                                name="email"
                                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="py-2 text-left">
                            <input
                                type="password"
                                name="password"
                                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="py-2">
                            <button
                                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Already have an Account?
                        </span>
                        <Link to={`/login`} className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Login</Link>
                    </div>
                </div>
            </div>
            <BottomNote />
        </div>

    )
}