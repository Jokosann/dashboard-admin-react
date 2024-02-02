import PropTypes from 'prop-types';

const Navlist = (props) => {
	const { svg, value, className } = props;

	return (
		<div className={className}>
			{svg}
			<p className="text-sm text-[#b1b1b1]">{value}</p>
		</div>
	);
};

Navlist.propTypes = {
	svg: PropTypes.element,
	value: PropTypes.string,
	className: PropTypes.string,
};

export default Navlist;
