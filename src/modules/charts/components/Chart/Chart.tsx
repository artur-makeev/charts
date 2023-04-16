import styles from './Chart.module.css';
import { useAppSelector } from '@/hooks/redux';
import type { IChart } from '@/models/IChart';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Paper from '@mui/material/Paper';

type ChartProps = {
	chart: IChart;
};

export const Chart = ({ chart }: ChartProps) => {
	const { range } = useAppSelector((state) => state.chartReducer);

	const options = {
		chart: {
			type: chart.type,
		},
		title: {
			text: chart.name,
		},
		yAxis: {
			title: {
				text: 'random values',
			},
		},
		xAxis: {
			type: 'datetime',
			allowDecimals: false,
			min: range.min,
			max: range.max,
		},
		plotOptions: {
			series: {
				pointStart: range.min,
			},
		},
		series: [
			{
				color: chart.color,
				showInLegend: false,
				data: chart.data,
			},
		],
	};

	return (
		<Paper className={styles.chartContainer}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Paper>
	);
};
