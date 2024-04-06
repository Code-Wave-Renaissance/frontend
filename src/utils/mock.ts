export const creatorFundingData = [
    {
        id: 0,
        creatorName: 'Jane Smith',
        projectName: 'Code with Rosalbinha',
        projectDescription: 'Embark on a journey through the artist\'s imagination with this captivating project. Delve into the depths of creativity and explore a world where colors dance and shapes intertwine.',
        motivation: 'I am driven by a passion to express my innermost thoughts and emotions through art. With your support, I can continue to bring my visions to life and share them with the world.',
        quantityToFund: 5000,
        quantityRaised: 3800,
        currency: [
            'ETH',
            'DAI',
        ],
        imageNFT: 'https://picsum.photos/900/300',
        projectImages: [
            'https://picsum.photos/900/300',
            'https://picsum.photos/900/300',
            'https://picsum.photos/900/300',
            'https://picsum.photos/900/300',
            'https://picsum.photos/900/300'
        ],
        pplFunding: [
            { name: 'John Doe', quantityInvested: 200 },
            { name: 'Alice Johnson', quantityInvested: 800 },
            { name: 'Michael Brown', quantityInvested: 1200 }
        ],
        projectLinks: ['https://www.artisticendeavor.com', 'https://www.instagram.com/artisticendeavor']
    },
];

export const taskData = [
    {
        id: '0',
        fid: 0,
        displayName: 'Jane Smith',
        pfpUrl: 'https://picsum.photos/200',
        title: 'My cool TASK 1',
        description: 'Embark on a journey through the artist\'s and explore a world where colors dance and shapes intertwine.',
        price: 5000,
        verifiedAddresses: {},
        applicants: {
            '0': {
                id: '0',
                fid: 0,
                displayName: 'John Doe',
                pfpUrl: 'https://picsum.photos/200',
                address: '0x1234567890'
            },
            '1': {
                id: '1',
                fid: 1,
                displayName: 'Alice Johnson',
                pfpUrl: 'https://picsum.photos/200',
                address: '0x0987654321'
            },
            '2': {
                id: '2',
                fid: 2,
                displayName: 'Michael Brown',
                pfpUrl: 'https://picsum.photos/200',
                address: '0x1357924680'
            }
        }
    }
];