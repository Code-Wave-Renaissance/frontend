"use client";

import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';

import type { NextPage } from "next";
import Link from "next/link";

import { useEffect } from "react";
import { creatorFundingData } from "../../utils/mock";
import { CardProject } from "../../components/CardProject";
import { useRouter } from 'next/router';

export const ExploreTasksView: FC = ({ }) => {

	return (
		<div className="md:hero mx-auto p-4">
			<div className="md:hero-content flex flex-col">
				<h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
					EXPLORE TASKS PAGE
				</h1>
				<div className='w-[100%] h-[100%]'>
					<div className="p-6 w-full md:p-12 lg:p-12">
						<div className='grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2'>
						{creatorFundingData
							.map((card, index) => (
							<CardProject
								key={index}
								id={card.id}
								creatorName={card.creatorName}
								projectName={card.projectName}
								projectDescription={card.projectDescription}
								motivation={card.motivation}
								quantityToFund={card.quantityToFund}
								quantityRaised={card.quantityRaised}
								pplFunding={card.pplFunding}
								currency={card.currency}
								imageNFT={card.imageNFT}
								projectImages={card.projectImages}
								projectLinks={card.projectLinks}
								loading={false} // Set loading to false or provide loading logic here
							/>
							))}
						</div>
						{/* <div className='h-[500px] w-full'></div> */}

					</div>
				</div>				
			</div>
		</div>
	);
};

