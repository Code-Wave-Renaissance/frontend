export type CreatorFundingType = {
    id: number;
    creatorName: string;
    projectName: string;
    projectDescription: string;
    motivation: string;
    quantityToFund: number;
    quantityRaised: number;
    currency: string[];
    imageNFT: string;
    projectImages: string[];
    pplFunding: { name: string; quantityInvested: number }[];
    projectLinks: string[]; 
};

export type pplFundingType = {
    name: string;
    quantityInvested: number;
};

export type TaskDataType = {
    id: string;
    fid: number;
    displayName: string;
    pfpUrl: string;
    title: string;
    description: string;
    price: number;
    verifiedAddresses: object;
    applicants: object;
    status: string;
};

export type TaskApplicantType = {
    id: string;
    fid: number;
    displayName: string;
    pfpUrl: string;
    address: string;
};