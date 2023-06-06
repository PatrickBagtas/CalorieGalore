import React, { useState } from 'react';
const DateNavigation = () => {
    const [date, setDate] = useState(new Date());

    const handleNavigation = () => {
        const yesterday = new Date(date);
        yesterday.setDate(date.getDate() - 1);
        setDate(yesterday);
    };

    return (
        <div className="">
            <div className="">
                <button className="p-2 rounded-lg bg-blue-500 text-white cursor-pointer" onClick={handleNavigation}>
                    {date.toDateString()}
                </button>
            </div>
        </div>
    );
};
export default DateNavigation;