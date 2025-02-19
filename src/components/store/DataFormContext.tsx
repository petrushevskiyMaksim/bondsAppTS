import React, { createContext, useContext, useState } from 'react';
import { DataType } from '../Table/Table';

const dataResourses: Resource[] = [
	{
		id: Date.now(),
		text: 'SmartLab - Облигации',
		url: 'https://smart-lab.ru/q/ofz/',
	},
	{
		id: Date.now(),
		text: 'Московская биржа - Облигации',
		url: 'https://www.moex.com/s2644',
	},
	{
		id: Date.now(),
		text: 'RusBonds - Облигации',
		url: 'https://rusbonds.ru/',
	},
	{
		id: Date.now(),
		text: 'ДОХОД - Анализ облигации',
		url: 'https://www.dohod.ru/analytic/bonds',
	},
	{
		id: Date.now(),
		text: 'Investing.com - Облигации',
		url: 'https://ru.investing.com/rates-bonds/world-government-bonds',
	},
];

export interface Resource {
	id: number;
	text: string;
	url: string;
}

interface DataFormContextType {
	dataForm: DataType[];
	setDataForm: React.Dispatch<React.SetStateAction<DataType[]>>;
	resources: Resource[]; // Состояние для списка полезных ресурсов
	setResources: React.Dispatch<React.SetStateAction<Resource[]>>; // Функция для управления списком ресурсов
	isModalVisible: boolean; // Состояние видимости модального окна
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>; // Функция для управления видимостью модального окна
}

const DataFormContext = createContext<DataFormContextType | undefined>(
	undefined
);

export const DataFormProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [dataForm, setDataForm] = useState<DataType[]>([]);
	const [resources, setResources] = useState<Resource[]>(dataResourses); // Инициализация состояния для списка ресурсов
	const [isModalVisible, setModalVisible] = useState<boolean>(false); // Инициализация состояния для модального окна

	return (
		<DataFormContext.Provider
			value={{
				dataForm,
				setDataForm,
				resources,
				setResources,
				isModalVisible,
				setModalVisible,
			}}
		>
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
