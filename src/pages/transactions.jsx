import SubTitle from '../components/Atom/SubTitle';
import Header from '../components/Fragment/Header/Header';
import Card from '../components/Molecules/Card/Card';
import Expense from '../components/Molecules/Card/Expense';
import SideBar from '../components/Molecules/SideBar';
import { iconSvg } from '../utils/image';

const transactionsPage = () => {
	return (
		<section>
			<Header value="Transactions" />
			<SideBar />
			<div id="container">
				<div className="grid__overview_1 mb-4">
					<SubTitle value="My Cards" classname="my__card" />
					<p className="see__all text-sm place-self-end font-semibold text-blue-dark px-1">
						+ Add card
					</p>
					<SubTitle value="My Expense" classname="recent__" />
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
					<Expense classname=".card_3__overview" />
				</div>
			</div>
		</section>
	);
};

export default transactionsPage;
