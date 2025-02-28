import { useEffect, useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import _Select from '../Select/Select';
import { useDataForm } from '../../store/DataFormContext';
import { MONTH_FOR_SELECT } from '../../utils/constants/InfoTotal';
import { calcCost } from './calculations';
import moment from 'moment';
import './InfoTotal.css';

const { Text } = Typography;

const InfoTotal = () => {
	const { dataForm, setDataForm } = useDataForm();
	const [sumCost, setSumCost] = useState(0);
	const [sumIncome, setSumIncome] = useState(0);
	const cost = calcCost(dataForm);

	const getNextCouponDate = (currentDate: string, period: number): string => {
		const nextDate = moment(currentDate, 'DD-MM-YYYY');
		console.log(nextDate);

		if (period == 2) {
			nextDate.add(182, 'days');
		} else if (period == 4) {
			nextDate.add(90, 'days');
		} else {
			nextDate.add(365, 'days');
		}
		console.log(nextDate);
		return nextDate.format('DD-MM-YYYY');
	};

	const COLUMNS = [
		{
			title: 'Расходы',
			number: sumCost,
			type: 'cost',
		},
		{
			title: 'Прибыль',
			number: sumIncome,
			type: 'income',
		},
		{
			title: 'Сумма дохода в ',
			number: 0,
			type: 'income',
		},
		{
			title: 'Средне годовая доходность',
			number: 0,
			type: 'income',
		},
	];

	useEffect(() => {
		setSumCost(cost); // Вызываем функцию для расчета затрат при изменении dataForm
		calcIncome();
	}, [dataForm]);

	const handleSelectChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const handleSelectSearch = (value: string) => {
		console.log('search:', value);
	};

	const calcIncome = () => {
		let totalIncome = 0; // Создаем переменную куда будем записывать все доходы
		const updatedDataForm = [...dataForm]; // Создаем копию массива (поверхностная копия)
		const today = moment().startOf('day'); // Создаем сегодня

		// Перебор нашего нового массива облигаций
		updatedDataForm.forEach((bond, index) => {
			console.log(bond);

			// Проверка даты погашения
			//  преобразовываем даты в timestamp(миллисекунды)
			if (today.isSame(moment(bond.sellDate), 'day')) {
				// Высчитываем разницу между покупкой и продажей(погашением) + купон со всех бумаг
				const profit =
					bond.sumBonds *
						(bond.nominalPrice -
							(bond.buyPrice +
								bond.NKD +
								bond.buyPrice * (bond.brokerTax / 100))) +
					bond.sumBonds * bond.couponPrice;
				totalIncome += profit; // Добавляем прибыль от продажи(погашения) облигации
				updatedDataForm.splice(index, 1); // Удаляем облигацию из списка
			}

			// Проверка даты купона
			//  преобразовываем даты в timestamp(миллисекунды)
			if (today.isSame(moment(bond.couponDate), 'day')) {
				totalIncome += bond.couponPrice * bond.sumBonds; // Добавляем сумму купона
				// Изменяем дату купона на следующую
				bond.couponDate = getNextCouponDate(bond.couponDate, bond.couponPeriod);
			}
		});

		setSumIncome(totalIncome); // Обновляем состояние прибыли
		setDataForm(updatedDataForm); // Обновляем состояние dataForm (списка облигаций)
	};

	return (
		<Row className='row-info-total' justify={'space-between'} gutter={16}>
			{COLUMNS.map((item, i) => (
				<Col span={6} key={i}>
					<Card
						hoverable
						title={
							item.title === 'Сумма дохода в ' ? (
								<div className='card-title-wrap'>
									{item.title}{' '}
									<_Select
										placeholder={'Месяц'}
										options={MONTH_FOR_SELECT}
										onChange={handleSelectChange}
										onSearch={handleSelectSearch}
									/>
								</div>
							) : (
								item.title
							)
						}
					>
						<Text
							className='text-card'
							type={item.type === 'cost' ? 'danger' : 'success'}
						>
							{item.number}
						</Text>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default InfoTotal;
