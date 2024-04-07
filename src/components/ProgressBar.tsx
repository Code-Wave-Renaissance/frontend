"use client";

import { useEffect, useState } from 'react';

const ProgressBar = ({milestone}) => {
    // Calculate the percentage of progress
    const [progress, setProgress] = useState(milestone);

    // useEffect(() => {
    //     const timer = setTimeout(() => setProgress((quantityRaised / quantityToFund * 100)), 500)
    //     return () => clearTimeout(timer)
    // }, [])

    return (
        <div className='w-full flex items-center justify-between'>
            <div className="w-[100%] h-4 bg-gray-200 rounded-full overflow-hidden border-primary border-2">
                <div
                    className="h-full bg-primary"
                    style={{ width: `${milestone*100/3}%` }}
                ></div>
                {/* <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                {quantityRaised}/{quantityToFund}
            </div> */}
            </div>
            {/* <p className="text-sm text-primary-600 p-0 m-0">{progress.toFixed(0)}%</p> */}
        </div>
    );
};

export default ProgressBar;