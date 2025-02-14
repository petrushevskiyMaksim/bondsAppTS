import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
	order: number;
	key: string;
	name: string;
	sumBonds: number;
	nominalPrice: number;
	buyPrice: number;
	brokerTax: number;
	dateBuyAndSell: string[];
	couponDate: string;
	couponPeriod: number;
	NKD: number;
}

const columns: TableProps<DataType>['columns'] = [
	{
		title: '№',
		dataIndex: 'order',
		key: 'order',
	},
	{
		title: 'Название',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Количество',
		dataIndex: 'sumBonds',
		key: 'sumBonds',
	},
	{
		title: 'Номинал',
		dataIndex: 'nominalPrice',
		key: 'nominalPrice',
	},
	{
		title: 'Цена покупки',
		dataIndex: 'buyPrice',
		key: 'buyPrice',
	},
	{
		title: 'Комиссия брокера',
		dataIndex: 'brokerTax',
		key: 'brokerTax',
	},
	{
		title: 'Дата покупки / продажи',
		dataIndex: 'dateBuyAndSell',
		key: 'dateBuyAndSell',
	},
	{
		title: 'Дата купона',
		dataIndex: 'couponDate',
		key: 'couponDate',
	},
	{
		title: 'Кол-во купонов в год',
		dataIndex: 'couponPeriod',
		key: 'couponPeriod',
	},
	{
		title: 'НКД',
		dataIndex: 'NKD',
		key: 'NKD',
	},
];

const data: DataType[] = [
	{
		order: 1,
		key: '1',
		name: 'John Brown',
		sumBonds: 32,
		nominalPrice: 1000,
		buyPrice: 950,
		brokerTax: 0.3,
		dateBuyAndSell: ['01.02.2024', '02.02.2025'],
		couponDate: '02.22.2025',
		couponPeriod: 2,
		NKD: 22,
		
	},

	{
		order: 2,
		key: '2',
		name: 'Jim Green',
		sumBonds: 42,
		nominalPrice: 1000,
		buyPrice: 700,
		brokerTax: 0.3,
		dateBuyAndSell: ['01.02.2024', '02.02.2025'],
		couponDate: '02.22.2025',
		couponPeriod: 2,
		NKD: 22,
		
	},

	{
		order: 3,
		key: '3',
		name: 'Joe Black',
		sumBonds: 32,
		nominalPrice: 1000,
		buyPrice: 880,
		brokerTax: 0.3,
		dateBuyAndSell: ['01.02.2024', '02.02.2025'],
		couponDate: '02.22.2025',
		couponPeriod: 2,
		NKD: 22,
		
	},
];

const _Table: React.FC = () => (
	<Table<DataType> columns={columns} dataSource={data} />
);

export default _Table;
