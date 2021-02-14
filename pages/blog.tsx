import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';

const useStyles = makeStyles(theme => ({
  pattern: {
    zIndex: -1,
    position: 'absolute',
    top: '-250px',
    left: '0',
    width: '100%',
    height: '850px',
    transform: 'skewY(-12deg)',
    background: 'rgba(235,225,190,1)',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 24px',
  },
  blog: {
    fontWeight: 700,
  },
  card: {
    marginTop: 120,
    maxWidth: 900,
    borderRadius: 5,
    padding: 16,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'color 0.15s ease, box-shadow 0.2s ease',
    boxShadow: '0 0 20px -2px rgba(0, 0, 0, 0.09)',
    '&:hover': {
      boxShadow:
        '0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 3.5%), 0px 9px 46px 8px rgb(0 0 0 / 3%)',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  img: {
    maxWidth: '300px',
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
      <Header headerColor="rgba(235,225,190,1)" />
      <main className={styles.mainWithMargin}>
        <div className={classes.pattern} />
        <div className={classes.flexColumn}>
          <Typography variant="h2" className={classes.blog}>
            Blog
          </Typography>
          <Typography
            variant="h4"
            style={{ color: theme.palette.text.secondary }}
          >
            The latest news about Clips
          </Typography>
        </div>

        <div className={classes.card}>
          <img src="/board.png" className={classes.img} />
          <div style={{ padding: '0 16px' }}>
            <Typography variant="h3" className={classes.blog}>
              Introduction to Clips
            </Typography>
            <Typography
              variant="body1"
              style={{ color: theme.palette.text.secondary, fontWeight: 500 }}
            >
              Monday, February 15th 2021
            </Typography>
            <p>Everything you need to know about Clips by Infiniti</p>
            <Button color="primary" href="/blog/introduction">
              Read More →
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
