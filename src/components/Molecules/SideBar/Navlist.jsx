const Navlist = (props) => {
	const { image, children } = props;
	return (
		<div className="flex gap-4 justify-start items-center w-36 p-2 rounded-md cursor-pointer hover:bg-slate-200">
			<img src={image} alt={image} className="w-[25px] h-[25px]" />
			<p className="text-sm text-[#d1d1d1">{children}</p>
		</div>
	);
};

export default Navlist;
