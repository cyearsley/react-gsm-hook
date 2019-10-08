import { useContext, useState, useEffect } from 'react';
import { GlobalStateContext } from './GlobalStateProvider';

export const useGlobalState = <T extends {}>(namespace?: string | number, defaultValue?: T): [T, (value: Partial<T>) => void] => {

	const { globalData, setGlobalData } = useContext(GlobalStateContext);
	const [globalNamespace] = useState<string | number>(namespace || "default");

	useEffect(() => {

		if (defaultValue !== undefined) {

			setGlobalData(globalNamespace, defaultValue);
		}

	}, []);

	const set = (value: Partial<T>) => {

		setGlobalData(globalNamespace, value);
	}

	return [globalData[globalNamespace] || defaultValue || {}, set];
}
