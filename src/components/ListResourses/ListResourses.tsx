import React from 'react';
import { List } from 'antd';

import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import './ListResourses.css';

const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
];

const ListResourses: React.FC = () => (
	<>
		<List
			className='list-resourses'
			dataSource={data}
			renderItem={item => (
				<List.Item className='list-item'>
					<HiMiniArrowTopRightOnSquare
						className='icon-resourses'
						size={15}
						strokeWidth={1}
					/>{' '}
					<a href='#'>{item}</a>
				</List.Item>
			)}
		/>
	</>
);

export default ListResourses;
