import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OverviewPage from './pages/overview';
import TransactionPage from './pages/transactions';
import './index.css';
import AccountsPage from './pages/accounts';
import CreditPage from './pages/credit';
import InvesmentsPage from './pages/invesments';
import LoansPage from './pages/loans';
import ServicesPage from './pages/services';
import PrivilegesPage from './pages/privileges';
import SettingsPage from './pages/settings';
import SideBarContextProvider from './context/SideBarContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <OverviewPage />,
	},
	{
		path: '/transactions',
		element: <TransactionPage />,
	},
	{
		path: '/accounts',
		element: <AccountsPage />,
	},
	{
		path: '/investments',
		element: <InvesmentsPage />,
	},
	{
		path: '/credit',
		element: <CreditPage />,
	},
	{
		path: '/loans',
		element: <LoansPage />,
	},
	{
		path: '/services',
		element: <ServicesPage />,
	},
	{
		path: '/privileges',
		element: <PrivilegesPage />,
	},
	{
		path: '/settings',
		element: <SettingsPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SideBarContextProvider>
			<RouterProvider router={router} />
		</SideBarContextProvider>
	</React.StrictMode>
);
