import { iconSvg } from '../../../utils/image';

const Statistics = ({ classname }) => {
	return (
		<div
			className={`relative text-white flex flex-col justify-between max-w-sm rounded-3xl p-8 overflow-hidden bg-white shadow-md ${classname}`}
		>
			<img src={iconSvg.statistics} alt="" />
			<div className="absolute top-14 left-24 font-medium text-center">
				<p className="-mb-1">30%</p>
				<p>Entertainment</p>
			</div>
			<div className="absolute top-[105px] right-12 font-medium text-center">
				<p className="-mb-1">15%</p>
				<p>Bill Expense</p>
			</div>
			<div className="absolute top-40 left-12 font-medium text-center">
				<p className="-mb-1">35%</p>
				<p>Investment</p>
			</div>
			<div className="absolute bottom-20 right-28 font-medium text-center">
				<p className="-mb-1">20%</p>
				<p>Others</p>
			</div>
		</div>
	);
};

export default Statistics;
