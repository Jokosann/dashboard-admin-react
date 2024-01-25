import Header from '../components/Fragment/Header/Header';
import SideBar from '../components/Molecules/SideBar';

const transactionsPage = () => {
	return (
		<>
			<Header value="Transactions" />
			<SideBar />
			<section>
				<h1>Transactions Content</h1>
			</section>
		</>
	);
};

export default transactionsPage;
