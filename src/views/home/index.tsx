// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
	const wallet = useWallet();
	const { connection } = useConnection();

	const balance = useUserSOLBalanceStore((s) => s.balance)
	const { getUserSOLBalance } = useUserSOLBalanceStore()

	useEffect(() => {
		if (wallet.publicKey) {
			console.log(wallet.publicKey.toBase58())
			getUserSOLBalance(wallet.publicKey, connection)
		}
	}, [wallet.publicKey, connection, getUserSOLBalance])

	return (

		<div className="md:hero mx-auto p-4">
			<div className="md:hero-content flex flex-col">
				<div className='mt-6'>
					<div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'>v{pkg.version}</div>
					<h1 className="text-center text-7xl md:pl-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-700 mb-4">
						~Task~Flow~
					</h1>
				</div>
				<h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
					<p>Find, Create and Share Tasks like never seen before</p>
					<p className='text-slate-500 text-2x1 leading-relaxed'>What task will you complete now?</p>
				</h4>
				<div className="flex flex-col mt-2">
					{/* <RequestAirdrop />
					<h4 className="md:w-full text-2xl text-slate-300 my-2">
						{wallet &&
							<div className="flex flex-row justify-center">
								<div>
									{(balance || 0).toLocaleString()}
								</div>
								<div className='text-slate-600 ml-2'>
									SOL
								</div>
							</div>
						}
					</h4> */}
				</div>
			</div>
		</div>
	);
};
