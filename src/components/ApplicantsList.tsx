import React from 'react';
import { TaskApplicantType } from '../utils/type';

interface ApplicantsListProps {
    applicants: TaskApplicantType[];
}

const ApplicantsList: React.FC<ApplicantsListProps> = ({ applicants } : any) => {
    return (
        <div className="overflow-y-auto">
            {applicants.map((applicant, index) => (
                <div key={index} className="py-4 px-6 flex items-center justify-between mb-4">
                    <div>
                        <p className="text-lg font-semibold">{applicant.fid}</p>
                        <p className="text-lg font-semibold">{applicant.displayName}</p>
                        <p className="text-sm text-gray-500">{applicant.pfpUrl}</p>
                        <p className="text-sm text-gray-500">{applicant.address}</p>
                    </div>
                    {/* You can add additional elements/icons here if needed */}
                </div>
            ))}
        </div>
    );
};

export default ApplicantsList;
