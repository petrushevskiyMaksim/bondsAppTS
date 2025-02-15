import React from 'react';
import { Flex, Layout, Button } from 'antd';
import { Title } from './components/Title';
import { FormBond } from './components/FormBond';
import { ListResourses } from './components/ListResourses';
import { _Table } from './components/Table';
import './App.css';
import './components/Table/table.css';
import { DataFormProvider } from './components/store/DataFormContext';

const { Sider, Content } = Layout;

const App: React.FC = () => {
	return (
		<DataFormProvider>
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
						<div className='table-wrap'>
							<Title className='title' text={'Портфель облигаций'} />
							<_Table></_Table>
						</div>
					</Layout>
				</Flex>
			</div>
		</DataFormProvider>
	);
};

export default App;
