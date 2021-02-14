import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, fade, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Apple } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  pattern: {
    zIndex: -1,
    position: 'absolute',
    top: '-250px',
    left: '0',
    width: '100%',
    height: '850px',
    transform: 'skewY(-12deg)',
    background: theme.palette.background.paper,
  },
}));

export default function About(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [[windowsURL, macURL], setDownloadUrls] = useState([null, null]);

  const getURLs = (): Promise<[string, string]> =>
    fetch('https://api.github.com/repos/azure06/clips/releases', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then(res => res.json())
      .then(
        ([head]: Array<{
          assets: Array<{ browser_download_url: string }>;
        }>) => {
          if (!head) return [null, null];
          const getUrl = (
            target: '.exe' | '.dmg',
            assets: Array<{ browser_download_url: string }>
          ) =>
            assets.find(asset => asset.browser_download_url.endsWith(target))
              .browser_download_url || null;
          return [getUrl('.exe', head.assets), getUrl('.dmg', head.assets)];
        }
      );

  const download = (platform: 'macOS' | 'windows', url: string) => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.setAttribute('href', url);
    a.setAttribute('download', 'Clips');
    document.body.appendChild(a);
    a.dispatchEvent(new MouseEvent('click'));
    document.body.removeChild(a);
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };

  useEffect(() => {
    getURLs().then(([windowsURL, macURL]) => {
      setDownloadUrls([windowsURL, macURL]);
      const platform: 'macOS' | 'windows' = /(Mac|iPhone|iPod|iPad)/i.test(
        window.navigator.platform
      )
        ? 'macOS'
        : 'windows';
      download(platform, platform === 'macOS' ? macURL : windowsURL);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.pattern} />
      <main className={styles.mainWithMargin}>
        <div className={classes.pattern} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 24px',
          }}
        >
          <Typography variant="h2" style={{ fontWeight: 700 }}>
            Download Clips
          </Typography>
          <Typography variant="h4" style={{}}>
            Starting...
          </Typography>
          <Typography variant="body2" style={{ marginTop: 50 }}>
            If the download doesn&apos;t start automatically in a few seconds,
            please click the download button directly.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 50,
            flexWrap: 'wrap',
          }}
        >
          <Button
            color="primary"
            variant="contained"
            disableElevation
            style={{
              width: 200,
              height: 50,
              margin: 16,
              boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)',
            }}
            onClick={() => download('windows', windowsURL)}
          >
            Windows
            <img
              src="/windows.svg"
              style={{ filter: 'invert(1)', marginLeft: 8 }}
            />
          </Button>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: 200,
              height: 50,
              margin: 16,
              boxShadow: '0 3px 8px 1px rgba(0,0,0, .09)',
            }}
            onClick={() => download('macOS', macURL)}
          >
            MacOS
            <Apple />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
