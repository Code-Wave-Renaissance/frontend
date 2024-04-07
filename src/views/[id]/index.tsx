"use client";

import { MdShare, MdFavorite, MdStar, MdCurrencyBitcoin, MdArrowRight } from "react-icons/md";
import { useEffect, useState, FC } from "react";
import Link from "next/link";
import { CreatorFundingType } from "../../utils/type";
import { creatorFundingData } from "../../utils/mock";

import ProgressBar from "../../components/ProgressBar";
import WithdrawBtn from "../../components/WithdrawBtn";
import ApplicantsList from "../../components/ApplicantsList";

import { useRouter } from "next/router";

export const TaskDetailsView: FC = ({ params }: any) => {
    const router = useRouter();
    const { id } = router.query;

    console.log(id);

    // const id = params.id
    const [project, setProject] = useState<CreatorFundingType | null>(null)
    const [loading, setLoading] = useState<boolean>(false);

    /* const {address: connectedAddress} = useAccount(); */
    const [depositAccount, setDepositAccount] = useState<string>('');
    const [badgesCollection, setBadgesCollection] = useState<string>('');
    const [projectName, setProjectName] = useState<string>('');
    const [pricePerToken, setPricePerToken] = useState<number>(0);

    // async function fetchFundingData() {
    //     try {
    //         const project = creatorFundingData.find((project) => project.id === parseInt(id))
    //         setProject(project || null)


    //     } catch (error) {
    //         console.error("There was an error fetching the data:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchFundingData();
    // }, [id]);

    return (
        <div className='h-auto  bg-black'>
            {(!project && !loading) ?
                <div className="p-6 w-full md:p-12 md:px-30 lg:py-12 lg:px-48 text-primary-text">
                    <div>
                        <Link href="/explore-tasks">
                            &#8592; Back to Projects
                            {id}
                        </Link>
                        <button
                            className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                        >
                            {<MdShare />}
                            <p style={{ paddingLeft: '3px' }} >Share</p>
                        </button>
                        <button
                            className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                        >
                            {<MdFavorite/>}
                            <p style={{ paddingLeft: '3px' }} >Save</p>
                        </button>
                    </div>

                    {/* Region with Description and Reserve Section */}

                    <div className="flex flex-col justify-between pt-6 md:flex-row md:space-x-6">
                        <div className="w-[80%]">
                            {/* <FundraiserSection id={propertyId} price={project.price} raised={project.raised} totalTokens={project.totalTokens} status={project.status} holders={project.holders} loading={loading} /> */}
                            <div className="w-full flex flex-row items-end justify-between">
                                <div className="flex flex-row items-end">
                                    {/* <p className="text-5xl font-semibold">${Number(totalSupply)}</p> */}
                                    {/* <p className="text-xl ml-4">{numHolders} Holder{numHolders !== 1 ? 's' : ''}</p> */}
                                </div>
                                {/* <p className="text-2xl font-semibold">{(Number(totalSupply) / (Number(targetSupply) + 0.00001) * 100).toFixed(2)}% of ${Number(targetSupply)} goal</p> */}
                            </div>
                            <div className="w-full mb-4" style={{ position: 'relative' }}>
                                <ProgressBar quantityToFund={Number()} quantityRaised={Number()} />
                                <div></div>
                                <div className="marker" style={{ left: '33%' }}></div>
                                <button className="milestone-button" style={{ left: '33%', transform: 'translateX(-50%)' }}>Milestone 1</button>
                                <div className="marker" style={{ left: '66%' }}></div>
                                <button className="milestone-button" style={{ left: '66%', transform: 'translateX(-50%)' }}>Milestone 2</button>
                            </div>

                            <div className="">
                                <h2 className="text-xl font-semibold">Description</h2>
                                {/*                                 <p className="mt-4">Deposit Account <Address address={depositAccount}/></p>
                                <p className="mt-4">Badge Collection <Address address={badgesCollection}/></p> */}
                                {/* <p className="mt-4">{project.projectDescription}</p> */}
                            </div>

                            <div className="">
                                <h2 className="text-xl font-semibold">Motivation</h2>
                                {/* <p className="mt-4">{project.motivation}</p> */}
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold">Project Links</h2>

                                <div className="mt-4 flex flex-col">
                                    {/* {project.projectLinks.map((link, index) => (
                                        <a key={index} href={link} className="text-primary-600 mb-2 hover:underline">{link}</a>
                                    ))} */}
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <button className="center right-1/2 center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Apply
                                </button>
                            </div>
                            {/*<div className="flex items-center justify-center flex-col py-4 my-2">
                                <h2 className="font-semibold text-3xl py-2">Withdraw</h2>
                                <div className="flex items-center justify-center">
                                    <WithdrawBtn milestoneNum={1} />
                                    <MdArrowRight className="mx-1" /> 
                                    <WithdrawBtn milestoneNum={2} />
                                    <MdArrowRight className="mx-1" /> 
                                    <WithdrawBtn milestoneNum={3} />
                                </div>
                            </div>*/}
                        </div>
                        {/* separation bar */}
                        <div className="hidden md:block w-[1px] bg-gray-300 h-[80%]"></div>
                        <div className="w-[20%]">
                            <div className="mt-6">
                                <p className="text-xl font-semibold flex items-center whitespace-nowrap">
                                    ✔ Task Contributors:
                                </p>
                                {/*Colocar lista de contribuidores com quantidade que cada um pegou}
                                <ContributorList contributors={project.pplFunding as any} />*/}
                            </div>
                            <div className="mt-6">
                                <p className="text-xl font-semibold flex items-center whitespace-nowrap">
                                    ⏳ Task Applicants:
                                </p>
                                {/*Colocar lista de aplicantes 
                                <ApplicantsList applicants={project.pplFunding as any} />*/}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <>
                    <h1>LOADING...</h1>
                </>
            }
        </div>
    );
};