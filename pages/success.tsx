import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { useRouter } from 'next/router';
import { Skeleton } from '@material-ui/lab';

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
  media: {
    height: 20,
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function About(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const email = router.query.email || '';

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.pattern} />
      <main className={styles.mainWithMargin} style={{ zIndex: 1 }}>
        <Card
          elevation={24}
          style={{ backgroundColor: theme.palette.common.white }}
        >
          {
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.media}
            />
          }
          <CardContent>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 400,
              }}
            >
              <Typography
                variant="h2"
                style={{
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  padding: 20,
                }}
              >
                <span style={{ color: theme.palette.primary.main }}>
                  Thank you
                </span>{' '}
                so much for your order.
              </Typography>
              <div style={{ padding: 20, margin: '50px 0' }}>
                <Typography variant="body2" style={{ fontWeight: 500 }}>
                  We&apos;ve sent a confirmation email to {email}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: '10px 0', fontWeight: 500 }}
                >
                  Cheers,
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={e =>
                    router.push({
                      pathname: '/download',
                    })
                  }
                  style={{
                    width: 250,
                    padding: '10px 25px',
                    boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)',
                    fontWeight: 700,
                    marginBottom: 25,
                  }}
                  disableElevation
                >
                  Download Clips
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
