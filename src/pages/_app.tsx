import { Navbar } from '@/modules/layout';
import { setupStore } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import theme, { roboto } from '@/theme/theme';
import createEmotionCache from '@/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const store = setupStore();

export default function App(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<main className={roboto.className}>
						<Navbar />
						<Component {...pageProps} />
					</main>
				</Provider>
			</ThemeProvider>
		</CacheProvider>
	);
}
