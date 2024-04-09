export type TaskDataType = {
    id: string;
    fid: number;
    displayName: string;
    pfpUrl: string;
    title: string;
    description: string;
    price: number;
    verifiedAddresses: object;
    applicants: object[];
    status: string;
    dealWith: string;
};

export type TaskApplicantType = {
    id: string;
    fid: number;
    displayName: string;
    pfpUrl: string;
    address: string;
};