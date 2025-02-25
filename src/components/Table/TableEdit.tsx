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
	Button,
} from 'antd';
import type { TableProps } from 'antd';
import { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { useDataForm } from '../store/DataFormContext';
import moment from 'moment';
import './table.css';

const { RangePicker } = DatePicker;
// console.log(DatePicker);

interface DataType {
	order: number;
	name: string;
	sumBonds: number;
	nominalPrice: number;
	buyPrice: number;
	brokerTax: number;
	buyAndSell: string;
	couponPrice: number;
	couponDate: string;
	couponPeriod: number;
	NKD: number;
	daysToMaturity: number;
	yieldYear: number;
	key: string;
	editable: boolean;
}

// const originData = Array.from({ length: 100 }).map<DataType>((_, i) => ({
// 	key: i.toString(),
// 	name: `Edward ${i}`,
// 	age: 32,
// 	address: `London Park no. ${i}`,
// }));

// {
// 			title: 'name',
// 			dataIndex: 'name',
// 			width: '25%',
// 			editable: true,
// 		},

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: string;
	inputType: 'string' | 'date' | 'number' | 'doubleDate';
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
	const inputNode =
		inputType === 'string' ? (
			<Input />
		) : inputType === 'date' ? (
			<Input />
		) : inputType === 'doubleDate' ? (
			<Input />
		) : (
			<InputNumber />
		);
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
	const { dataForm, setDataForm } = useDataForm();
	const [form] = Form.useForm();
	// const [data, setData] = useState<DataType[]>(dataForm);
	const [editingKey, setEditingKey] = useState('');

	const isEditing = (record: DataType) => record.key === editingKey;

	const edit = (record: Partial<DataType> & { key: React.Key }) => {
		console.log(record.buyAndSell);

		form.setFieldsValue({
			name: '',
			buyAndSell: '',
			couponDate: '',
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

			const newData = [...dataForm];
			const index = newData.findIndex(item => key === item.key);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setDataForm(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setDataForm(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

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

	const columns: TableProps<DataType>['columns'] = [
		{
			title: '№',
			width: 50,
			dataIndex: 'order',
			sorter: (a, b) => a.order - b.order,
		},
		{
			title: 'Название',
			width: 120,
			dataIndex: 'name',
			fixed: 'left',
			editable: true,
		},
		{
			title: 'Количество',
			width: 120,
			dataIndex: 'sumBonds',
			editable: true,
		},
		{
			title: 'Номинал',
			width: 100,
			dataIndex: 'nominalPrice',
			editable: true,
		},
		{
			title: 'Цена покупки',
			width: 100,
			dataIndex: 'buyPrice',
			editable: true,
		},
		{
			title: 'Комиссия брокера',
			width: 100,
			dataIndex: 'brokerTax',
			editable: true,
		},
		{
			title: 'Дата покупки / продажи',
			dataIndex: 'buyAndSell',
			width: 300,
			editable: true,
		},
		{
			title: 'Дней до погашения',
			width: 120,
			dataIndex: 'daysToMaturity',
		},
		{
			title: 'Купон',
			width: 100,
			dataIndex: 'couponPrice',
			editable: true,
		},
		{
			title: 'Купонная доходность',
			width: 200,
			dataIndex: 'couponIncome',
		},
		{
			title: 'Кол-во купонов в год',
			width: 130,
			dataIndex: 'couponPeriod',
			editable: true,
		},
		{
			title: 'Дата купона',
			dataIndex: 'couponDate',
			width: 150,
			editable: true,
		},
		{
			title: 'НКД',
			width: 100,
			dataIndex: 'NKD',
			editable: true,
		},
		{
			title: 'Доходность в год',
			width: 120,
			dataIndex: 'yieldYear',
		},
		{
			title: 'Действие',
			width: 120,
			dataIndex: 'operation',
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
					<span>
						<Typography.Link
							disabled={editingKey !== ''}
							onClick={() => edit(record)}
						>
							Edit
						</Typography.Link>
					</span>
				);
			},
		},
	];

	const mergedColumns: TableProps<DataType>['columns'] = columns.map(col => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: DataType) => ({
				record,
				inputType:
					col.dataIndex === 'name'
						? 'string'
						: col.dataIndex === 'buyAndSell'
						? 'doubleDate'
						: col.dataIndex === 'couponDate'
						? 'date'
						: 'number',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});

	return (
		<Form form={form} component={false}>
			<Table<DataType>
				components={{
					body: { cell: EditableCell },
				}}
				className={className}
				columns={mergedColumns}
				dataSource={dataForm}
				sticky
				scroll={{ x: 'max-content', y: 300 }} // Включаем прокрутку
				pagination={{ pageSize: 10 }}
			/>
		</Form>
	);
};

export default TableEdit;
