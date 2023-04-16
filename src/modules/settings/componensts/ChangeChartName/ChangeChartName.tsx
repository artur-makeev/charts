import styles from './ChangeChartName.module.css';
import TextField from '@mui/material/TextField';

type SelectChartProps = {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangeChartName = ({ name, setName }: SelectChartProps) => (
	<TextField
		className={styles.textField}
		id='outlined-controlled'
		label='Chart name'
		value={name}
		onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
		}}
		inputProps={{ maxLength: 26 }}
	/>
);
