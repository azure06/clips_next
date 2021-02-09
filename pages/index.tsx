import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, fade, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Header } from './components/header';
import { Pattern } from './components/pattern';
import { Clips } from './components/clips';
import { Footer } from './components/footer';
import clsx from 'clsx';
import { Premium } from './components/premium';
import Image from 'next/image';
import { CaseStudy } from './components/case-study';
import {
  ViewAgenda,
  Search,
  Sync,
  DeleteOutline,
  Star,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    background:
      'linear-gradient(180deg, rgba(246,249,252,1) 0%, rgba(246,249,252,0) 25%)',
    marginTop: '64px',
    [theme.breakpoints.down('md')]: {
      marginTop: '54px',
      justifyContent: 'center',
    },
    backgroundRepeat: 'no-repeat',
  },
  title: {
    display: 'flex',
    width: '36%',
    padding: '54px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 420,
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto',
    },
  },
  background: {
    width: '64%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  backgroundImg: {
    width: '100%',
    minWidth: 640,
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto',
    },
  },
  animation: {
    animation: `$animationEffect 6700ms ${theme.transitions.easing.easeInOut} infinite`,
  },
  animationDelayed: {
    animation: `$animationEffect 6700ms ${theme.transitions.easing.easeInOut} 0.150s infinite`,
  },
  caseStudy: {
    padding: '0 10px',
  },

  '@keyframes animationEffect': {
    '0%': {
      opacity: 0.9,
      transform: 'scale(1)',
    },
    '5%': {
      opacity: 0.5,
      transform: 'scale(1.05)',
    },
    '10%': {
      opacity: 0.9,
      transform: 'scale(1)',
    },
    '100%': {
      opacity: 0.9,
      transform: 'scale(1)',
    },
  },
}));

