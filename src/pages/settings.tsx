import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { ChartsTable } from '@/modules/settings';

export default function Settings() {
	return (
		<>
			<Head>
				<title>Settings</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.main}>
				<ChartsTable />
			</div>
		</>
	);
}
