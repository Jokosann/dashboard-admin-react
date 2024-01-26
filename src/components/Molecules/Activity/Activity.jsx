import { iconSvg } from '../../../utils/image';

const Activity = ({ classname }) => {
	return (
		<div
			className={`flex flex-col gap-6 overflow-hidden bg-white rounded-3xl p-8 shadow-md ${classname}`}
		>
			<div className="flex items-center justify-end gap-6">
				<div className="flex items-center gap-3">
					<div className="w-4 h-4 bg-[#16DBCC] rounded-full"></div>
					<p className="text-slate-400">Diposit</p>
				</div>
				<div className="flex items-center gap-3">
					<div className="w-4 h-4 bg-[#FF82AC] rounded-full"></div>
					<p className="text-slate-400">Withdraw</p>
				</div>
			</div>
			<img src={iconSvg.activity} alt="activity" />
		</div>
	);
};

export default Activity;
