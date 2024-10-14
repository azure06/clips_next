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
import { Done } from '@material-ui/icons';
import Header from './components/header';
import Footer from './components/footer';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const NEXT_PUBLIC_STRIPE_PUBLIC_KEY =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
    : process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
const NEXT_PUBLIC_CHECKOUT_SESSION_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_CHECKOUT_SESSION_URL_TEST
    : process.env.NEXT_PUBLIC_CHECKOUT_SESSION_URL;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    padding: '50px 0',
    justifyContent: 'center',
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
    transition: 'transform .2s, box-shadow 0.2s ease;',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow:
        '0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 3.5%), 0px 9px 46px 8px rgb(0 0 0 / 3%)',
    },
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Home(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
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
    { value: 'Google Drive Auto-sync', divider: false },
    { value: 'Automatic History Cleanup', divider: false },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* 48 + black lives matter */}
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
          <Typography variant="h3" style={{ fontWeight: 700 }}>
            Get started with the Community Edition.
          </Typography>
          <Typography
            variant="h4"
            style={{ color: theme.palette.text.secondary }}
          >
            Everything you need all in one place.
          </Typography>
          <Typography
            style={{
              marginTop: 50,
              fontWeight: 900,
              color: theme.palette.text.secondary,
              letterSpacing: 2.5,
            }}
          >
            NO REGISTRATION NEEDED
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
              color: theme.palette.text.secondary,
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 400 }}>Powerd by</div>
            <img
              src="/stripe.svg"
              style={{ width: 50, filter: ' grayscale(90%)' }}
            />
          </div>
        </div>

        {/* Plans */}
        <div className={classes.root}>
          <Card
            className={classes.card}
            elevation={4}
            style={{
              backgroundColor: theme.palette.common.white,
            }}
          >
            <div style={{ padding: '16px' }}>
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                Free
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                gutterBottom
                style={{ fontWeight: 700, letterSpacing: 3 }}
              >
                CLIPS COMMUNITY EDITION
              </Typography>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 160,

                background: theme.palette.background.paper,
              }}
            >
              <Typography variant="h2" style={{ fontWeight: 700 }}>
                FREE
              </Typography>
            </div>
            <CardContent style={{ height: 'calc(100% - 300px)' }}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{ padding: '20px 0' }}
                subheader={null}
              >
                {free.map(record => (
                  <React.Fragment key={`${record.value}-premium`}>
                    <ListItem>
                      <ListItemIcon style={{ minWidth: '32px' }}>
                        <Done
                          color="primary"
                          style={{
                            visibility: record.value ? 'visible' : 'hidden',
                          }}
                        />
                      </ListItemIcon>
                      <Typography
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        {record.value}
                      </Typography>
                    </ListItem>
                    {record.divider ? <Divider /> : null}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
            <CardActions
              style={{
                justifyContent: 'center',
              }}
            >
              <Button
                style={{
                  fontWeight: 700,
                  padding: '10px 25px',
                }}
                disableElevation
                onClick={e => {
                  router.push({
                    pathname: '/download',
                  });
                }}
              >
                DOWNLOAD
              </Button>
            </CardActions>
          </Card>
          <Card
            className={classes.card}
            style={{ backgroundColor: '#2D2D54' }}
            elevation={4}
          >
            <div style={{ padding: 16 }}>
              <Typography
                variant="body2"
                style={{ color: theme.palette.common.white, fontWeight: 700 }}
              >
                Premium
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                style={{
                  color: fade(theme.palette.common.white, 0.7),
                  fontWeight: 700,
                  letterSpacing: 3,
                }}
              >
                CLIPS PREMIUM EDITION
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 160,
                background: fade(theme.palette.common.white, 0.02),
              }}
            >
              <Typography
                variant="h2"
                style={{
                  fontWeight: 700,
                  color: fade(theme.palette.common.white, 0.9),
                }}
              >
                $5.99
              </Typography>
            </div>
            <CardContent style={{ height: 'calc(100% - 300px)' }}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={null}
                style={{ padding: '20px 0' }}
              >
                {premium.map(record => (
                  <React.Fragment key={`${record.value}-premium`}>
                    <ListItem>
                      <ListItemIcon style={{ minWidth: '32px' }}>
                        <Done color="primary" />
                      </ListItemIcon>
                      <Typography
                        style={{
                          color: fade(theme.palette.common.white, 0.9),
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        {record.value}
                      </Typography>
                    </ListItem>
                    {record.divider ? (
                      <Divider
                        style={{
                          backgroundColor: fade(
                            theme.palette.common.white,
                            0.3
                          ),
                        }}
                      />
                    ) : null}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button
                style={{
                  fontWeight: 700,
                  padding: '10px 25px',
                  color: fade(theme.palette.common.white, 0.85),
                }}
                disableElevation
                onClick={() => {
                  fetch(NEXT_PUBLIC_CHECKOUT_SESSION_URL, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                  })
                    .then(function (response) {
                      return response.json();
                    })
                    .then(async function (session) {
                      console.info(session);
                      const stripe = await loadStripe(
                        NEXT_PUBLIC_STRIPE_PUBLIC_KEY
                      );
                      return stripe.redirectToCheckout({
                        sessionId: session.id,
                      });
                    })
                    .then(function (result) {
                      // If redirectToCheckout fails due to a browser or network
                      // error, you should display the localized error message to your
                      // customer using error.message.
                      if (result.error) {
                        alert(result.error.message);
                      }
                    })
                    .catch(function (error) {
                      console.error('Error:', error);
                    });
                }}
              >
                PURCHASE
              </Button>
            </CardActions>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
