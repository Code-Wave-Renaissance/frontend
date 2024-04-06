"use client";

import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Link from 'next/link';


export function CardProject({ id, fid, displayName, title, description, price, applicants,  pfpUrl, verifiedAddresses, loading }:
    { id: string, fid:number , displayName: string, title: string, description: string,  price: number,  applicants: object, pfpUrl: string, verifiedAddresses: object, loading: boolean }) {


    return (
        <div className="aspect-[21/9] flex bg-opacity-5 bg-black rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
            {loading ?
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    {/* <FaRedo size={20} color='white' className="animate-spin" /> */}
                </div>
                :
                // <div className='flex items-start'>
                    <Link className='flex items-start' href={`/explore-tasks/${id}`}>
                        <div className="aspect-square w-[40%] h-full rounded-xl overflow-hidden">
                            <img src={pfpUrl} alt="Project Image" className="object-cover w-full h-full" />
                        </div>

                        <div className="w-[60%] px-4 flex items-start">
                            <div className="py-2">
                                <div className='flex justify-between items-center'>
                                    <h1 className="font-semibold text-2xl text-primary-text">{title}</h1>
                                    {/* <p className="text-md font-semibold text-primary-text m-0 p-0">${ / 1000}/${price / 1000} k</p> */}
                                </div>
                                {/* <ProgressBar price={price} ={} /> */}
                                <p className="text-sm text-secondary-text">{description}</p>
                                <h2 className="text-sm text-secondary-text">{displayName}</h2>
                            </div>
                        </div>
                    </Link>
                // </div>
            }
        </div>
    );
}
