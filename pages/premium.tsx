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
    padding: '100px 0',
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
            Get started with Community Edition.
          </Typography>
          <Typography
            variant="h4"
            style={{ color: theme.palette.text.secondary }}
          >
            Everything you need all in one place.
          </Typography>
        </div>

        {/* Plans */}
        <div className={classes.root}>
          <Card
            className={classes.card}
            elevation={24}
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
                href="/download"
              >
                DOWNLOAD
              </Button>
            </CardActions>
          </Card>
          <Card
            className={classes.card}
            style={{ backgroundColor: '#2D2D54' }}
            elevation={0}
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
                disabled
                disableElevation
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
