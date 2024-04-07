"use client";

import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Link from 'next/link';


export function CardProject({ id, fid, displayName, title, description, price, applicants,  pfpUrl, verifiedAddresses, loading }:
    { id: string, fid:number , displayName: string, title: string, description: string,  price: number,  applicants: object, pfpUrl: string, verifiedAddresses: object, loading: boolean }) {


    return (
        <div className="aspect-[21/9] flex bg-midnight rounded-xl overflow-hidden">
            {loading ?
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    {/* <FaRedo size={20} color='white' className="animate-spin" /> */}
                </div>
                :
                 <div className='flex items-start relative'>
                    <div className="rounded-full w-[20%] lh-full rounded-x1 overflow-hidden">
                        <img src={pfpUrl} alt="Project Image" className="object-cover w-full h-full" />
                    </div>

                    <div className="w-[60%] px-4 flex items-start">
                        <div className="py-2">
                            <div className='flex justify-between items-center'>
                                    
                                <h1 className="font-semibold text-2xl text-primary-text">
                                    {title}
                                </h1>
                                    
                                {/* <p className="text-md font-semibold text-primary-text m-0 p-0">${ / 1000}/${price / 1000} k</p> */}
                                
                            </div>
                            {/* <ProgressBar price={price} ={} /> */}
                            <div className="bullet-container">
                                Task description: {description}
                                <p className="bullet text-sm text-secondary-text">
                                    
                                </p>
                            </div>

                            <h2 className="text-sm text-secondary-text">
                                    
                                <div className="bullet-container">
                                    Author: {displayName}
                                    <p className="bullet text-sm text-secondary-text">
                                    
                                    </p>
                                </div>
                            </h2>
                        </div>
                    </div>
                    <div className = "absolute bottom-0 right-0 m-4 aspect-[21/9] flex bg-opacity-5 bg-blue rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
                        <Link className='flex items-center justify-center' href={`/explore-tasks/${id}`}>
                            <button className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Learn more
                            </button>
                        </Link>
                    </div>
                 </div>
            }
        </div>
    );
}
