import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { incrementStep } from 'utils/contract-client';

const useHandleMilestoneApprove = () => {
    const { connection } = useConnection();
    const { publicKey: ownerPublicKey, sendTransaction } = useWallet();

    let actualStep = 1;

    const handleMilestoneApprove = async (id, workerPublicKey, step) => {
        if (step !== actualStep)
        {
            console.log("Invalid step");
            return;
        }
        
        console.log('milestone ' + step + ' approved: ', id);

        const transaction = new Transaction();
        transaction.add(
            incrementStep(ownerPublicKey, workerPublicKey, id)
        );

        const sig = await sendTransaction(transaction, connection)
        console.log(sig);

        actualStep++;
    };

    return handleMilestoneApprove;
};

export default useHandleMilestoneApprove;