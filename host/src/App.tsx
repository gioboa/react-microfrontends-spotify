import { loadRemoteModule } from '@softarc/native-federation';
import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { List } from './components/list/List';

export default () => {
	const Remote = React.lazy(
		async () => await loadRemoteModule('remote', './remote-app')
	);

	return (
		<div className='flex'>
			<Sidebar />
			<Header />
			<div className='w-full flex justify-end'>
				<div style={{ width: 'calc( 100% - 16rem )' }}>
					<List />
					<div className='h-24 w-full bg-dark text-white text-center p-8'>
						<React.Suspense fallback='MFEPlaceholder...'>
							<Remote />
						</React.Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};
