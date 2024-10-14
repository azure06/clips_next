import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {
  Avatar,
  Button,
  Divider,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
  },
  blog: {
    fontWeight: 700,
    textAlign: 'center',
  },
  p: {
    fontFamily: 'charter, Georgia, Cambria, "Times New Roman", Times, serif',
    fontWeight: 400,
    fontSize: '1.2rem',
  },
}));

export default function Technology(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.mainWithMargin} style={{ maxWidth: 680 }}>
        <div className={classes.flexColumn}>
          <Typography variant="h3" className={classes.blog}>
            Clips under the hood
          </Typography>
          <Typography
            variant="body2"
            style={{
              margin: '35px 0',
              color: theme.palette.text.secondary,
              textAlign: 'center',
            }}
          >
            Saturday, February 20th 2021
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt="azure06"
              src="https://avatars.githubusercontent.com/u/28680604?s=460&u=cdefdfd691de32d6d0e5c1442e4f623b47d3d1f5&v=4"
            />
            <div style={{ padding: '0 10px' }}>
              <div>Gabriele Sato</div>
              <Link
                style={{ color: theme.palette.primary.main }}
                href="https://github.com/azure06"
                target="_blank"
              >
                azure06
              </Link>
            </div>
          </div>
          <Divider style={{ width: '100%', margin: '30px 0' }} />
          <p className={classes.p}>
            In a previous article, we introduced{' '}
            <Link href="/blog/introduction">Clips</Link>. Let&apos;s recap a bit
            so we&apos;re ready to dive in here.
          </p>
          <Typography variant="h4" style={{ fontWeight: 700 }}>
            Background
          </Typography>
          <p className={classes.p}>
            Clips is a clipboard manager... I know, the word
            &quot;clipboard&quot; doesn&apos;t really tell us much about the
            features, or what the app is designed for. In reality, what
            it&apos;s doing is extremely simple: every time you copy a text or a
            picture it will store what you have copied inside a database.
          </p>
          <p className={classes.p}>
            That means every time you need your item back you can find it inside
            the clipboard.
          </p>
          <p className={classes.p}>
            Now that you know what our app is doing, let&apos;s get started!
          </p>
          <Typography variant="h4" style={{ fontWeight: 700 }}>
            Electron
          </Typography>
          <p className={classes.p}>
            Clips is built using Electron, a framework for creating native
            applications with web technologies. Thanks to it focusing on the
            core of the application couldn&apos;t be easier:
          </p>
          <ul className={classes.p} style={{ margin: '1em 0' }}>
            <li> No need to care about the target Operating System</li>
            <li>
              The huge javascript ecosystem allows not to reinvent the wheel.
              (Especially during the UI/UX development process)
            </li>
          </ul>
          <p className={classes.p}>
            Because Electron is based on Chromium, it shares the same
            characteristic of browsers. It requires programmers to deal with 2
            different processes: the renderer process and the main process. The
            renderer process is where the user interacts with the page and
            performs some basic actions. However, whenever the user needs to
            access the system resources, we need to write a &quot;bridge&quot;
            to communicate with the main process.
          </p>
          <p className={classes.p}>
            You&apos;re probably wondering why we have 2 layers. Electron, as I
            already mentioned, is literally a browser, and any code written in
            Html/Javascript can be executed from the renderer process. You can
            even link a page hosted somewhere on the internet, and with no
            surprise, it will be correctly rendered/executed.
          </p>
          <p className={classes.p}>
            This is why Chromium&apos;s renderer processes are executed within a
            sandboxed process that has limited access to the user&apos;s
            computer.
          </p>

          <Typography variant="h3" style={{ fontWeight: 700 }}>
            Continues...
          </Typography>
          <Divider style={{ width: '100%', margin: '50px 0' }} />
          <Button
            variant="contained"
            color="primary"
            onClick={e =>
              router.push({
                pathname: '/blog',
              })
            }
            style={{
              width: 250,
              padding: '10px 25px',
              boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)',
            }}
            disableElevation
          >
            ←Back to Blog
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
