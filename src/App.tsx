import './App.css';
import React from 'react';
import { Flex, Layout } from 'antd';
import { Title } from './components/Title';
import { FormBond } from './components/FormBond';

const { Footer, Sider, Content } = Layout;

const App: React.FC = () => (
	<div className='wrapper'>
		<Flex className='container'>
			<Layout>
				<Layout>
					<Content className='content'>
						<Title className='title' text={'Добавить новую облигацию'} />
						<FormBond />
					</Content>
					<Sider className='resourses'>Resourses</Sider>
				</Layout>
				<Footer className='bonds-list'>Bonds List</Footer>
			</Layout>
		</Flex>
	</div>
);

export default App;
