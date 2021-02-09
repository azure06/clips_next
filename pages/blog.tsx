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
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    padding: '100px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
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

export default function Blog(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const free = [
    { value: 'Search', divider: false },
    { value: '', divider: true },
    { value: 'Labels', divider: true },
    { value: 'Google Drive Backup', divider: false },
  ];
  const premium = [
    { value: 'Search', divider: false },
    { value: 'Advanced Search', divider: true },
    { value: 'Labels', divider: true },
    { value: 'Google Drive Backup', divider: true },
    { value: 'Save RTF and HTML Text', divider: false },
    { value: 'Google Drive Auto Sync', divider: false },
    { value: 'Automatic History Cleanup', divider: false },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} style={{ zIndex: 1, marginTop: 48 }}>
        <div className={classes.pattern} />
      </main>
      <Footer />
    </div>
  );
}
