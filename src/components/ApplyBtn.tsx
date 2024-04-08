
"use client";

import { set } from "date-fns";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { displayName } from "react-wavify";



// PUT UPDATE FUNCTION HERE API
const updateTask = async ({ id, newApplicants }) => {
    try {
        const response = await fetch(`https://api.farcaster.com/add-applicants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newApplicants,
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

    console.log('Update task not ready yet')
}

export default function ApplyBtn({ id }) {
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [wallet, setWallet] = useState('');
    const [newApplicants, setNewApplicants] = useState({});

    function onCloseModal() {
        setOpenModal(false);
        setName('');
        setWallet('');
        setNewApplicants({});
    }

    const handleNewApplicants = ({name, wallet}) => {
        setNewApplicants(
            {displayName: name, address: wallet}
        );

        updateTask({id, newApplicants});
        console.log(newApplicants);
    }

    return (
        <>
            <Button size="md" onClick={() => setOpenModal(true)} gradientDuoTone="purpleToBlue" className="bg-primary hover:bg-primary-focus">Apply to this job</Button>

            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Please, complete this forms</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your name" />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="Jhon Wick"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="wallet" value="Your wallet" />
                            </div>
                            <TextInput
                                id="wallet"
                                placeholder="C05a...Vrb08"
                                value={wallet}
                                onChange={(event) => setWallet(event.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Button onClick={() => handleNewApplicants({name, wallet})} size="md" gradientDuoTone="purpleToBlue" className="bg-primary hover:bg-primary-focus">Apply</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
