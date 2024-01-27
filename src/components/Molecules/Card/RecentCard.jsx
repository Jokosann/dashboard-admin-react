import { iconSvg } from '../../../utils/image';
import RecentList from '../../Atom/RecentList';

const RecentCard = ({ classname }) => {
	return (
		<div
			className={`flex flex-col justify-between  p-4 rounded-3xl overflow-hidden shadow-md bg-white ${classname}`}
		>
			<RecentList
				svg={iconSvg.deposit}
				deposit="Deposit from my Card"
				date="25 January 2024"
				price="-$1,665"
				textPrice="text-red-500"
			/>
			<RecentList
				svg={iconSvg.paypal}
				deposit="Deposit Paypal"
				date="22 January 2024"
				price="+$2,288"
				textPrice="text-green-500"
			/>
			<RecentList
				svg={iconSvg.jemmy}
				deposit="Jemmy Wilson"
				date="21 January 2024"
				price="+$2,929"
				textPrice="text-green-500"
			/>
		</div>
	);
};

export default RecentCard;
