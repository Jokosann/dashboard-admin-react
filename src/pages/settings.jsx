import Header from '../components/Fragment/Header/Header';
import SideBar from '../components/Molecules/SideBar';

const settingsPage = () => {
	return (
		<>
			<Header value="settings" />
			<SideBar />
			<section>
				<h1>Settings Content</h1>
			</section>
		</>
	);
};

export default settingsPage;
