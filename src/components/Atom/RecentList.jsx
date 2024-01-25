const RecentList = ({ svg, deposit, date, price, textPrice }) => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center gap-4">
				<img src={`${svg}`} alt={`${svg}`} />
				<div>
					<p className="text-[15px] font-medium">{deposit}</p>
					<p className="text-sm text-slate-400">{date}</p>
				</div>
			</div>
			<p className={`font-medium ${textPrice}`}>{price}</p>
		</div>
	);
};

export default RecentList;
