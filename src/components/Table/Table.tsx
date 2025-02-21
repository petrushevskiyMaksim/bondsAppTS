import React, { useState } from 'react';
import {
	Table,
	Empty,
	Form,
	Input,
	InputNumber,
	DatePicker,
	Typography,
	Popconfirm,
} from 'antd';
import type { TableProps } from 'antd';
import { useDataForm } from '../store/DataFormContext';
import './table.css';

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

const { RangePicker } = DatePicker;

export interface DataType {
	order: number;
	key: string;
	name: string;
	sumBonds: number;
	nominalPrice: number;
	buyPrice: number;
	brokerTax: number;
	couponPrice: number;
	buyAndSell: string;
	yieldYear: number;
	daysToMaturity: number;
	couponDate: string;
	couponPeriod: number;
	NKD: number;
}

// const columns: TableProps<DataType>['columns'] = [
// 	{
// 		title: '№',
// 		width: 50,
// 		dataIndex: 'order',
// 		key: 'order',
// 	},
// 	{
// 		title: 'Название',
// 		width: 120,
// 		dataIndex: 'name',
// 		key: 'name',
// 		fixed: 'left',
// 	},
// 	{
// 		title: 'Количество',
// 		width: 120,
// 		dataIndex: 'sumBonds',
// 		key: 'sumBonds',
// 	},
// 	{
// 		title: 'Номинал',
// 		width: 100,
// 		dataIndex: 'nominalPrice',
// 		key: 'nominalPrice',
// 	},
// 	{
// 		title: 'Цена покупки',
// 		width: 100,
// 		dataIndex: 'buyPrice',
// 		key: 'buyPrice',
// 	},
// 	{
// 		title: 'Комиссия брокера',
// 		width: 100,
// 		dataIndex: 'brokerTax',
// 		key: 'brokerTax',
// 	},
// 	{
// 		title: 'Дата покупки / продажи',
// 		dataIndex: 'buyAndSell',
// 		key: 'buyAndSell',
// 	},
// 	{
// 		title: 'Дней до погашения',
// 		width: 120,
// 		dataIndex: 'daysToMaturity',
// 		key: 'daysToMaturity',
// 	},
// 	{
// 		title: 'Купон',
// 		width: 100,
// 		dataIndex: 'couponPrice',
// 		key: 'couponPrice',
// 	},
// 	{
// 		title: 'Купонная доходность',
// 		width: 200,
// 		dataIndex: 'couponIncome',
// 		key: 'couponIncome',
// 	},
// 	{
// 		title: 'Кол-во купонов в год',
// 		width: 130,
// 		dataIndex: 'couponPeriod',
// 		key: 'couponPeriod',
// 	},
// 	{
// 		title: 'Дата купона',
// 		dataIndex: 'couponDate',
// 		key: 'couponDate',
// 	},
// 	{
// 		title: 'НКД',
// 		width: 100,
// 		dataIndex: 'NKD',
// 		key: 'NKD',
// 	},
// 	{
// 		title: 'Доходность в год',
// 		width: 120,
// 		dataIndex: 'yieldYear',
// 		key: 'yieldYear',
// 	},
// 	{
// 		title: 'Действие',
// 		width: 120,
// 		dataIndex: 'action',
// 		key: 'action',
// 	},
// 	{
// 		title: 'Действие',
// 		width: 120,
// 		dataIndex: 'action',
// 		key: 'action',
// 		render: (_: any, record: DataType) => {
// 			const editable = isEditing(record);
// 			return editable ? (
// 				<span>
// 					<Typography.Link
// 						onClick={() => save(record.key)}
// 						style={{ marginInlineEnd: 8 }}
// 					>
// 						Save
// 					</Typography.Link>
// 					<Popconfirm title='Sure to cancel?' onConfirm={cancel}>
// 						<a>Cancel</a>
// 					</Popconfirm>
// 				</span>
// 			) : (
// 				<Typography.Link
// 					disabled={editingKey !== ''}
// 					onClick={() => edit(record)}
// 				>
// 					Edit
// 				</Typography.Link>
// 			);
// 		},
// 	},
// ];

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: string;
	inputType: 'number' | 'text' | 'date';
	record: DataType;
	index: number;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	// const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

