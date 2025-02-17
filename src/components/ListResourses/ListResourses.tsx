import React from 'react';
import { List } from 'antd';

import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import './ListResourses.css';

const data = [
	{
		id: 1,
		text: 'Московская биржа - Облигации',
		link: 'https://www.moex.com/s3079',
	},
	{
		id: 1,
		text: 'Московская биржа - Облигации',
		link: 'https://www.moex.com/s3079',
	},
	{
		id: 1,
		text: 'Московская биржа - Облигации',
		link: 'https://www.moex.com/s3079',
	},
	{
		id: 1,
		text: 'Московская биржа - Облигации',
		link: 'https://www.moex.com/s3079',
	},
	{
		id: 1,
		text: 'Московская биржа - Облигации',
		link: 'https://www.moex.com/s3079',
	},
	{
		id: 1,
		text: 'Московская биржа - Облигации',
		link: 'https://www.moex.com/s3079',
	},
	{
		id: 2,
		text: 'Rusbonds - Информационное агенство Rusbonds - Информационное агенствоRusbonds - Информационное агенствоRusbonds - Информационное агенствоRusbonds - Информационное агенство',
		link: 'https://rusbonds.ru/',
	},
	// {
	// 	id: 3,
	// 	text: 'Финам - Облигации',
	// 	link: 'https://bonds.finam.ru/',
	// },
	// {
	// 	id: 4,
	// 	text: 'SmartLab - Облигации',
	// 	link: 'https://www.moex.com/s3079',
	// },
	// {
	// 	id: 5,
	// 	text: 'Investing.com - Облигации РФ',
	// 	link: 'https://www.investing.com/',
	// },
];

const ListResourses: React.FC = ({ className }) => (
	<>
		<List
			className={className}
			dataSource={data}
			renderItem={item => (
				<List.Item className='list-item'>
					<HiMiniArrowTopRightOnSquare
						className='icon-resourses'
						size={15}
						strokeWidth={1}
					/>{' '}
					<a target='_blank' href={item.link} rel='noopener noreferrer'>
						{item.text}
					</a>
				</List.Item>
			)}
		/>
	</>
);

export default ListResourses;
