import Navlist from './Navlist';

const SideBar = () => {
	return (
		<div className="fixed flex flex-col gap-3 px-8 pt-6 h-full shadow-md bg-white z-20">
			<div className="flex items-center h-9 mb-4 px-2">
				<img src="./public/svg/logo.svg" alt="logo" className="w-7 mr-3" />
				<h1 className="font-bold text-xl text-[#343C6A]">BankDash.</h1>
			</div>
			<Navlist image="./public/svg/dashboard.svg">Dashboard</Navlist>
			<Navlist image="./public/svg/transaction.svg">Transactions</Navlist>
			<Navlist image="./public/svg/accounts.svg">Accounts</Navlist>
			<Navlist image="./public/svg/invesments.svg">Investments</Navlist>
			<Navlist image="./public/svg/credit_cards.svg">Credit Cards</Navlist>
			<Navlist image="./public/svg/loans.svg">Loans</Navlist>
			<Navlist image="./public/svg/services.svg">Services</Navlist>
			<Navlist image="./public/svg/previleges.svg">My Privileges</Navlist>
			<Navlist image="./public/svg/settings.svg">Setting</Navlist>
		</div>
	);
};

export default SideBar;
