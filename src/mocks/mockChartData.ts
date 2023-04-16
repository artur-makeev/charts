import type { ChartDataFromApi, Measurement } from '@/models/IChart';

function getRandomArbitrary(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

// min included, max excluded
function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

const numberOfCharts = getRandomInt(1, 10);

export const mockManyChartsData: ChartDataFromApi[] = Array.from(
	{ length: numberOfCharts },
	(val, index) => ({
		name: `Chart №${index + 1}`,
		data: Array.from({ length: 32 }, (v, k) => [
			Date.UTC(1990 + k, 0, 1),
			getRandomArbitrary(0, 150),
		]),
	})
);

export const mockChartData: Measurement[] = Array.from(
	{ length: 32 },
	(v, k) => [Date.UTC(1990 + k, 0, 1), getRandomArbitrary(0, 150)]
);
