import Header from '../components/Fragment/Header/Header';
import Card from '../components/Molecules/Card/Card';
import RecentCard from '../components/Molecules/Card/RecentCard';
import SideBar from '../components/Molecules/SideBar';

const OverviewPage = () => {
	return (
		<>
			<Header value="Overview" />
			<SideBar />
			<section>
				<div className="grid grid-cols-3 mb-3 gap-6">
					<p className="text-base font-semibold text-blue-dark px-1">My Cards</p>
					<p className="text-sm place-self-end font-semibold text-blue-dark px-1">See All</p>
					<p className="text-base font-semibold text-blue-dark px-1">Recent Transaction</p>
				</div>
				<div className="grid grid-cols-3 gap-6">
					<Card
						text="text-white"
						text2="text-[#c4c3fa]"
						chip="public/svg/chip-white.svg"
						logoAtm="public/svg/shapecard-white.svg"
						background="bg-gradient-to-tr from-[#4c49ed] to-[#130fef]"
						backgroundDown="bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.05)]"
					/>
					<Card
						text="text-black"
						text2="text-[#718EBF]"
						chip="public/svg/chip-gray.svg"
						logoAtm="public/svg/shapecard-gray.svg"
						background="bg-white"
						backgroundDown="bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.05)] border-t border-[rgb(100, 116, 150)]"
					/>
					<RecentCard />
				</div>
			</section>
		</>
	);
};

export default OverviewPage;
