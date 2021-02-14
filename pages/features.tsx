import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Button,
  fade,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Email } from '@material-ui/icons';
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
    background: theme.palette.secondary.main,
  },
  pair: {
    maxWidth: 1300,
    display: 'flex',
    justifyContent: 'center',
    flex: '1 2 auto',
    // flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flex: 'none',
      flexWrap: 'wrap',
      '&.reverse': {
        flexWrap: 'wrap-reverse',
      },
    },
    padding: '16px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    '&.center': {
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&.content1': {
      marginTop: 350,
      [theme.breakpoints.down('md')]: {
        marginTop: 150,
      },
    },
    '&.content2': {
      marginTop: 150,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
      },
    },
    '&.content3': {
      marginTop: 150,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
      },
    },
  },
  image: {
    maxWidth: '740px',
    [theme.breakpoints.down('md')]: {
      padding: '25px 0',
      maxWidth: '85vw',
    },
  },
  text: {
    padding: 16,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  title: {
    fontSize: '5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem',
    },
    color: fade(theme.palette.common.white, 0.9),
    fontWeight: 900,
  },
}));

function whenBrowser<T>(func: (window: Window) => T, defaultValue: T): T {
  return typeof window !== 'undefined' ? func(window) : defaultValue;
}

export default function Home(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    const _isMac = whenBrowser(
      win => /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.platform),
      false
    );
    setIsMac(_isMac);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerColor="secondary" />
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
          <Typography className={classes.title}>Open your app with</Typography>
          <Typography className={classes.title}>
            {isMac ? '⌘' : 'Ctrl'} + {isMac ? 'shift' : 'alt'} + V
          </Typography>
          <Typography
            variant="h4"
            style={{ color: fade(theme.palette.common.white, 0.5) }}
          >
            Or use your favorite hotkey
          </Typography>
        </div>

        {/* Content1 */}
        <div className={clsx(classes.flexColumn, 'center', 'content1')}>
          <div className={classes.pair}>
            <div className={classes.text}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                Copy text and images from your clipboard
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                Just click on the item you want to copy. That&apos;s it! Now you
                can paste it everywhere!
              </Typography>
            </div>
            <img
              src="/app.png"
              alt="Clips"
              style={{
                transform: 'perspective( 2500px ) rotateY( -35deg )',
              }}
              className={classes.image}
            />
          </div>
        </div>

        {/* Content2 */}
        <div className={clsx(classes.flexColumn, 'center', 'content2')}>
          <div className={clsx(classes.pair, 'reverse')}>
            <img
              src="/label.png"
              alt="Clips"
              className={classes.image}
              style={{
                transform: 'perspective( 2500px ) rotateY( 35deg )',
              }}
            />
            <div className={classes.text}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                Create labels to organize your clipboard
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                Just click on the item you want to copy. That&apos;s it! Now you
                can paste it everywhere!
              </Typography>
            </div>
          </div>
        </div>

        {/* Content3 */}
        <div className={clsx(classes.flexColumn, 'center', 'content3')}>
          <div className={classes.pair}>
            <div className={classes.text}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                Keep in Sync with Google Drive
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                By signing-in to Google Drive you can keep in sync all your
                devices.
              </Typography>
            </div>
            <img
              src="/drive.png"
              alt="Clips"
              className={classes.image}
              style={{
                transform: 'perspective( 2500px ) rotateY( -35deg )',
              }}
            />
          </div>
        </div>

        {/* Content 4 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 16px',
            margin: '64px 0',
          }}
        >
          <Typography variant="h3" style={{ fontWeight: 700 }}>
            And a lot more...
          </Typography>
        </div>

        {/* Content 5 */}
        <div className={clsx(classes.flexColumn, 'center')}>
          <div className={classes.pair}>
            <div className={classes.text} style={{ maxWidth: 600 }}>
              <Typography variant="h4" style={{ fontWeight: 700 }}>
                Clips is getting better every day —
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 700 }}>
                don’t miss out on all the action.
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                Join the Clips newsletter and stay updated on new releases and
                features, guides, and case studies.
              </Typography>
            </div>
            <div
              className={clsx(classes.flexColumn, 'center')}
              style={{ padding: 16 }}
            >
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  you@domain.com
                </InputLabel>
                <OutlinedInput
                  style={{
                    width: '240px',
                  }}
                  id="outlined-adornment-amount"
                  // label="you@domain.com"
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                  margin="dense"
                  labelWidth={130}
                />
                <Button
                  style={{
                    width: 240,
                    fontWeight: 700,
                    padding: '10px 25px',
                    margin: '10px 0',
                    boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)',
                  }}
                  color="primary"
                  variant="contained"
                  disableElevation
                >
                  Subscribe
                </Button>
              </FormControl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
