const Card = (props) => {
	const { chip, background, backgroundDown, logoAtm, text, text2 } = props;
	return (
		<div
			className={`flex flex-col justify-between w-full h-52 ${text}  rounded-3xl overflow-hidden ${background} shadow-md`}
		>
			<div className="flex justify-between items-start px-6 pt-4">
				<div>
					<p className={`-mb-1 text-xs ${text2}`}>Balance</p>
					<p className="text-xl font-semibold">$5,892</p>
				</div>
				<img src={`${chip}`} alt="chip" />
			</div>
			<div className="flex items-center gap-8 px-6">
				<div>
					<p className={`uppercase text-xs font-medium ${text2}`}>Card Holder</p>
					<p className="text-sm font-medium">Eddy Cusuma</p>
				</div>
				<div>
					<p className={`uppercase text-xs font-medium ${text2}`}>Valid Thru</p>
					<p className="text-sm font-medium">12/12</p>
				</div>
			</div>
			<div className={`flex justify-between items-start px-6 pb-4 pt-4 ${backgroundDown}`}>
				<p className="font-semibold text-xl">1222 **** **** 3279</p>
				<img src={`${logoAtm}`} alt="svg" />
			</div>
		</div>
	);
};

export default Card;
