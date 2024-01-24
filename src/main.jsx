import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OverviewPage from './pages/overview';
import Header from './components/Fragment/Header/Header';
import SideBar from './components/Molecules/SideBar';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <OverviewPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<SideBar />
		<RouterProvider router={router} />
	</React.StrictMode>
);
