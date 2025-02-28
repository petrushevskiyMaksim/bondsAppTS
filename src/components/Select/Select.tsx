import { Select } from 'antd';

interface OptionType {
	value: string;
	label: string;
}

interface CustomSelectProps {
	options: OptionType[];
	placeholder?: string;
	variant?: string;
	optionFilterProp?: string;
	size?: string;
	onChange?: (value: string) => void;
	onSearch?: (value: string) => void;
	showSearch?: boolean;
	size?: 'small' | 'middle' | 'large';
}

const _Select: React.FC<CustomSelectProps> = ({
	options,
	showSearch = true,
	variant,
	placeholder = 'Выбери зачение',
	optionFilterProp = 'label',
	size,
	onChange,
	onSearch,
}) => (
	<Select
		size={size}
		showSearch={showSearch}
		variant={variant} // 'primary'
		placeholder={placeholder} // "Месяц"
		optionFilterProp={optionFilterProp} // 'label'
		onChange={onChange}
		onSearch={onSearch}
		options={options}
	/>
);

export default _Select;
