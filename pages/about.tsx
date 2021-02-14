import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  pattern: {
    zIndex: -1,
    position: 'absolute',
    top: '-250px',
    left: '0',
    width: '100%',
    height: '850px',
    transform: 'skewY(-12deg)',
    background: 'rgba(230,255, 215, 1)',
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
      <Header headerColor="rgba(230,255, 215, 1)" />
      <div className={classes.pattern} />
      <main className={styles.main} style={{ zIndex: 1, marginTop: 48 }}>
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
              ABOUT CLIPS
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 700 }}>
              Clips
            </Typography>
            <p style={{ fontWeight: 500 }}>
              We brought all of our passion and ideas to make Clips the smartest
              clipboard app available in the market. Gathers the most advanced
              and modern technologies, bringing simplicity to everyone&apos;s
              life.
            </p>
            <p style={{ fontWeight: 500 }}>
              From creative worker to casual user, Clips helps empowering people
              from all over the world.
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
              WHAT TO KNOW
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 700 }}>
              Things to Know
            </Typography>
            <p style={{ fontWeight: 500 }}>
              The only way to ensure you are using a genuine software is to
              download from our official website{' '}
              <a
                href="https://infiniticlips.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: theme.palette.primary.main }}
              >
                infiniticlips.com
              </a>
              . For more information please contact{' '}
              <a
                href="mailto: info@infiniticlips.com"
                style={{ color: theme.palette.primary.main }}
              >
                info@infiniticlips.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
