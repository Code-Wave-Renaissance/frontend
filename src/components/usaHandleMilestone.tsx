import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, PublicKey } from '@solana/web3.js';
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
        
        console.log('milestone ' + actualStep + ' approved id: ' + id, " worker: ", workerPublicKey);

        const transaction = new Transaction();
        transaction.add(
            incrementStep(ownerPublicKey, new PublicKey(workerPublicKey), id)
        );

        const sig = await sendTransaction(transaction, connection)
        console.log("Milestone: " + actualStep + " transaction: ", sig);

        actualStep++;
    };

    return handleMilestoneApprove;
};

export default useHandleMilestoneApprove;