import React from 'react';
import { pplFundingType } from '../utils/type';

interface ApplicantsListProps {
    applicants: pplFundingType[];
}

const ApplicantsList: React.FC<ApplicantsListProps> = ({ applicants }) => {
    return (
        <div className="overflow-y-auto">
            {applicants.map((applicant, index) => (
                <div key={index} className="py-4 px-6 flex items-center justify-between mb-4">
                    <div>
                        <p className="text-lg font-semibold">{applicant.name}</p>
                        <p className="text-sm text-gray-500">Funded: {applicant.quantityInvested}</p>
                    </div>
                    {/* You can add additional elements/icons here if needed */}
                </div>
            ))}
        </div>
    );
};

export default ApplicantsList;
