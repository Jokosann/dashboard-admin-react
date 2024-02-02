import Navlist from './Navlist';
import { SideBardata } from '../../../Data/sidebar.data';
import { iconSvg } from '../../../utils/image';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
	return (
		<div className="fixed flex flex-col top-0 gap-1 h-full shadow-sm bg-white z-20 pr-4">
			<div className="flex items-center h-[75px] px-8 cursor-pointer">
				<img src={iconSvg.logo} alt="logo" className="w-8 mr-3" />
				<h1 className="font-bold text-xl text-blue-dark">BankDash.</h1>
			</div>
			{SideBardata.map((item) => (
				<NavLink key={item.value} to={item.href}>
					{({ isActive }) => (
						<Navlist
							className={`relative navlist ${
								isActive ? 'nav__active' : ''
							} flex gap-5 justify-start items-center py-2 px-8 cursor-pointer h-[50px] hover:bg-slate-200`}
							image={item.image}
							value={item.value}
							svg={item.svg}
						/>
					)}
				</NavLink>
			))}
		</div>
	);
};

export default SideBar;
