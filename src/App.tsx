import React from 'react';
import { Flex, Layout, ConfigProvider } from 'antd';
import { Title } from './components/Title';
import { FormBond } from './components/FormBond';
import { ListResourses } from './components/ListResourses';
import TableEdit from './components/Table/TableEdit';
import { _Modal } from './components/Modal';
import InfoTotal from './components/InfoBlock/InfoTotal';

import { DataFormProvider } from './store/DataFormContext';
import './App.css';
import './components/Table/table.css';

const App: React.FC = () => {
	return (
		<DataFormProvider>
			
				<Layout className='wrapper'>
					<Flex className='form-resourses-wrapper' gap={40}>
						<Flex className='form-wrap' flex={'auto'} vertical>
							<Title className='title' text={'Добавить новую облигацию'} />
							<FormBond className='distance' />
						</Flex>
						<Flex className='resourses-wrap' vertical>
							<Title className='title' text={'Полезные ресурсы'} />
							<Flex className='resourses-list-wrap distance' vertical>
								<ListResourses className='list-resourses ' />
								<div className='btn-resourses btn-outline'>
									{/* <Button type='primary'>Добавить ресурс</Button> */}
									<_Modal />
								</div>
							</Flex>
						</Flex>
					</Flex>

					<InfoTotal />

					<Flex className='table-wrap' vertical>
						<Title className='title' text={'Портфель облигаций'} />
						<TableEdit className=''></TableEdit>
					</Flex>
				</Layout>
			
		</DataFormProvider>
	);
};

export default App;
