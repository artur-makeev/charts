import { mockManyChartsData } from './mockChartData';

export const mockApiResponse = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// uncomment next line to simulate api fetching error
	//throw 'Failed to load charts';
	return { data: mockManyChartsData };
};
