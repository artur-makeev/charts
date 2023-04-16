import Link from 'next/link';
import styles from './Navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/router';

export const Navbar = () => {
	const router = useRouter();

	return (
		<AppBar>
			<Toolbar className={styles.toolbar}>
				<Link
					className={
						router.pathname === '/'
							? `${styles.link} ${styles.linkActive}`
							: styles.link
					}
					href='/'
				>
					Charts
				</Link>
				<Link
					className={
						router.pathname === '/settings'
							? `${styles.link} ${styles.linkActive}`
							: styles.link
					}
					href='/settings'
				>
					Settings
				</Link>
			</Toolbar>
		</AppBar>
	);
};
