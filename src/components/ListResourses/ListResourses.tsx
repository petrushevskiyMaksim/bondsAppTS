import React from 'react';
import { List } from 'antd';
import { useDataForm } from '../../store/DataFormContext';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import './ListResourses.css';

interface ListResoursesProps {
	className?: string; // Опциональный пропс
}

const ListResourses: React.FC<ListResoursesProps> = ({ className }) => {
	const { resources } = useDataForm();

	return (
		<>
			<List
				className={className}
				dataSource={resources}
				split
				renderItem={item => (
					<List.Item className='list-item'>
						<HiMiniArrowTopRightOnSquare
							className='icon-resourses'
							size={15}
							strokeWidth={1}
						/>{' '}
						<a target='_blank' href={item.url} rel='noopener noreferrer'>
							{item.text}
						</a>
					</List.Item>
				)}
			/>
		</>
	);
};

export default ListResourses;
