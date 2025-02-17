import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useDataForm } from '../store/DataFormContext';

// const data: DataType[] = [
// 	{
// 		order: 1,
// 		key: '1',
// 		name: 'John Brown',
// 		sumBonds: 32,
// 		nominalPrice: 1000,
// 		buyPrice: 950,
// 		brokerTax: 0.3,
// 		buyAndSell: '01.02.2024 - 02.02.2025',
// 		couponDate: '02.22.2025',
// 		couponPeriod: 2,
// 		NKD: 22,
// 	},

// 	{
// 		order: 2,
// 		key: '2',
// 		name: 'Jim Green',
// 		sumBonds: 42,
// 		nominalPrice: 1000,
// 		buyPrice: 700,
// 		brokerTax: 0.3,
// 		buyAndSell: '01.02.2024 - 02.02.2025',
// 		couponDate: '02.22.2025',
// 		couponPeriod: 2,
// 		NKD: 22,
// 	},

// 	{
// 		order: 3,
// 		key: '3',
// 		name: 'Joe Black',
// 		sumBonds: 32,
// 		nominalPrice: 1000,
// 		buyPrice: 880,
// 		brokerTax: 0.3,
// 		buyAndSell: '01.02.2024 - 02.02.2025',
// 		couponDate: '02.22.2025',
// 		couponPeriod: 2,
// 		NKD: 22,
// 	},
// ];

export interface DataType {
	order: number;
	key: string;
	name: string;
	sumBonds: number;
	nominalPrice: number;
	buyPrice: number;
	brokerTax: number;
	buyAndSell: string;
	couponDate: string;
	couponPeriod: number;
	NKD: number;
}

const columns: TableProps<DataType>['columns'] = [
	{
		title: '№',
		width: 50,
		dataIndex: 'order',
		key: 'order',
	},
	{
		title: 'Название',
		width: 120,
		dataIndex: 'name',
		key: 'name',
		fixed: 'left',
	},
	{
		title: 'Количество',
		width: 120,
		dataIndex: 'sumBonds',
		key: 'sumBonds',
	},
	{
		title: 'Номинал',
		width: 100,
		dataIndex: 'nominalPrice',
		key: 'nominalPrice',
	},
	{
		title: 'Цена покупки',
		width: 100,
		dataIndex: 'buyPrice',
		key: 'buyPrice',
	},
	{
		title: 'Комиссия брокера',
		width: 100,
		dataIndex: 'brokerTax',
		key: 'brokerTax',
	},
	{
		title: 'Дата покупки / продажи',
		dataIndex: 'buyAndSell',
		key: 'buyAndSell',
	},
	{
		title: 'Дата купона',
		dataIndex: 'couponDate',
		key: 'couponDate',
	},
	{
		title: 'Кол-во купонов в год',
		width: 130,
		dataIndex: 'couponPeriod',
		key: 'couponPeriod',
	},
	{
		title: 'НКД',
		width: 100,
		dataIndex: 'NKD',
		key: 'NKD',
	},
];

const _Table: React.FC = ({ className }) => {
	const { dataForm } = useDataForm();

	return (
		<Table<DataType>
			className={className}
			columns={columns}
			dataSource={dataForm}
			sticky
			scroll={{ x: 'max-content' }} // Включаем прокрутку
			pagination={{ pageSize: 10 }}
		/>
	);
};

export default _Table;
