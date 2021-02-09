import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  fade,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Header } from './components/header';
import { Done } from '@material-ui/icons';
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
    background: theme.palette.secondary.main,
  },
  card: {
    minWidth: 320,
    margin: '10px',
    transition: 'transform .2s',
    '&:hover': { transform: 'scale(1.1)' },
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Home(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerColor="secondary" />
      <main className={styles.main} style={{ zIndex: 1, marginTop: 48 }}>
        <div className={classes.pattern} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 24px',
          }}
        >
          <Typography
            variant="h3"
            style={{ color: fade(theme.palette.common.white, 0.9) }}
          >
            Get started with Community Edition.
          </Typography>
          <Typography
            variant="h4"
            style={{ color: fade(theme.palette.common.white, 0.5) }}
          >
            Everything you need all in one place.
          </Typography>
        </div>
      </main>
      <Footer />
    </div>
  );
}
