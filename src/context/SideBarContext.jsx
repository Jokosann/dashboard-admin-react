import { createContext, useState } from 'react';

const SideBarContext = createContext();

const SideBarContextProvider = ({ children }) => {
	const [selected, setSelected] = useState(0);

	return (
		<SideBarContext.Provider value={{ selected, setSelected }}>
			{children}
		</SideBarContext.Provider>
	);
};

export const Sidebar = SideBarContext;
export default SideBarContextProvider;
