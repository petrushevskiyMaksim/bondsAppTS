import React, { createContext, useContext, useState } from 'react';
import { DataType } from '../Table/Table';

interface DataFormContextType {
	dataForm: DataType[];
	setDataForm: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const DataFormContext = createContext<DataFormContextType | undefined>(
	undefined
);

export const DataFormProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [dataForm, setDataForm] = useState<DataType[]>([]);

	return (
		<DataFormContext.Provider value={{ dataForm, setDataForm }}>
			{children}
		</DataFormContext.Provider>
	);
};

export const useDataForm = () => {
	const context = useContext(DataFormContext);
	if (!context) {
		throw new Error('useDataForm must be used within a DataFormProvider');
	}
	return context;
};
