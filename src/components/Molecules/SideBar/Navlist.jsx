import { Link } from 'react-router-dom';

const Navlist = (props) => {
	const { children, value, href, className, onClick = () => {} } = props;

	return (
		<Link to={href} onClick={onClick}>
			<div className={className}>
				{children}
				<p className="text-sm text-[#b1b1b1]">{value}</p>
			</div>
		</Link>
	);
};

export default Navlist;