export default function Home(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const transparent = fade(theme.palette.common.white, 0.3);
  const textShadow = `-1px 0 ${transparent}, 0 1px ${transparent}, 1px 0 ${transparent}, 0 -1px ${transparent}`;

  return (
    <div className={styles.container} style={{ margin: 0, padding: 0 }}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={clsx(classes.container)}>
        {/* Presentation */}
        <div className={classes.title}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src="/logo_text.svg" alt="Clips" width={140} height={50} />
            <Typography variant="h3" style={{ padding: '16px 0', textShadow }}>
              Clipboard.
            </Typography>
            <Typography variant="h2" style={{ fontWeight: 700, textShadow }}>
              Redefined.
            </Typography>
            <Typography variant="h6">
              Light. Multiple features. Runs everywhere.
            </Typography>
            <Button
              style={{
                margin: '25px 0',
                fontWeight: 700,
                padding: '12px 50px',
                color: theme.palette.common.white,
                background:
                  'linear-gradient(45deg, rgba(0,91,255,1) 0%, rgba(95,179,210,1) 100%)', //'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)',
              }}
              href="/download"
              variant="contained"
            >
              DOWNLOAD
            </Button>
          </div>
        </div>
        <div className={classes.background}>
          <img
            src="/background.svg"
            alt="Clips"
            className={classes.backgroundImg}
          />
        </div>
      </div>

      <main className={styles.main} style={{ width: '100%' }}>
        {/* Content1 */}
        <div style={{ marginTop: '48px', padding: '0 16px' }}>
          <Typography
            variant="h2"
            className={styles.description}
            style={{ fontWeight: 700 }}
          >
            Simple, Reliable Clipboard
          </Typography>
          <Typography
            variant="h5"
            style={{
              padding: '36px 0',
              maxWidth: '860px',
              textAlign: 'center',
            }}
          >
            Clips is a universal clipboard app that automatically saves
            everything you copy. You can access your history at any moment from
            everywhere.
          </Typography>

          <div
            style={{
              padding: '72px 0',
              zIndex: 1,
            }}
          >
            <div
              className={classes.animation}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Clips />
            </div>
            <div
              className={classes.animationDelayed}
              style={{
                position: 'relative',
                top: '-100px',
                left: '100px',
                width: 210, // important
              }}
            >
              <Premium />
            </div>
            <Typography
              variant="overline"
              style={{
                textAlign: 'center',
                letterSpacing: 3,
                color: theme.palette.text.secondary,
              }}
            >
              <p>Available for Windows and MacOS</p>
            </Typography>
          </div>
        </div>
        <div
          style={{
            marginTop: -1100,
            width: '100%',
            transform: 'skewY(-12deg)',
            zIndex: -1,
          }}
        >
          <Pattern />
        </div>

        {/* Content2 */}
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              className={styles.description}
              style={{ marginTop: '148px', fontWeight: 700 }}
            >
              Everything in your hands
            </Typography>
            <Typography
              variant="h5"
              style={{
                padding: '36px 0',
                maxWidth: '860px',
                textAlign: 'center',
              }}
            >
              Bring a new perspective to Copy & Paste. You can find any item in
              a second from your clipboard history. And by signing-in to Google
              Drive you can keep in sync all your devices.
            </Typography>
          </div>
          {/* Icons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { title: 'Multiple Formats', icon: ViewAgenda },
              { title: 'Labels', icon: Star },
              { title: 'Search', icon: Search },
              { title: 'Sync', icon: Sync },
              { title: 'Cleanup', icon: DeleteOutline },
            ].map((record, index) => (
              <div
                key={`icon-${index}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    margin: 24,
                    width: 150,
                    height: 150,
                    background: theme.palette.primary.main,
                    borderRadius: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '23px solid white',
                    boxShadow: `15px 15px 20px -10px ${fade(
                      theme.palette.common.black,
                      0.09
                    )}`,
                  }}
                >
                  <record.icon
                    style={{
                      color: theme.palette.common.white,
                      fontSize: 30,
                    }}
                  />
                </div>
                <Typography
                  variant="body2"
                  style={{
                    padding: 10,
                    fontWeight: 700,
                    letterSpacing: 5,
                    color: theme.palette.text.secondary,
                    textTransform: 'uppercase',
                  }}
                >
                  {record.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Content3 */}
        <div className={styles.main} style={{ width: '100%' }}>
          <div>
            <Typography
              variant="h2"
              className={styles.description}
              style={{ fontWeight: 700 }}
            >
              Why Clips
            </Typography>
            <Typography
              variant="h5"
              style={{
                padding: '36px 0',
                maxWidth: '860px',
                textAlign: 'center',
              }}
            >
              Are you curious? Check the sections below to know more details.
            </Typography>
          </div>

          <div className={styles.grid}>
            <a href="/features" className={styles.card}>
              <h3>Features &rarr;</h3>
              <p>Find in-depth information about Clips features.</p>
            </a>

            <a href="/premium" className={styles.card}>
              <h3>Premium &rarr;</h3>
              <p>Choose Community Edition or Premium Edition.</p>
            </a>

            <a href="/download" className={styles.card}>
              <h3>Download &rarr;</h3>
              <p>
                Get if for FREE. It&apos; s available for Windows and MacOS.{' '}
              </p>
            </a>

            <a href="/blog" className={styles.card}>
              <h3>Blog &rarr;</h3>
              <p>If you are curious about Clips, please read our blog.</p>
            </a>
          </div>
        </div>

        {/* Content 4 */}
        <div style={{ width: '100%', marginTop: 200 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ zIndex: 1 }}>
              <div className={classes.caseStudy}>
                <Typography
                  variant="h2"
                  className={styles.description}
                  style={{ fontWeight: 700 }}
                >
                  Increase your productivity
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    padding: '35px 0',
                    maxWidth: '860px',
                    textAlign: 'center',
                  }}
                >
                  Spend less time chasing your documents— Everything you need is
                  saved inside your clipboard.
                </Typography>
              </div>
            </div>
            <div
              style={{
                zIndex: 1,
                padding: '0 16px',
                marginTop: '48px',
                maxWidth: 800,
              }}
            >
              <CaseStudy />
            </div>
          </div>

          <div
            style={{
              marginTop: -850,
              width: '100%',
              transform: 'skewY(-12deg)',
              zIndex: -1,
            }}
          >
            <Pattern />
          </div>
        </div>
      </main>

      {/* Section */}

      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" style={{ padding: 16 }}>
            Simple. Secure. Fast.
          </Typography>
          <div>
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: 200,
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden',
              }}
            >
              <div className={styles.googleAnimation}>
                <img
                  src="/drive.svg"
                  alt="Google Drive"
                  style={{
                    width: 50,
                    height: 50,
                    position: 'relative',
                    filter: 'invert(1) contrast(90)',
                    left: -230,
                  }}
                />
                <img
                  src="/google.svg"
                  alt="Google"
                  style={{
                    width: 50,
                    height: 50,
                    position: 'relative',
                    filter: 'invert(1) contrast(90)',
                    left: -130,
                  }}
                />
              </div>
            </div>
          </div>

          <Typography
            variant="body1"
            style={{ fontWeight: 700, padding: '15px 16px 0  16px' }}
          >
            CONTINUOUS BACKUP
          </Typography>
          <Typography style={{ fontWeight: 300, fontSize: '0.85rem' }}>
            Powered by
            <span style={{ fontWeight: 700 }}> Google Drive</span>
            <img
              src="/drive.svg"
              alt="Google Drive"
              style={{
                top: 5,
                left: 2,
                width: 20,
                height: 20,
                position: 'relative',
              }}
            />
          </Typography>
        </div>
      </div>

      <div style={{ width: '100%', marginTop: '250px' }}>
        <Footer />
      </div>
    </div>
  );
}