const TableEdit: React.FC = ({ className }) => {
	const { dataForm } = useDataForm();
	const [form] = Form.useForm();
	const [data, setData] = useState<DataType[]>(dataForm);
	const [editingKey, setEditingKey] = useState('');

	console.log(data);
	const isEditing = (record: DataType) => record.key === editingKey;

	const edit = (record: Partial<DataType> & { key: React.Key }) => {
		// console.log(record, record.key);

		form.setFieldsValue({
			name: '',
			sumBonds: '',
			nominalPrice: '',
			...record,
		});
		setEditingKey(record.key);
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as DataType;

			const newData = [...data];
			const index = newData.findIndex(item => key === item.key);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

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
			title: 'Дней до погашения',
			width: 120,
			dataIndex: 'daysToMaturity',
			key: 'daysToMaturity',
		},
		{
			title: 'Купон',
			width: 100,
			dataIndex: 'couponPrice',
			key: 'couponPrice',
		},
		{
			title: 'Купонная доходность',
			width: 200,
			dataIndex: 'couponIncome',
			key: 'couponIncome',
		},
		{
			title: 'Кол-во купонов в год',
			width: 130,
			dataIndex: 'couponPeriod',
			key: 'couponPeriod',
		},
		{
			title: 'Дата купона',
			dataIndex: 'couponDate',
			key: 'couponDate',
		},
		{
			title: 'НКД',
			width: 100,
			dataIndex: 'NKD',
			key: 'NKD',
		},
		{
			title: 'Доходность в год',
			width: 120,
			dataIndex: 'yieldYear',
			key: 'yieldYear',
		},
		// {
		// 	title: 'Действие',
		// 	width: 120,
		// 	dataIndex: 'action',
		// 	key: 'action',
		// },
		{
			title: 'Действие',
			width: 120,
			dataIndex: 'action',
			key: 'action',
			render: (_: any, record: DataType) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Typography.Link
							onClick={() => save(record.key)}
							style={{ marginInlineEnd: 8 }}
						>
							Save
						</Typography.Link>
						<Popconfirm title='Sure to cancel?' onConfirm={cancel}>
							<a>Cancel</a>
						</Popconfirm>
					</span>
				) : (
					<Typography.Link
						disabled={editingKey !== ''}
						onClick={() => edit(record)}
					>
						Edit
					</Typography.Link>
				);
			},
		},
	];

	// const columns = [
	// 	{
	// 		title: 'name',
	// 		dataIndex: 'name',
	// 		width: '25%',
	// 		editable: true,
	// 	},
	// 	{
	// 		title: 'age',
	// 		dataIndex: 'age',
	// 		width: '15%',
	// 		editable: true,
	// 	},
	// 	{
	// 		title: 'address',
	// 		dataIndex: 'address',
	// 		width: '40%',
	// 		editable: true,
	// 	},
	// 	{
	// 		title: 'operation',
	// 		dataIndex: 'operation',
	// 		render: (_: any, record: DataType) => {
	// 			const editable = isEditing(record);
	// 			return editable ? (
	// 				<span>
	// 					<Typography.Link
	// 						onClick={() => save(record.key)}
	// 						style={{ marginInlineEnd: 8 }}
	// 					>
	// 						Save
	// 					</Typography.Link>
	// 					<Popconfirm title='Sure to cancel?' onConfirm={cancel}>
	// 						<a>Cancel</a>
	// 					</Popconfirm>
	// 				</span>
	// 			) : (
	// 				<Typography.Link
	// 					disabled={editingKey !== ''}
	// 					onClick={() => edit(record)}
	// 				>
	// 					Edit
	// 				</Typography.Link>
	// 			);
	// 		},
	// 	},
	// ];

	const mergedColumns: TableProps<DataType>['columns'] = columns.map(col => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: DataType) => ({
				record,
				inputType: col.dataIndex === 'name' ? 'text' : 'number',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});

	return (
		<>
			{dataForm.length > 0 ? (
				<Form form={form} component={false}>
					<Table<DataType>
						className={className}
						columns={mergedColumns}
						dataSource={dataForm}
						sticky
						scroll={{ x: 'max-content', y: 300 }} // Включаем прокрутку
						pagination={{ pageSize: 10 }}
					/>
				</Form>
			) : (
				<Empty
					style={{ padding: '20px' }}
					description='Нет облигаций для отображения'
				/>
			)}
		</>
		// <Form form={form} component={false}>
		// 	<Table<DataType>
		// 		components={{
		// 			body: { cell: EditableCell },
		// 		}}
		// 		bordered
		// 		dataSource={data}
		// 		columns={mergedColumns}
		// 		rowClassName='editable-row'
		// 		pagination={{ onChange: cancel }}
		// 	/>
		// </Form>
	);
};

// const _Table: React.FC = ({ className }) => {
// 	const { dataForm } = useDataForm();

// 	return (
// 		<>
// 			{dataForm.length > 0 ? (
// 				<TableEdit<DataType>
// 					className={className}
// 					columns={columns}
// 					dataSource={dataForm}
// 					sticky
// 					scroll={{ x: 'max-content', y: 300 }} // Включаем прокрутку
// 					pagination={{ pageSize: 10 }}
// 				/>
// 			) : (
// 				<Empty
// 					style={{ padding: '20px' }}
// 					description='Нет облигаций для отображения'
// 				/>
// 			)}
// 		</>
// 	);
// };

export default TableEdit;
