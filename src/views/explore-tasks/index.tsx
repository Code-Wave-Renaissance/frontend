"use client"

import { FC, useState, useEffect } from "react";
import { CardProject } from "../../components/CardProject";

export const ExploreTasksView: FC = () => {
    const [projectsData, setProjectsData] = useState([]); // State to hold the fetched data
    const [loading, setLoading] = useState(true); // State to hold the loading status

    useEffect(() => {
        // Fetch data from API when component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.BACKEND_API || "https://backend-blue-two.vercel.app/api"}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    setProjectsData(data); // Set the fetched data into state
                    setLoading(false); // Set loading to false when data is fetched
                    console.log(data);
                } else {
                    console.error('Failed to fetch data');
                    // throw new Error('Failed to fetch data');
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
                <h1 className="text-center mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                    EXPLORE TASKS
                </h1>
                <div className='w-[100%] h-[100%]'>

                    {/* Display a loading message when data is being fetched */}
                    {loading && <p className="text-center mt-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">Loading...</p>}

                    {/* Display an error message if data fetching fails */}
                    {!loading && projectsData.length === 0 && <p className="text-center mt-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">No tasks found</p>}

                    {/* Display the fetched data */}
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
                                status={card.status}
                                loading={false} // Set loading to false or provide loading logic here
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
