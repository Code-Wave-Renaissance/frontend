"use client";

import { MdShare, MdFavorite, MdStar, MdCurrencyBitcoin, MdArrowRight } from "react-icons/md";
import { useEffect, useState, FC } from "react";
import { Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import Link from "next/link";
import { TaskDataType } from "../../utils/type";
// import { createContract } from "utils/contract-client";

import ProgressBar from "../../components/ProgressBar";
import ApplyBtn from "components/ApplyBtn";
import useHandleChoosenOne from "components/useHandleChoosenOne";

import { Badge, Avatar, Rating, Button, Tooltip } from "flowbite-react";
import { FaFacebookMessenger, FaGlobe } from "react-icons/fa";

import { useRouter } from "next/router";
import useHandleMilestoneApprove from "components/usaHandleMilestone";

export const TaskDetailsView: FC = ({ params }: any) => {

    // const handleChoosenOne = async (id, workerPublicKey, price) => {
    //     console.log('user choosen for job with id:', id, "and wallet:", workerPublicKey);

    //     const { connection } = useConnection();
    //     const { publicKey: ownerPublicKey, sendTransaction } = useWallet();

    //     const transaction = new Transaction();
    //     transaction.add(
    //         createContract(ownerPublicKey, workerPublicKey, id, Math.round(price))
    //     );

    //     const sig = await sendTransaction(transaction, connection)
    //     console.log(sig);
    // }

    const handleChoosenOne = useHandleChoosenOne();
    const handleMilestoneApprove = useHandleMilestoneApprove();

    const router = useRouter();
    const { id } = router.query;

    console.log(id);

    // const id = params.id
    const [task, setTaskData] = useState<TaskDataType | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    const [shortAddress, setShortAddress] = useState<string>("")

    useEffect(() => {
        // Fetch data from API when component mounts
        const fetchData = async (id) => {
            try {
                const response = await fetch(`${process.env.BACKEND_API || "https://backend-blue-two.vercel.app/api/task/"}${id}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    setTaskData(data); // Set the fetched data into state
                    setLoading(false); // Set loading to false when data is fetched
                    setShortAddress(data.verifiedAddresses[0].slice(0, 6) + "..." + data.verifiedAddresses[0].slice(-5) || "")
                    console.log(data);
                    console.log(task);
                } else {
                    console.error('Failed to fetch data');
                    // throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(id as any); // Call the fetchData function
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    const handleMilestone = (step: Number) => {
        console.log("Milestone: ", step);
        const workerPublicKey = task.dealWith;
        handleMilestoneApprove(task.id, workerPublicKey, step);
    }

    return (
        <div className="flex w-[100vw] items-start justify-center gap-4 h-full">
            {(!loading) ?
                <>
                    <div className='flex text-primary bg-gradient-to-br from-base-200 to-base-300 shadow-lg rounded-xl overflow-hidden w-[50vw]'>
                        <div className="p-6 w-full md:p-12 lg:py-12 lg:px-18 text-primary-text">
                            <div className="justify-between flex">
                                <Link href="/explore-tasks">
                                    <p className="text-lg hover:bg-secondary hover:text-primary-focus px-3 py-1 rounded-full transition">
                                        &#8592; Return
                                    </p>
                                </Link>
                                <div className="flex">
                                    <Tooltip content="Share on Farcaster">
                                        <button
                                            className="inline-flex mr-2 items-center text-sm h-10 py-2 px-3 bg-secondary text-primary-text rounded-lg shadow focus:outline-none hover:bg-blue-500"
                                        >
                                            {<MdShare />}
                                        </button>
                                    </Tooltip>
                                    {/* <button
                                className="inline-flex items-center text-sm h-8 py-2 px-4 bg-secondary text-primary-text rounded-lg shadow focus:outline-none hover:bg-blue-500"
                            >
                                {<MdFavorite />}
                                <p style={{ paddingLeft: '3px' }} >Save</p>
                            </button> */}
                                    <ApplyBtn id={id} />

                                </div>
                            </div>

                            {/* Region with Description and Reserve Section */}

                            <div className="flex flex-col justify-between pt-2 md:flex-row md:space-x-6">
                                <div className="w-full">
                                    {/* MAKE THIS A COMPONENT  */}
                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <div className='flex align-middle'>
                                                <h1 className='flex text-5xl font-bold text-primary mr-5 mb-1'>{task.title}</h1>
                                                {task.status === "open" ? <p className='text-gray-100 self-center py-1 px-3 rounded-full bg-green-500'>Open</p> : <p className='text-gray-100 self-center py-1 px-3 rounded-full bg-error'>Closed</p>}
                                            </div>
                                            <p className='text-gray-500 font-semibold'>Due to: {"01/04/2027"}</p>
                                        </div>
                                        <h2 className='text-5xl font-bold text-primary-focus align-middle self-center'>${task.price}.00</h2>
                                    </div>

                                    {/* MAKE THIS A COMPONENT TOO */}
                                    <div className='text-lg py-2 flex align-middle items-center text-gray-600'>
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

                                    <div className="py-2">
                                        <h2 className="text-2xl font-semibold">Description</h2>
                                        <h2 className="text-md text-gray-500">{task.description} </h2>
                                    </div>

                                    <h2 className="text-2xl mt-2 font-semibold">Meet your recruiter</h2>
                                    <div className='w-full p-3 flex flex-initial justify-between'>
                                        <Avatar img={task.pfpUrl} rounded size="lg" placeholderInitials={task.displayName.charAt(0) || ""} >
                                            <div className="space-y-1 font-medium">
                                                <div className='flex align-middle justify-between'>
                                                    <h1 className='text-3xl text-primary mr-1'>{task.displayName}</h1>
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
                                            <h2>
                                                Contacts:
                                            </h2>
                                            <a className='rounded-full aspect-square h-[50%] bg-secondary p-1 hover:bg-primary' href="" target="_blank" rel="noreferrer">
                                                <FaFacebookMessenger size={30} color='black' />
                                            </a>
                                            <a className='rounded-full aspect-square h-[50%] bg-secondary p-1 hover:bg-primary' href="https://www.artisticendeavor.com" target="_blank" rel="noreferrer">
                                                <FaGlobe size={30} color='black' />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="w-full mt-4" style={{ position: 'relative' }}>
                                        <ProgressBar milestone={2} />
                                        <div className="marker" style={{ left: '33%' }}></div>
                                        <button onClick={() => handleMilestone(1)} className="milestone-button" style={{ left: '33%', transform: 'translateX(-50%)' }}>Milestone 1</button>
                                        <div className="marker" style={{ left: '66%' }}></div>
                                        <button onClick={() => handleMilestone(2)} className="milestone-button" style={{ left: '66%', transform: 'translateX(-50%)' }}>Milestone 2</button>
                                        {/* <div className="marker" style={{ left: '99%' }}></div> */}
                                        <button onClick={() => handleMilestone(3)} className="milestone-button" style={{ left: '97%', transform: 'translateX(-50%)' }}>Finish</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex text-primary w-[20vw] h-full" >
                        {/* Region with Task Applicants */}
                        <div className="w-[100%] flex flex-col items-start h-full">
                            <p className="text-3xl w-full h-[10%] text-center font-bold pt-1 mb-4 bg-gradient-to-tl from-base-200 to-base-300 shadow-md rounded-xl">
                                APPLICANTS
                            </p>

                            {/* MAP FUNCTION TO CREATE A LIST OF APPLICANTS */}
                            <div className="h-[100%] bg-gradient-to-br from-base-200 to-base-300 shadow-lg rounded-xl overflow-y-auto flex flex-col text-gray w-full">
                                {Object.keys(task.applicants).map((applicant, index) => (
                                    <div key={index} className="py-1 px-2 mx-2 flex items-center justify-between border-b-[1px] border-primary-focus">
                                        <div>
                                            <Avatar img={task.applicants[applicant].pfpUrl} rounded size="md" placeholderInitials={task.applicants[applicant].displayName.charAt(0) || ""} >
                                                <div className="font-medium align-top justify-start">
                                                    <div className='flex align-middle justify-between'>
                                                        <h1 className='text-2xl text-primary mr-1'>{task.applicants[applicant].displayName}</h1>
                                                    </div>
                                                    <p className="text-md text-gray-500">
                                                        {task.applicants[applicant].address.slice(0, 4) + "..." + task.applicants[applicant].address.slice(-3)}
                                                    </p>
                                                    {/* <h2 className="text-md text-gray-500">{task.applicants[applicant].address}</h2> */}
                                                </div>
                                            </Avatar>
                                        </div>

                                        <div>
                                            <Rating size="md">
                                                <Rating.Star />
                                                <p className="ml-2 text-sm font-bold text-gray-900">5.0</p>
                                            </Rating>
                                            {/* You can add additional elements/icons here if needed */}

                                            <button onClick={() => handleChoosenOne(id, task.applicants[applicant].address, task.price)}>
                                                {/* <MdArrowRight size={30} color='black' /> */}
                                                Make Deal
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <div className="flex flex-row justify-center items-center self-end">
                                <ApplyBtn id={id} />
                            </div> */}
                        </div>
                    </div>
                </>
                :
                <>
                    <h1>LOADING...</h1>
                </>
            }
        </div>
    );
};