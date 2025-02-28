import { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Select, Divider } from 'antd';
import { useDataForm } from '../../store/DataFormContext';
import './InfoTotal.css';

const { Text } = Typography;

const InfoTotal = () => {
	const { dataForm } = useDataForm();
	const [sumCost, setSumCost] = useState(0); // Изменяем на число, а не массив
	const col = [
		{
			title: 'Расходы',
			number: sumCost,
			type: 'cost',
		},
		{
			title: 'Прибыль',
			number: 0,
			type: 'income',
		},
		{
			title: 'Сумма дохода в месяц',
			number: 0,
			type: 'income',
		},
		{
			title: 'Средне годовая доходность',
			number: 0,
			type: 'income',
		},
	];

	const calcCost = () => {
		let totalCost = 0; // Переменная для хранения общей суммы затрат
		dataForm.forEach(bond => {
			const procent = bond.buyPrice * (bond.brokerTax / 100);
			const result =
				bond.sumBonds *
				(Number(bond.buyPrice) + Number(procent) + Number(bond.NKD));
			totalCost += result; // Суммируем затраты
		});
		setSumCost(totalCost); // Обновляем состояние с общей суммой
	};

	useEffect(() => {
		calcCost(); // Вызываем функцию для расчета затрат при изменении dataForm
	}, [dataForm]);

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch = (value: string) => {
		console.log('search:', value);
	};

	const _Select: React.FC = () => (
		<Select
			showSearch
			placeholder='Select a person'
			optionFilterProp='label'
			onChange={onChange}
			onSearch={onSearch}
			options={[
				{
					value: 'Январь',
					label: 'Январь',
				},
				{
					value: 'Февраль',
					label: 'Февраль',
				},
				{
					value: 'Март',
					label: 'Март',
				},
			]}
		/>
	);

	return (
		<Row className='row-info-total' justify={'space-between'} gutter={16}>
			{col.map((item, i) => (
				<Col span={6} key={i}>
					<Card
						hoverable
						title={
							item.title === 'Сумма дохода в месяц' ? (
								<div className='card-title-wrap'>
									{item.title} <_Select />
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
