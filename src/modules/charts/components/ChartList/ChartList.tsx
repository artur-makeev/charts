import { useEffect } from 'react';
import styles from './ChartList.module.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchCharts } from '@/store/reducers/ActionCreators';
import { Chart } from '../Chart/Chart';
import { chartsGenerated } from '@/store/reducers/ChartSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const ChartList = () => {
	const dispatch = useAppDispatch();
	const { charts, isLoading, error } = useAppSelector(
		(state) => state.chartReducer
	);

	const { chartsGeneratedOnAppReload } = useAppSelector(
		(state) => state.chartReducer
	);

	useEffect(() => {
		if (charts.length === 0 && !chartsGeneratedOnAppReload) {
			dispatch(fetchCharts());
			dispatch(chartsGenerated());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return (
			<div className={styles.container}>
				<CircularProgress className={styles.spinner} />
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.container}>
				<Alert severity='warning'>{error}</Alert>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{charts.length > 0 &&
				charts.map((chart) => <Chart key={chart.id} chart={chart} />)}
		</div>
	);
};
