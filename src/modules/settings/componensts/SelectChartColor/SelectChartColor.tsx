import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import type { ChartColor } from '@/models/IChart';
import styles from './SelectChartColor.module.css';

type SelectChartProps = {
	color: ChartColor;
	setColor: React.Dispatch<React.SetStateAction<ChartColor>>;
};

export const SelectChartColor = ({ color, setColor }: SelectChartProps) => {
	const handleChange = (event: SelectChangeEvent) => {
		setColor(event.target.value as ChartColor);
	};

	return (
		<div className={styles.container}>
			<FormControl fullWidth>
				<InputLabel id='select-color-label'>Chart color</InputLabel>
				<Select
					labelId='select-color-label'
					id='select-type'
					value={color}
					label='Chart color'
					onChange={handleChange}
				>
					<MenuItem value={'#2196f3'}>Blue</MenuItem>
					<MenuItem value={'#f44336'}>Red</MenuItem>
					<MenuItem value={'#9c27b0'}>Purple</MenuItem>
					<MenuItem value={'#009688'}>Teal</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};
