import React from 'react';
import { Button, Modal, Flex, Input, Form } from 'antd';
import { useDataForm } from '../../store/DataFormContext';
import { Resource } from '../../store/DataFormContext';
import './modal.css';

const _Modal: React.FC = () => {
	const { resources, setResources, isModalVisible, setModalVisible } =
		useDataForm();

	const [form] = Form.useForm(); // Создаем форму с помощью useForm()

	const showModal = () => {
		setModalVisible(true);
	};

	const handleOk = () => {
		console.log(resources);
		setModalVisible(false);
	};

	const handleCancel = () => {
		setModalVisible(false);
	};

	const onFinish = (values: Resource) => {
		const newResourse = {
			...values,
			id: Date.now(), // Уникальный ключ для таблицы
		};
		setResources(prevResourse => [...prevResourse, newResourse]);
		form.resetFields(); // Очищаем поля формы после добавления
		setModalVisible(false); // Закрываем модальное окно
	};

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Добавить ссылку
			</Button>
			<Modal
				centered
				open={isModalVisible}
				title='Добавить ссылку'
				onOk={handleOk}
				onCancel={handleCancel}
				footer={
					<Flex className='modal-btn-wrap' gap={'20px'}>
						<Button
							key='link'
							href='https://google.com'
							target='_blank'
							type='primary'
							onClick={handleOk}
						>
							Поиск в Google
						</Button>
						<Button key='back' onClick={handleCancel}>
							Назад
						</Button>
					</Flex>
				}
			>
				<Form form={form} onFinish={onFinish} layout='vertical'>
					<Form.Item name='text' label='Название' rules={[{ required: true }]}>
						<Input placeholder='Введите название' variant='filled' />
					</Form.Item>
					<Form.Item
						name='url'
						label='Ссылка (URL)'
						rules={[{ required: true }]}
					>
						<Input placeholder='Введите ссылку (URL)' variant='filled' />
					</Form.Item>
					<Form.Item>
						<Button
							key='submit'
							htmlType='submit'
							type='primary'
							onClick={handleOk}
						>
							Добавить
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default _Modal;
