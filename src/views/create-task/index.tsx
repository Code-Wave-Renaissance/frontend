"use client";

import React, { useState } from 'react';
{/*
import { parseEther } from 'viem';
import { useScaffoldContractWrite } from '~~/hooks/scaffold-eth';
import { PaymentTokenAddress } from '~~/utils/addresses';
*/}
import Forms1 from '../../components/Forms1';
import Forms2 from '../..//components/Forms2';
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
interface Modules {
    id: number;
    link: string;
    details: string;
}

export const CreateTasksView: FC = ({ }) => {

	const [step, setStep] = React.useState(1);

    const [creatorName, setcreatorName] = React.useState('');
    const [projectName, setprojectName] = React.useState('');
    const [projectDescription, setprojectDescription] = React.useState('');
    const [imageNFT, setImageNFT] = React.useState('');

    const [pricePerToken, setPricePerToken] = React.useState(0);
    const [totalSupply, setTotalSupply] = React.useState(0);


    const [loading, setLoading] = React.useState(false);

    const [formData, setFormData] = useState({
        creatorName: '',
        projectName: '',
        projectDescription: '',
        imageNFT: ''
    });


    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    console.log("project name", projectName);
    console.log("creator name", projectName);
    console.log("project price", pricePerToken);
    // console.log("payment token", PaymentTokenAddress);
    console.log("total supply", totalSupply);
    console.log("image link", imageNFT);

	{/*
    const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
        contractName: "BambaStars",
        functionName: "mint",
        

        args: [projectName, projectName, parseEther(String(pricePerToken)), PaymentTokenAddress, parseEther(String(totalSupply)),  parseEther("10"), parseEther("15"), imageNFT],
        blockConfirmations: 1,
        value: 0,
        onBlockConfirmation: (txnReceipt: any) => {
          console.log("Transaction blockHash", txnReceipt.blockHash);
        },
      } as never);
	*/}


	return (
		<div className="md:hero mx-auto p-4">
			<div className="md:hero-content flex flex-col">
				<h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
					CREATE TASKS PAGE
				</h1>
				<div className="flex items-center justify-center h-screen">
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-md w-full lg:max-w-xl">
                <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
                <div className="flex mb-4">
                    <div
                        className={`w-1/2 border-r border-gray-400 ${step === 1 ? "bg-yellow-500 text-white" : "bg-gray-200"
                            } p-2 text-center cursor-pointer`}
                        onClick={() => setStep(1)}
                    >
                        Part 1
                    </div>
                    <div
                        className={`w-1/2 ${step === 2 ? "bg-yellow-500 text-white" : "bg-gray-200"
                            } p-2 text-center cursor-pointer`}
                        onClick={() => setStep(2)}
                    >
                        Part 2
                    </div>
                </div>
                *{step === 1 ?
                    <Forms1
					/> :
                    <Forms2
					/>
                }

					{/* Forms1
                        creatorName={creatorName}
                        setcreatorName={setcreatorName}
                        projectName={projectName}
                        setprojectName={setprojectName}
                        projectDescription={projectDescription}
                        setprojectDescription={setprojectDescription}
					*/}

					{/* Forms2
                        totalSupply={totalSupply}
                        setTotalSupply={setTotalSupply}
                        pricePerToken={pricePerToken}
                        setPricePerToken={setPricePerToken}
                        imageNFT={imageNFT}
                        setImageNFT={setImageNFT}
					*/}
                <div className="flex justify-between mt-6">
                    {step > 1 && (
                        <>
                            <button
                                className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                                onClick={handleBack}
                            >
                                Back
                            </button>
                            <button
                                className="bg-yellow-500 px-6 py-1.5 rounded-lg text-white hover:bg-secondary-color"
                                // onClick={() => writeAsync()}
                            >
                                Submit

                            </button>
                        </>
                    )}
                    {step < 2 && (
                        <button
                            className="bg-yellow-500 px-6 py-1.5 rounded-lg text-white hover:bg-secondary-color"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
				
			</div>
		</div>
    );
};
