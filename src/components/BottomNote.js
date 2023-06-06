import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../img/twitter.png'
import linkd from '../img/linkd.png'
import discord from '../img/discord.png'
import email from '../img/email.png'

const BottomNote = () => {
    return (
        <footer className="bg-bottom rounded-lg shadow dark:bg-gray-900 mt-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link class="flex items-center mb-4 sm:mb-0">

                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                        <img src={twitter} className='mr-2 h-10 w-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ' alt="twitter" />
                        </li>
                        <li>
                        <img src={discord} className='mr-2 h-6 w-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ' alt="discord" />
                        </li>
                        <li>
                        <img src={linkd} className='mr-2 h-6 w-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ' alt="linkd" />
                        </li>
                        <li>
                        <img src={email} className='mr-2 h-5 w-10 transition ease-in-out delay-150 rounded hover:-translate-y-1 hover:scale-110  duration-300  ' alt="email" />
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <p class="hover:underline">Calorie Galore</p>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default BottomNote