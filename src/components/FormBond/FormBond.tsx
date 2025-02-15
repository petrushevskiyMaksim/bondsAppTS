import React, { FC } from 'react';
import { useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import { useDataForm } from '../store/DataFormContext';
import { DataType } from '../Table/Table';
import './form.css';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

const { RangePicker } = DatePicker;

interface SubmitButtonProps {
	form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
	form,
	children,
}) => {
	const [submittable, setSubmittable] = React.useState<boolean>(false);

	// Watch all values
	const values = Form.useWatch([], form);

	React.useEffect(() => {
		form
			.validateFields({ validateOnly: true })
			.then(() => setSubmittable(true))
			.catch(() => setSubmittable(false));
	}, [form, values]);

	return (
		<Button type='primary' htmlType='submit' disabled={!submittable}>
			{children}
		</Button>
	);
};

const FormBond: React.FC = () => {
	const [form] = Form.useForm();

	const { dataForm, setDataForm } = useDataForm();

	const onFinish = (values: DataType) => {
		const newData = {
			...values,
			key: Date.now(), // Уникальный ключ для таблицы
			order: dataForm.length + 1, // Порядковый номер
		};
		setDataForm(prevData => [...prevData, newData]);
		form.resetFields(); // Очистка формы после отправки
	};

	return (
		<Form
			form={form}
			onFinish={onFinish}
			name='validateOnly'
			layout='vertical'
			autoComplete='on'
		>
			<div className='form'>
				<Form.Item
					name='bondName'
					label='Название облигации'
					rules={[{ required: true }]}
				>
					<Input placeholder='Например: ОФЗ 26022' />
				</Form.Item>
				<Form.Item
					name='sumBonds'
					label='Количество облигаций'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='Например: 2' />
				</Form.Item>
				<Form.Item
					name='nominalPrice'
					label='Номинальная цена'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='1000' />
				</Form.Item>
				<Form.Item
					name='buyPrice'
					label='Цена покупки'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='Например: 847' />
				</Form.Item>
				<Form.Item
					name='brokerTax'
					label='Комиссия брокера'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='Например: 0.3' />
				</Form.Item>

				<Form.Item
					name='buyAndSell'
					className='flex'
					label='Дата покупки / Дата продажи'
					rules={[{ required: true }]}
				>
					<RangePicker />
				</Form.Item>

				<Form.Item
					name='couponDate'
					label='Дата ближайшего купона'
					rules={[{ required: true }]}
				>
					<DatePicker onChange={onChange} />
				</Form.Item>
				<Form.Item
					name='couponPeriod'
					label='Периодичность выплаты купона'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='Например: 182' />
				</Form.Item>
				<Form.Item
					name='NKD'
					label='Накопленный купонный доход'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='Например: 27.4' />
				</Form.Item>
			</div>

			<div className='form-buttons'>
				<div className='btn-outline'>
					<SubmitButton type='primary' form={form}>
						Добавить облигацию
					</SubmitButton>
				</div>
				<div className='btn-outline'>
					<Button type='primary' htmlType='reset'>
						Очистить форму
					</Button>
				</div>
			</div>
		</Form>
	);
};

export default FormBond;
