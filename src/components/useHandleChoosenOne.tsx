import { useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { createContract } from 'utils/contract-client';

const useHandleChoosenOne = () => {
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
    };

    return handleChoosenOne;
};

export default useHandleChoosenOne;
