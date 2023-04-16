import styles from './ChartsTable.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { deleteChart } from '@/store/reducers/ActionCreators';
import type { IChart } from '@/models/IChart';
import { EditChartModal } from '../EditChartModal/EditChartModal';
import { AddChartModal } from '../AddChartModal/AddChartModal';
import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { chartsGenerated } from '@/store/reducers/ChartSlice';
import Alert from '@mui/material/Alert';

export const ChartsTable = () => {
	const dispatch = useAppDispatch();
	const { charts, isLoading, error } = useAppSelector(
		(state) => state.chartReducer
	);

	const { chartsGeneratedOnAppReload } = useAppSelector(
		(state) => state.chartReducer
	);

	useEffect(() => {
		if (!chartsGeneratedOnAppReload) {
			dispatch(chartsGenerated());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleRemove = (chart: IChart) => {
		dispatch(deleteChart(chart.id));
	};

	if (isLoading) {
		return (
			<div className={styles.container}>
				<div className={styles.spinnerContainer}>
					<CircularProgress className={styles.spinner} />
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.errorContainer}>
				<Alert className={styles.alert} severity='warning'>
					{error}
				</Alert>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{charts.length > 0 && (
				<TableContainer component={Paper}>
					<Table className={styles.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell
									className={styles.tableHead}
									sx={{ maxWidth: 100, fontSize: 16 }}
								>
									Chart name
								</TableCell>
								<TableCell
									className={styles.tableHead}
									align='right'
									sx={{ width: 30, fontSize: 16 }}
								>
									Edit
								</TableCell>
								<TableCell
									className={styles.tableHead}
									align='right'
									sx={{ width: 30, fontSize: 16 }}
								>
									Remove
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{charts.map((chart) => (
								<TableRow
									key={chart.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell
										sx={{ maxWidth: 100 }}
										style={{
											height: 'auto !important',
											wordWrap: 'break-word',
										}}
										component='th'
										scope='row'
									>
										{chart.name}
									</TableCell>
									<TableCell align='right'>
										<EditChartModal chart={chart} />
									</TableCell>
									<TableCell align='right'>
										<DeleteOutlineIcon
											className={styles.icon}
											onClick={() => handleRemove(chart)}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			<AddChartModal />
		</div>
	);
};
