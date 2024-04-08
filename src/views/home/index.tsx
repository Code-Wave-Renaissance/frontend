// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

import Wave from 'react-wavify';

// Mouse Position
const useMousePosition = () => {
	const [
		mousePosition,
		setMousePosition
	] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = ev => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};

		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return mousePosition;
};

// Function to map Y coordinate to a value between 40 and 80
function mapYCoordinateToValue(yCoordinate, screenHeight) {
	// Calculate the range of Y values from 0 to screenHeight
	const yRange = screenHeight;

	// Calculate the value range from 40 to 80
	const valueRange = 80 - 40;

	// Map the Y coordinate to the value range
	// When yCoordinate is 0, the value should be 40
	// When yCoordinate is screenHeight, the value should be 80
	const mappedValue = 40 + (yCoordinate / yRange) * valueRange;

	// Ensure the value is within the desired range (40 to 80)
	return Math.max(40, Math.min(80, mappedValue));
}

export const HomeView: FC = ({ }) => {
	const wallet = useWallet();
	const { connection } = useConnection();

	const balance = useUserSOLBalanceStore((s) => s.balance)
	const { getUserSOLBalance } = useUserSOLBalanceStore()

	const { y } = useMousePosition();

	// Calculate waveHeight based on the y coordinate
	const screenHeight = window.innerHeight;
	const waveHeight = mapYCoordinateToValue(y, screenHeight);

	// Calculate the X coordinate for the text to keep it centered
	const screenWidth = window.innerWidth;
	const textWidth = 200; // Adjust this value based on the width of your text
	const textX = (screenWidth - textWidth) / 2;

	return (
		<div className="md:hero">
			<div className="md:hero-content flex flex-col">
				<div className='mt-[12vh]'>
					<h1 className="h-[30vh] w-screen text-[50pt] sm:text-[80pt] md:text-[120pt] lg:text-[150pt] xl:text-[180pt] 2xl:text-[200pt] font-extrabold leading-[200pt] tracking-tight">
						<Wave fill="#1d4ed8" mask="url(#mask)" options={{ points: 3, speed: 0.1, amplitude: 80, height: waveHeight }} style={{ height: 'inherit' }}>
							<text x={textX / 12} y="200" fill="white" className="md:text-[120pt] lg:text-[150pt] xl:text-[180pt] 2xl:text-[200pt]">TASKFLOW</text>
							<mask id="mask">
								<text x={textX / 12} y="200" fill="white" className="md:text-[120pt] lg:text-[150pt] xl:text-[180pt] 2xl:text-[200pt]">TASKFLOW</text>
							</mask>
						</Wave>
					</h1>
				</div>
				<h4 className="md:w-full md:text-[20pt] lg:text-[30pt] xl:text-[40pt] 2xl:text-[50pt] text-center font-bold text-primary-focus p-0">
					FREELANCING MADE EASY
				</h4>
				<p className='text-secondary text-lg md:text-2xl lg:text-4xl leading-relaxed p-0'>Find, Create and Share Jobs like never seen before</p>
			</div>
		</div>
	);
};
