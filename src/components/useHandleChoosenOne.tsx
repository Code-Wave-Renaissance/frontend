import { useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { createContract } from 'utils/contract-client';


const makeDeal = async ({ id, wallet }) => {
    try {
        const response = await fetch(`https://backend-blue-two.vercel.app/api/makeDeal/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dealWith: wallet,
                status: "closed",
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    console.log('Patch task not ready yet');
};

export default function useHandleChoosenOne() {
    const { connection } = useConnection();
    const { publicKey: ownerPublicKey, sendTransaction } = useWallet();

    const handleChoosenOne = async (id, workerPublicKey, price) => {
        console.log('user chosen for job with id:', id, "and wallet:", workerPublicKey);

        const transaction = new Transaction();
        transaction.add(
            createContract(ownerPublicKey, workerPublicKey, id, Math.round(price))
        );

        const sig = await sendTransaction(transaction, connection)
        console.log(sig);
        
        await makeDeal({id, wallet: workerPublicKey});
    };

    return handleChoosenOne;
};
