import React, { useEffect, useState } from 'react';
import Topper from '../components/Topper'
import BottomNote from '../components/BottomNote'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';



export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleonSubmit = async (e) => {
        e.preventDefault();

        const Logged={
            email:email,
            password:password
        }
        try {
            // Make a POST request to the login endpoint
            const response = await axios.post('http://localhost:8080/login', Logged);

            // Handle successful login
            console.log('Login successful', response.data);

            // Reset form fields
            setEmail('');
            setPassword('');
            setErrorMessage('');
        } catch (error) {
            // Handle login error
            console.error('Login failed', error);
            setErrorMessage('Invalid username or password');
        }
    };
    return (
        <div className="min-h-screen ">
            <Topper />
            <div className="flex flex-1 items-center justify-center mt-10 mb-20">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center mb-20">
                    <form className="text-center" onSubmit={handleonSubmit}>
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign in
                        </h1>
                        <div className="py-2 text-left">
                            <input
                                type="email"
                                name="email"
                                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="py-2 text-left">
                            <input
                                type="password"
                                name="password"
                                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="py-2">
                            <button
                                type="submit"
                                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span>
                        <Link to={`/register`} className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</Link>
                    </div>
                </div>
            </div>
            <BottomNote />
        </div>

    )
}