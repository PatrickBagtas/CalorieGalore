import React from 'react';
import { useState } from 'react'

const CalorieInput = () => {
    const [name,setName]= useState('');
    const [cal,setCal]=useState('');

    const handleCal = async(e) =>{
        e.preventDefault();

        
    }

    return (

        <form className='w-full max-w-sm'>
            <div className='flex items-center border-b border-teal-500 py-2'>
            <h1>Input Food</h1>
            <input
                type="text"
                name="name"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                name="cal"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Cal"
                value={cal}
                onChange={(event) => setCal(event.target.value)}
            />
                                        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2  border rounded bg-red-200" type="button">
                                Input Calories
                            </button>
            </div>
        </form>
    )
}
export default CalorieInput;