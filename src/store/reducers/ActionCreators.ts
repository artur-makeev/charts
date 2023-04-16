import { mockApiResponse } from '@/mocks/mockApi';
import type { ChartColor, ChartType, Measurement } from '@/models/IChart';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharts = createAsyncThunk(
	'charts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await mockApiResponse();
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Failed to load charts');
		}
	}
);

export const setMinRange = createAction<number>('setMinRange');
export const setMaxRange = createAction<number>('setMaxRange');
export const deleteChart = createAction<number>('deleteChart');

export interface UpdateChartAction {
	id: number;
	name: string;
	type: ChartType;
	color: ChartColor;
}

export const updateChart = createAction<UpdateChartAction>('updateChart');

export interface CreateChartAction extends UpdateChartAction {
	data: Measurement[];
}

export const createChart = createAction<CreateChartAction>('createChart');
