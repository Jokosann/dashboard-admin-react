import SubTitle from '../components/Atom/SubTitle';
import Header from '../components/Fragment/Header/Header';
import Activity from '../components/Molecules/Activity/Activity';
import Card from '../components/Molecules/Card/Card';
import History from '../components/Molecules/Card/History';
import RecentCard from '../components/Molecules/Card/RecentCard';
import Statistics from '../components/Molecules/Card/Statistics';
import Transfer from '../components/Molecules/Card/Transfer';
import SideBar from '../components/Molecules/SideBar';
import { iconSvg } from '../utils/image';

const OverviewPage = () => {
	return (
		<section>
			<Header value="Overview" />
			<SideBar />
			<div id="container">
				<div className="grid__overview_1 mb-4">
					<SubTitle value="My Cards" classname="my__card" />
					<p className="see__all text-sm place-self-end font-semibold text-blue-dark px-1">
						See All
					</p>
					<SubTitle value="Recent Transaction" classname="recent__" />
					<Card
						text="card_1__overview text-white"
						text2="text-[#c4c3fa]"
						chip={iconSvg.chip_white}
						logoAtm={iconSvg.shapecard_white}
						background="bg-gradient-to-tr from-[#4c49ed] to-[#130fef]"
						backgroundDown="bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.05)]"
					/>
					<Card
						text="card_2__overview text-black"
						text2="text-[#718EBF]"
						chip={iconSvg.chip_gray}
						logoAtm={iconSvg.shapecard_gray}
						background="bg-white"
						backgroundDown="bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.05)] border-t border-[rgb(100, 116, 150)]"
					/>
					<RecentCard classname="card_3__overview" />
					<SubTitle value="Weekly Activity" classname="weekly__activity" />
					<SubTitle value="Expense Statistics" classname="text__statistik" />
					<Activity classname="activity__card" />
					<Statistics classname="statistic__card" />
				</div>
				<div className="grid__overview_2">
					<SubTitle value="Quick Transfer" classname="quick__transfer" />
					<SubTitle value="Balance History" classname="balence__history" />
					<Transfer classname="transfer__card" />
					<History classname="transfer__card2" />
				</div>
			</div>
		</section>
	);
};

export default OverviewPage;
