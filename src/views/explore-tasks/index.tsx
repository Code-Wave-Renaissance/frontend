"use client"

import { FC, useState, useEffect } from "react";
import { CardProject } from "../../components/CardProject";
import { useRouter } from 'next/router';

export const ExploreTasksView: FC = () => {
    const [projectsData, setProjectsData] = useState([]); // State to hold the fetched data
    const router = useRouter();

    useEffect(() => {
        // Fetch data from API when component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.BACKEND_API || "https://backend-blue-two.vercel.app/api"}`);
				console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    setProjectsData(data); // Set the fetched data into state
					console.log(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className="md:hero">
            <div className="md:hero-content flex flex-col">
                <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                    EXPLORE TASKS
                </h1>
                <div className='w-[100%] h-[100%]'>
                    <div className="md:p-12 lg:p-12">
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2'>
                            {projectsData.map((card, index) => (
                                <CardProject
                                    key={index}
                                    id={card.id}
									fid={card.fid}
                                    displayName={card.displayName}
                                    title={card.title}
                                    description={card.description}
                                    applicants={card.applicants}
                                    price={card.price}
                                    pfpUrl={card.pfpUrl}
									verifiedAddresses={card.verifiedAddresses}
                                    loading={false} // Set loading to false or provide loading logic here
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
