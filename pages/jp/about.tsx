import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Header from '../jp/components/header';
import Footer from '../jp/components/footer';

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
  common: {
    fontWeight: 700,
  },
}));

export default function About(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.pattern} />
      <main
        className={styles.main}
        style={{ zIndex: 1, marginTop: 48, minHeight: 800 }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}
        >
          <div style={{ padding: '24px 16px' }}>
            <Typography
              variant="body2"
              style={{
                fontWeight: 700,
                padding: 16,
                textAlign: 'center',
              }}
            >
              Clips について
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 700 }}>
              Clips
            </Typography>
            <p style={{ fontWeight: 500 }}>
              我々は、Clipsを最もスマートなクリップボードアプリにするため、情熱とアイデアをすべて注ぎ込みました。
              最先端
              かつモダンなテクノロジーを結集し、すべての人の暮らしにさらなるシンプルさをもたらします。
            </p>
            <p style={{ fontWeight: 500 }}>
              クリエイティブワーカーからカジュアルユーザーまで、Clipsは世界中すべての人々の活動をサポートします。
            </p>
          </div>
          <Divider />
          <div style={{ padding: '24px 16px' }}>
            <Typography
              variant="body2"
              style={{
                fontWeight: 700,
                padding: 16,
                textAlign: 'center',
              }}
            >
              知っておきたい情報
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 700 }}>
              Things to Know
            </Typography>
            <p style={{ fontWeight: 500 }}>
              公式アプリの利用にはサイトからダウンロードしてください。{' '}
              <a
                href="https://infiniticlips.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: theme.palette.primary.main }}
              >
                infiniticlips.com
              </a>
            </p>
            <p>
              お問い合わせはこちらから→{' '}
              <a
                href="mailto: infiniticlips@proton.me"
                style={{ color: theme.palette.primary.main }}
              >
                infiniticlips@proton.me
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
