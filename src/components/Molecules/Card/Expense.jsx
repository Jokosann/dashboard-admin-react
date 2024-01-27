import { iconSvg } from '../../../utils/image';

const Expense = ({ classname }) => {
	return (
		<div className={`bg-white p-4 h-52 rounded-3xl shadow-md`}>
			<img src={iconSvg.expense} alt="expense" className="w-full h-full object-cover" />
		</div>
	);
};

export default Expense;
