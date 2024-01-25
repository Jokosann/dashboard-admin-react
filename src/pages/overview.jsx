import Header from '../components/Fragment/Header/Header';
import SideBar from '../components/Molecules/SideBar';

const OverviewPage = () => {
	return (
		<>
			<Header value="Overview" />
			<SideBar />
			<section>
				<h1>Overview Content</h1>
			</section>
		</>
	);
};

export default OverviewPage;
