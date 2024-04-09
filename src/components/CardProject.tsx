"use client"

import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Link from 'next/link';

import { Spinner } from 'flowbite-react';
import { Avatar } from "flowbite-react";
import { Rating } from 'flowbite-react';
import { Badge } from 'flowbite-react';

import { FaInstagram, FaGlobe, FaTwitter, FaFacebookMessenger } from 'react-icons/fa';

export function CardProject({ id, fid, displayName, title, description, price, applicants, pfpUrl, verifiedAddresses, status, loading }:
    { id: string, fid: number, displayName: string, title: string, description: string, price: number, applicants: object, pfpUrl: string, verifiedAddresses: object, status: string, loading: boolean }) {

    const [shortAddress, setShortAddress] = useState<string>(verifiedAddresses[0].slice(0, 6) + "..." + verifiedAddresses[0].slice(-5) || "")

    return (
        <div className="flex bg-gradient-to-br from-base-200 to-base-300 shadow-lg rounded-xl overflow-hidden w-[300pt] transition-transform duration-200">
            {loading ?
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    {/* <FaRedo size={20} color='white' className="animate-spin" /> */}
                    <Spinner color="blue" aria-label="Default status example" />
                </div>
                :
                <div className='flex flex-col items-start justify-between relative w-full'>
                    <div className='flex flex-col p-4 w-full'>
                        <div className="space-y-1 font-medium">
                            <div className='flex justify-between w-full'>
                                <div>
                                    <div className='flex align-middle'>
                                        <h1 className='flex text-4xl font-bold text-primary mr-3'>{title}</h1>
                                        {status === "open" ? <p className='text-gray-100 self-center py-1 px-3 rounded-full bg-green-500'>Open</p> : <p className='text-gray-100 self-center py-1 px-3 rounded-full bg-error'>Closed</p>}
                                    </div>
                                    <p className='text-gray-500 font-semibold'>Due to: {"01/04/2027"}</p>
                                </div>
                                <h2 className='text-3xl font-bold text-primary-focus self-auto'>${price}.00</h2>
                            </div>

                            {/* HARDCODED TAG SECTION (IMPLEMENT FILTERING LATER) */}
                            <div className='text-lg flex align-middle items-center text-gray-600'>
                                Tags:
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Art</span>
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Easy</span>
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Fast</span>
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Code</span>

                                {/* <div className='flex ml-1 flex-wrap gap-1'>
                                    <Badge color="gray" >Art</Badge>
                                    <Badge color="gray" >Easy</Badge>
                                    <Badge color="gray" >Fast</Badge>
                                    <Badge color="gray" >Code</Badge>
                                </div> */}
                            </div>

                            {/* <h2 className="text-md text-gray-500">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa a? Obcaecati adipisci debitis eligendi quaerat vel, expedita ipsum vitae voluptas harum fugit ad itaque deserunt sint. Quidem, dicta fuga!</h2> */}

                        </div>
                    </div>

                    <div className='w-[300pt] border-t-[1px] border-gray-400 self-center'></div>

                    <div className='w-full py-3 px-4 flex flex-initial justify-between'>
                        <Avatar img={pfpUrl} rounded size="md" placeholderInitials={displayName.charAt(0) || ""} >
                            <div className="space-y-1 font-medium">
                                <div className='flex align-middle justify-between'>
                                    <h1 className='text-2xl text-primary mr-1'>{displayName}</h1>
                                    <Rating size="md">
                                        <Rating.Star />

                                        <p className="ml-2 text-sm font-bold text-gray-900">4.95</p>

                                    </Rating>
                                </div>
                                <h2 className="text-md text-gray-500">{shortAddress}</h2>
                            </div>
                        </Avatar>


                        {/* IMPLEMENT ICONS TO SOCIAL MEDIA HERE */}
                        <div className='flex flex-row space-x-2 items-center pr-2'>
                            <a className='rounded-full aspect-square h-[50%] bg-secondary p-1 hover:bg-primary' href="" target="_blank" rel="noreferrer">
                                <FaFacebookMessenger size={30} color='black' />
                            </a>
                            {/* <a className='rounded-full aspect-square h-[50%] bg-slate-500 p-1 hover:bg-slate-600' href="https://www.artisticendeavor.com" target="_blank" rel="noreferrer">
                                <FaTwitter size={30} color='black' />
                            </a> */}
                            <a className='rounded-full aspect-square h-[50%] bg-secondary p-1 hover:bg-primary' href="https://www.artisticendeavor.com" target="_blank" rel="noreferrer">
                                <FaGlobe size={30} color='black' />
                            </a>
                        </div>
                    </div>

                    {/* BUTTON V1 */}
                    <Link className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold transition' href={`/explore-tasks/${id}`}>
                        <h1 className='text-lg p-1 self-center text-center'>Learn More</h1>
                    </Link>

                    {/* BUTTON V2  */}
                    {/* <div className="absolute bottom-0 right-0 m-2 aspect-[21/9] flex bg-opacity-5 bg-blue rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
                        <Link className='flex items-center justify-center' href={`/explore-tasks/${id}`}>
                        <button className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn more
                        </button>
                        </Link>
                    </div> */}

                </div>
            }
        </div>
    );
}
