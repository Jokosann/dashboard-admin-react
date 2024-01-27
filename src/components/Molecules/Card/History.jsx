import { iconSvg } from '../../../utils/image';

const History = ({ classname }) => {
	return (
		<div className={`overflow-hidden bg-white rounded-3xl shadow-md ${classname}`}>
			<img src={iconSvg.history} alt="history" />
		</div>
	);
};

export default History;
