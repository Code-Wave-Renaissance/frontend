
"use client";

import { Button, Modal, Popover } from "flowbite-react";
import { useState, FC } from "react";

export const CreateTaskModalBtn: FC = ({ }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        // <div className="flex absolute bottom-14 right-5">
        <div className="flex">
            {/* <>
                <Button className="bg-primary hover:bg-prymary-focus" onClick={() => setOpenModal(true)}>Create Task</Button>
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Create on Farcaster by using a Frame</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setOpenModal(false)}>Go</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Not now
                        </Button>
                    </Modal.Footer>
                </Modal>
            </> */}
            <>
                <Popover
                    aria-labelledby="create-task"
                    content={
                        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                                <h3 id="create-task" className="font-semibold text-gray-900 dark:text-white">Create on Farcaster with Frames</h3>
                            </div>
                            <div className="px-3 py-2">
                                <p>Visit our profile on Farcaster, and after creation, share your task with a frame!!</p>
                            </div>
                        </div>
                    }
                >
                    <Button size="xl" gradientDuoTone="purpleToBlue" className="bg-primary hover:bg-primary-focus">Create Task</Button>
                </Popover>
            </>
        </div>
    );
}
