import { reloadIcon, trashIcon } from '@/utils/icons.tsx';

import { useState } from 'preact/hooks';

// 'struct' type to model a scoarecard's data
interface Score {
	math: number;
	history: number;
	english: number;
	science: number;
	art: number;
}

function ScoreCard() {
	const empty: Score = { math: 0, history: 0, english: 0, science: 0, art: 0 };
	const [score, setScore] = useState<Score>(empty);

	return (
		<div className='p-4 pr-8 pl-8  bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 w-full rounded-md'>
			<div className='grid grid-cols-2'>
				{/* reset button */}
				<button
					onClick={() => {
						setScore(empty);
					}}
					className='p-1 justify-self-start bg-gray-300 dark:bg-gray-700 rounded-md h-auto w-auto'
				>
					{reloadIcon}
				</button>
				{/* close button */}
				<button className='p-1 justify-self-end bg-gray-300 dark:bg-gray-700 rounded-md h-auto w-auto'>
					{trashIcon}
				</button>
			</div>
			{/* score input form */}
			<div className='grid grid-cols-5'>
				<input
					id='grade-input'
					className='w-auto bg-gray-100 dark:bg-gray-900 border-1 border-gray-800 dark:border-gray-200 rounded-md m-2 h-8 p-1'
					type='text'
					value={score['math']}
					name='math'
					required
				/>
				<input
					id='grade-input'
					className='w-auto bg-gray-100 dark:bg-gray-900 border-1 border-gray-800 dark:border-gray-200 rounded-md m-2 h-8 p-1'
					type='text'
					value={score['history']}
					name='history'
					required
				/>
				<input
					id='grade-input'
					className='w-auto bg-gray-100 dark:bg-gray-900 border-1 border-gray-800 dark:border-gray-200 rounded-md m-2 h-8 p-1'
					type='text'
					value={score['english']}
					name='english'
					required
				/>
				<input
					id='grade-input'
					className='w-auto bg-gray-100 dark:bg-gray-900 border-1 border-gray-800 dark:border-gray-200 rounded-md m-2 h-8 p-1'
					type='text'
					value={score['science']}
					name='science'
					required
				/>
				<input
					id='grade-input'
					className='w-auto bg-gray-100 dark:bg-gray-900 border-1 border-gray-800 dark:border-gray-200 rounded-md m-2 h-8 p-1'
					type='text'
					value={score['art']}
					name='art'
					required
				/>
			</div>
			{/* score readout */}
			<div className='grid grid-cols-3'>
				<div className='w-auto bg-gray-300 dark:bg-gray-700 rounded-md m-2 h-8 p-1'>
					Hi
				</div>
				<div className='w-auto bg-gray-300 dark:bg-gray-700 rounded-md m-2 h-8 p-1'>
					Lo
				</div>
				<div className='w-auto bg-gray-300 dark:bg-gray-700 rounded-md m-2 h-8 p-1'>
					Mean
				</div>
			</div>
		</div>
	);
}

export default ScoreCard;
