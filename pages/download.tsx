import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, fade, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { Apple } from '@material-ui/icons';
import * as gtag from '../utils/gtag';

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

type Platform = 'Windows' | 'macOS' | 'Linux';

export default function About(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [[windowsURL, macURL, linuxURL], setDownloadUrls] = useState([
    null,
    null,
    null,
  ]);

  const getPlatform = (): Platform | 'Other' => {
    if (navigator.appVersion.indexOf('Win') !== -1) return 'Windows';
    if (navigator.appVersion.indexOf('Mac') !== -1) return 'macOS';
    if (navigator.appVersion.indexOf('Linux') !== -1) return 'Linux';
    return 'Other';
  };

  const whenKnownPlatform = (
    func: (platform: Platform, url: string) => any,
    platform: Platform | 'Other',
    [windowsURL, macURL, linuxURL]: [string, string, string]
  ) => {
    switch (platform) {
      case 'Windows':
        return func(platform, windowsURL);
      case 'macOS':
        return func(platform, macURL);
      case 'Linux':
        return func(platform, linuxURL);
    }
  };

  const getURLs = (): Promise<[string, string, string]> =>
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
          if (!head) return [null, null, null];
          const getUrl = (
            target: '.exe' | '.dmg' | '.AppImage',
            assets: Array<{ browser_download_url: string }>
          ) =>
            assets.find(
              asset =>
                asset.browser_download_url.match(
                  new RegExp(`\\d+\\.\\d+\\.\\d+${target}`)
                ) !== null
            )?.browser_download_url;
          return [
            getUrl('.exe', head.assets),
            getUrl('.dmg', head.assets),
            getUrl('.AppImage', head.assets),
          ];
        }
      );

  const download = (platform: Platform, url: string) => {
    gtag.event({
      action: 'app-download',
      label: platform,
      category: 'downloads',
      value: 1,
    });
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
    getURLs().then(([windowsURL, macURL, linuxURL]) => {
      setDownloadUrls([windowsURL, macURL, linuxURL]);
      whenKnownPlatform(download, getPlatform(), [
        windowsURL,
        macURL,
        linuxURL,
      ]);
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
      <main className={styles.mainWithMargin} style={{ minHeight: 780 }}>
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
            onClick={() => download('Windows', windowsURL)}
          >
            Windows
            <img
              alt="Windows"
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
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            style={{
              width: 200,
              height: 50,
              margin: 16,
              boxShadow: '0 3px 8px 1px rgba(0,0,0, .09)',
            }}
            onClick={() => download('Linux', linuxURL)}
          >
            Linux
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
