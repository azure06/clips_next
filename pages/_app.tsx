import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { useEffect } from 'react';
import '../styles/globals.css';
import theme from '../src/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme(false)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
