import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Button, Card, Chip, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Header from '../jp/components/header';
import Footer from '../jp/components/footer';
import { useRouter } from 'next/router';
import createMuiTheme from '../../src/theme';
import { Link, BuildRounded } from '@material-ui/icons';

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
    marginTop: 35,
    maxWidth: 900,
    borderRadius: 5,
    padding: 16,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 0 20px -2px rgba(0, 0, 0, 0.09)',
    '&:hover': {
      boxShadow:
        '0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 3.5%), 0px 9px 46px 8px rgb(0 0 0 / 3%)',
      transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  img: {
    maxWidth: 300,
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    // minWidth: '300px',
    objectFit: 'contain',
  },
}));

export default function About(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const articles = [
    {
      title: ' クリップボードアプリ',
      subtitle: 'なぜ人はクリップボードアプリを使うのか',
      picture: '/clipboards.png',
      pathname: '/blog/clipboards',
      dark: false,
      date: '2023/02/27（月）',
    },
    {
      title: ' Clips の中身',
      subtitle: 'Clips を支えるテクノロジースタック(前編)',
      picture:
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      pathname: '/blog/technology',
      dark: true,
      date: '2021/02/20（土）',
    },
    {
      title: ' Clips について',
      subtitle: 'Clips の全てがわかる',
      picture: '/board.png',
      pathname: '/blog/introduction',
      dark: false,
      date: '2021/02/15（月）',
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.mainWithMargin} style={{ minHeight: 700 }}>
        <div className={classes.pattern} />
        <div className={classes.flexColumn} style={{ marginBottom: 100 }}>
          <Typography variant="h2" className={classes.blog}>
            Blog
          </Typography>
          <Typography
            variant="h4"
            style={{ color: theme.palette.text.secondary }}
          >
            Clips に関する最新のニュース
          </Typography>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <Chip
              icon={<Link />}
              label="Clipboard"
              clickable
              color="primary"
              style={{ margin: '10px 10px' }}
            />
            <Chip
              icon={<BuildRounded />}
              label="Tech"
              clickable
              color="secondary"
              style={{ margin: '10px 10px' }}
            />
          </div>
        </div>

        {articles.map((article, index) => (
          <Card
            key={`${article.title}-${index}`}
            className={classes.card}
            style={{
              backgroundColor: createMuiTheme(article.dark).palette.background
                .default,
            }}
          >
            <img
              src={article.picture}
              alt="Clipboard"
              className={classes.img}
            />
            <div style={{ padding: '0 16px' }}>
              <Typography
                variant="h3"
                className={classes.blog}
                style={{
                  color: createMuiTheme(article.dark).palette.text.primary,
                }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: createMuiTheme(article.dark).palette.text.secondary,
                  fontWeight: 500,
                }}
              >
                {article.date}
              </Typography>
              <p
                style={{
                  fontWeight: 500,
                  color: createMuiTheme(article.dark).palette.text.primary,
                }}
              >
                {article.subtitle}
              </p>
              <Button
                color="primary"
                onClick={e =>
                  router.push({
                    pathname: article.pathname,
                  })
                }
                // variant="contained"
                disableElevation
                // style={{ boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)' }}
              >
                さらに詳しく →
              </Button>
            </div>
          </Card>
        ))}
      </main>
      <Footer />
    </div>
  );
}
