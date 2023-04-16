import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IChart } from '@/models/IChart';
import type { CreateChartAction, UpdateChartAction } from './ActionCreators';
import { createChart } from './ActionCreators';
import { updateChart } from './ActionCreators';

import {
	deleteChart,
	fetchCharts,
	setMaxRange,
	setMinRange,
} from './ActionCreators';
import { uid } from '@/helpers/uid';

interface ChartState {
	charts: IChart[];
	isLoading: boolean;
	error: string;
	range: { min: number; max: number };
	chartsGeneratedOnAppReload: boolean; // prevents charts recreation if all charts removed
}

const initialState: ChartState = {
	charts: [],
	isLoading: false,
	error: '',
	range: { min: Date.UTC(2010, 0, 1), max: Date.UTC(2020, 0, 1) },
	chartsGeneratedOnAppReload: false,
};

export const chartSlice = createSlice({
	name: 'chart',
	initialState,
	reducers: {
		chartsGenerated(state) {
			state.chartsGeneratedOnAppReload = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchCharts.fulfilled.type,
				(state, action: PayloadAction<IChart[]>) => {
					state.isLoading = false;
					state.error = '';
					state.charts = action.payload.map((chart) => ({
						id: uid(),
						name: chart.name,
						type: 'line',
						color: '#2196f3',
						data: chart.data,
					}));
				}
			)
			.addCase(fetchCharts.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(
				fetchCharts.rejected.type,
				(state, action: PayloadAction<string>) => {
					state.isLoading = false;
					state.error = action.payload;
				}
			);
		builder
			.addCase(setMinRange, (state, action) => {
				state.range.min = action.payload;
			})
			.addCase(setMaxRange, (state, action) => {
				state.range.max = action.payload;
			});
		builder
			.addCase(
				createChart,
				(state, action: PayloadAction<CreateChartAction>) => {
					state.charts = [...state.charts, action.payload];
				}
			)
			.addCase(
				updateChart,
				(state, action: PayloadAction<UpdateChartAction>) => {
					state.charts = state.charts.map((chart) => {
						if (chart.id === action.payload.id) {
							return {
								...chart,
								name: action.payload.name,
								type: action.payload.type,
								color: action.payload.color,
							};
						} else {
							return chart;
						}
					});
				}
			)
			.addCase(deleteChart, (state, action: PayloadAction<number>) => {
				state.charts = state.charts.filter(
					(chart) => chart.id !== action.payload
				);
			});
	},
});

export const { chartsGenerated } = chartSlice.actions;

export default chartSlice.reducer;
