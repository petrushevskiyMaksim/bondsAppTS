import './App.css';
import React from 'react';
import { Flex, Layout, Button } from 'antd';
import { Title } from './components/Title';
import { FormBond } from './components/FormBond';
import { ListResourses } from './components/ListResourses';
import { _Table } from './components/Table';

const { Sider, Content } = Layout;

const App: React.FC = () => (
	<div className='wrapper'>
		<Flex className='container'>
			<Layout>
				<Layout className='heading'>
					<Content className='form-wrap'>
						<Title className='title' text={'Добавить новую облигацию'} />
						<FormBond />
					</Content>
					<Sider className='resourses'>
						<Title className='title' text={'Полезные ресурсы'} />
						<ListResourses />
						<div className='btn-resourses'>
							<Button type='primary'>Добавить ресурс</Button>
						</div>
					</Sider>
				</Layout>
				<_Table></_Table>
			</Layout>
		</Flex>
	</div>
);

export default App;
