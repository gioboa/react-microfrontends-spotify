import { Account } from "../Icons/Account";
import { ArrowLeft } from "../Icons/ArrowLeft";
import { ArrowRight } from "../Icons/ArrowRight";
import { Dropdown } from "../Icons/Dropdown";

export const Header = () => (
	<header className='relative h-8'>
		<div className='flex justify-between transition-colors px-8 py-3 fixed z-10 right-0 top-0 bg-black w-[calc(100%-16rem)]'>
			<div className='flex'>
				<div className='flex'>
					<ArrowLeft />
					<ArrowRight />
				</div>
			</div>
			<div>
				<div className='relative'>
					<div className='bg-black hover:bg-dark-3 select-none rounded-2xl flex py-1 pl-1 pr-2 items-center cursor-pointer'>
						<Account />
						<div className='text-white font-semibold text-sm flex items-center mx-3'>
							Jhon Doe
						</div>
						<Dropdown />
					</div>
				</div>
			</div>
		</div>
	</header>
);
