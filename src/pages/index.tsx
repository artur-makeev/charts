import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { ChartList, RangeSelector } from '@/modules/charts';

export default function Home() {
	return (
		<>
			<Head>
				<title>Charts</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.main}>
				<RangeSelector />
				<ChartList />
			</div>
		</>
	);
}
