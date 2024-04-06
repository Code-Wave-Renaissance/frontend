import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="bg-primary bg-opacity-5 w-screen py-2" >
                <div className='flex flex-col col-span-2 mx-4 items-center md:items-center'>
                    <div className='flex flex-row ml-1 align-middle'>
                        <h1 className="text-start text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#9449FC] to-[#21EDAB]">
                            ©2024 TaskFlow
                        </h1>
                        <h1 className="text-start text-2xl ml-2 font-bold text-white">
                            Built on
                        </h1>
                        <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white self-center">
                            <div className='flex flex-row ml-3'>
                                <Image
                                    src="/solanaLogo.png"
                                    alt="solana icon"
                                    width={156}
                                    height={96}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};
