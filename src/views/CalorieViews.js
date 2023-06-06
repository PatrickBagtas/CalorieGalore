import Topper from '../components/Topper';
import { useState } from 'react'

import BottomNote from '../components/BottomNote';
import DateNavigation from '../components/DateNavigation';
import PercentageGraph from '../components/PercentageGraph';
import CalorieInput from '../components/CalorieInput';
export default function CalorieViews() {


    return (
        <div>
            <Topper />
            <div className='mx-auto  flex flex-col items-center'>
                <h1>Welcome XXXX</h1>
                <DateNavigation />
            </div>
            <div className=' m-5 flex  justify-between'>
                <div>
                    <p className='border m-5 p-3 h-50'>Calories : 2000 </p>
                    <CalorieInput/>
                </div>
                <div>

                </div>
                <div>
                    <PercentageGraph />
                </div>
            </div>
            <BottomNote />
        </div>
    )
}