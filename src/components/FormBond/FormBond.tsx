import React, { FC } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, DatePicker } from 'antd';
import { useDataForm } from '../store/DataFormContext';
import { DataType } from '../Table/Table';
import { dateFormate, dateFormateMy } from '../utils/date/dateFormate';
import {
	calcCouponIncome,
	calcCouponRub,
} from '../utils/calculations/calcCouponIncome';
import { yieldYearIncome } from '../utils/calculations/calcYieldYear';
import { daysMaturity } from '../utils/date/daysMaturity';
import moment from 'moment';
import './form.css';

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

const FormBond: React.FC = ({ className }) => {
	const [form] = Form.useForm();

	const { dataForm, setDataForm } = useDataForm();

	const dateBuy = new Date('2023-01-01');
	const dateSell = new Date('2023-01-02');
	const arrayBuyAndSell = [dateBuy, dateSell];

	const dateCoupon = new Date('2023-01-03');

	function renderBond() {
		const bond = {
			order: dataForm.length + 1,
			name: `Фэйк ${dataForm.length + 1}`,
			sumBonds: 2,
			nominalPrice: 1000,
			buyPrice: 950,
			brokerTax: 0.3,
			buyAndSell: dateFormateMy(arrayBuyAndSell),
			couponPrice: 50,
			couponDate: dateFormateMy(dateCoupon),
			couponPeriod: 2,
			NKD: 2,
			daysToMaturity: 182,
			key: Date.now(),
		};
		setDataForm(prev => [...prev, bond]);
	}

	const onFinish = (values: DataType) => {
		const newData = {
			...values,
			buyAndSell: dateFormate(values.buyAndSell),
			couponDate: dateFormate(values.couponDate),
			couponIncome: calcCouponIncome(values),
			couponIncomeRub: calcCouponRub(values),
			daysToMaturity: daysMaturity(values),
			yieldYear: yieldYearIncome(values),
			key: Date.now().toString(), // Уникальный ключ для таблицы Date.now()
			order: dataForm.length + 1, // Порядковый номер
		};

		setDataForm(prevData => [...prevData, newData]);
		form.resetFields(); // Очистка формы после отправки
	};

	return (
		<Form
			className={className}
			form={form}
			onFinish={onFinish}
			name='validateOnly'
			layout='vertical'
			autoComplete='on'
		>
			<div className='form'>
				<Form.Item
					name='name'
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
					name='couponPrice'
					label='Купон'
					rules={[{ required: true }]}
				>
					<Input type='number' placeholder='Например: 35' />
				</Form.Item>

				<Form.Item
					name='couponDate'
					label='Дата ближайшего купона'
					rules={[{ required: true }]}
				>
					<DatePicker />
				</Form.Item>
				<Form.Item
					name='couponPeriod'
					label='Купонов в год'
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
				<SubmitButton type='primary' form={form}>
					Добавить облигацию
				</SubmitButton>

				<Button type='primary' htmlType='reset'>
					Очистить форму
				</Button>

				<Button type='primary' htmlType='button' onClick={renderBond}>
					Фэйковая облигация
				</Button>
			</div>
		</Form>
	);
};

export default FormBond;
