import styles from './RangeSelector.module.css';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setMaxRange, setMinRange } from '@/store/reducers/ActionCreators';

export const RangeSelector = () => {
	const dispatch = useAppDispatch();
	const { charts, range } = useAppSelector((state) => state.chartReducer);

	const handleChangeMin = (value: Dayjs | null) => {
		if (value) {
			dispatch(setMinRange(value.valueOf()));
		}
	};

	const handleChangeMax = (value: Dayjs | null) => {
		if (value) {
			dispatch(setMaxRange(value.valueOf()));
		}
	};

	return (
		<>
			{charts.length > 0 && (
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<div className={styles.container}>
						<DatePicker
							className={styles.datePicker}
							label='start'
							value={dayjs(range.min)}
							onChange={(newValue) => {
								handleChangeMin(newValue);
							}}
						/>
						<DatePicker
							className={styles.datePicker}
							label='end'
							value={dayjs(range.max)}
							onChange={(newValue) => {
								handleChangeMax(newValue);
							}}
						/>
					</div>
				</LocalizationProvider>
			)}
		</>
	);
};
