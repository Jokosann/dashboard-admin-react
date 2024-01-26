import { iconSvg } from '../../../utils/image';

const Header = (props) => {
	const { value } = props;
	return (
		<header className="w-full h-[75px] bg-white fixed top-0 left-0 flex justify-center items-center shadow-sm z-10">
			<nav className="w-full flex items-center mx-auto px-8">
				<div className="w-full flex items-center justify-between">
					<h1 className="text-xl font-semibold pl-52 text-blue-dark">{value}</h1>
					<div className="flex items-center h-[60px] gap-6">
						<div className="relative w-56 h-10 px-4 bg-slate-200 overflow-hidden rounded-full">
							<img
								src={iconSvg.search}
								alt="search"
								className="absolute top-1/2 -translate-y-[45%] left-4 w-4"
							/>
							<input
								placeholder="Search for something"
								type="search"
								name="search"
								id="search"
								className="w-full h-full bg-transparent text-slate-900 placeholder:text-slate-500 placeholder:text-sm indent-6 text-sm focus:outline-none focus:border-none"
							/>
						</div>
						<div className="w-10 aspect-[1/1] flex items-center justify-center bg-slate-200 rounded-full cursor-pointer">
							<img src={iconSvg.setting} alt="logo" className="w-6" />
						</div>
						<div className="w-10 aspect-[1/1] flex items-center justify-center bg-slate-200 rounded-full cursor-pointer">
							<img src={iconSvg.bel} alt="logo" className="w-6" />
						</div>
						<div className="w-12 aspect-[1/1] flex items-center justify-center bg-slate-200 rounded-full overflow-hidden cursor-pointer">
							<img src={iconSvg.account} alt="logo" className="object-cover" />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
