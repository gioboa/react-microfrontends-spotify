import { NEXT_SONG_EVENT } from 'shared';
import { useEffect, useState } from 'react';
import { musics } from '../../mocks/musics';

export const List = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onNextSong = () => {
		setSelectedIndex((prev) => prev + 1);
	};

	useEffect(() => {
		window.addEventListener(NEXT_SONG_EVENT, onNextSong);

		return () => {
			window.removeEventListener(NEXT_SONG_EVENT, onNextSong);
		};
	}, []);

	return (
		<div className='bg-dark w-full min-h-screen px-8 pt-16 pb-40'>
			{musics.map(({ name, items }, index) => {
				return (
					<div key={index} className='mt-10'>
						<div className='flex justify-between'>
							<a href='/#'>
								<h3 className='text-white text-2xl font-bold hover:underline'>
									{name}
								</h3>
							</a>
							<a href='/#'>
								<span className='uppercase hover:underline text-sm font-semibold text-dark-1'>
									see all
								</span>
							</a>
						</div>
						<div className='grid gap-5 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 mt-6'>
							{items.map(({ image, name, publisher }, index) => (
								<div
									key={index}
									className={`p-5 bg-[#181818] hover:bg-dark-3 shadow-sm shadow-black rounded-lg w-auto cursor-pointer ${
										index === selectedIndex ? 'shadow-gray-300' : ''
									}`}
								>
									<img src={image} alt='card-img' />
									<div className='text-white font-bold text-base mt-3 overflow-hidden text-ellipsis whitespace-nowrap w-auto'>
										{name}
									</div>
									<div className='text-dark-1 text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap w-auto'>
										{publisher}
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};
