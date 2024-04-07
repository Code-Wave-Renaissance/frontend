"use client";

import React, { useState, FC } from 'react';

import { CreateTaskModalBtn } from 'components/CreateTaskModalBtn';

export const CreateTasksView: FC = ({ }) => {

    return (
        <div className="md:hero mx-auto p-4">
            <div className="md:hero-content flex flex-col">
                <h1 className="text-center mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                    CREATE TASK
                </h1>

                <CreateTaskModalBtn />

            </div>
        </div>
    );
};
