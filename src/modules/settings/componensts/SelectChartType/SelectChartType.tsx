import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import type { ChartType } from '@/models/IChart';
import styles from './SelectChartType.module.css';

type SelectChartProps = {
	type: ChartType;
	setType: (type: ChartType) => void;
};

export const SelectChartType = ({ type, setType }: SelectChartProps) => {
	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value as ChartType);
	};

	return (
		<div className={styles.container}>
			<FormControl fullWidth>
				<InputLabel id='select-type-label'>Chart type</InputLabel>
				<Select
					labelId='select-type-label'
					id='select-type'
					value={type}
					label='Chart type'
					onChange={handleChange}
				>
					<MenuItem value={'line'}>Line</MenuItem>
					<MenuItem value={'spline'}>Spline</MenuItem>
					<MenuItem value={'bar'}>Bar</MenuItem>
					<MenuItem value={'area'}>Area</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};
