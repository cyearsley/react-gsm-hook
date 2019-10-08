import React, { useState } from 'react';

interface IGlobal {
	globalData: {[key: string]: any};
	setGlobalData: (namespace: React.ReactText, value: {[key: string]: any}) => void;
}

export const GlobalStateContext = React.createContext<IGlobal>({globalData: {}, setGlobalData: ()=>{}});

export const GlobalStateProvider = (props: {children: JSX.Element[]}) => {

	const [globalData, setGlobalData] = useState<{[key: string]: any}>({});

	const setData = (namespace: string | number, value: {[key: string]: any}) => {

		if (globalData[namespace] === undefined) {
				
			globalData[namespace] = {};
		}

		for (const key in value) {

			globalData[namespace][key] = value[key];
		}

		setGlobalData(Object.assign({}, globalData));
	}

	return (
		<GlobalStateContext.Provider value={{ globalData, setGlobalData: setData }}>
			{props.children}
		</GlobalStateContext.Provider>
	);
}
