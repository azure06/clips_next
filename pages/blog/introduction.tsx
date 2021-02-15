import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Button, Divider, makeStyles, Typography } from '@material-ui/core';
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
  },
  p: {
    fontFamily: 'charter, Georgia, Cambria, "Times New Roman", Times, serif',
    fontWeight: 400,
    fontSize: '1.2rem',
  },
}));

export default function Introduction(): JSX.Element {
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
          <Typography
            variant="h3"
            className={classes.blog}
            style={{ textAlign: 'center' }}
          >
            Everything you need to know about Clips
          </Typography>
          <Typography
            variant="body2"
            style={{
              margin: '35px 0',
              color: theme.palette.text.secondary,
              textAlign: 'center',
            }}
          >
            Monday, February 15th 2021
          </Typography>
          <Divider style={{ width: '100%', margin: '30px 0' }} />

          <p className={classes.p}>
            When using our devices, we all have to copy some text, pictures, or
            files now and then. However, our operating systems do not have a
            clipboard with storage. That means, once we copy another thing, the
            previous copy is gone forever, and it could be a problem if we
            cannot find it again. Clips will help you out in this type of
            situation.
          </p>
          <Typography
            variant="h4"
            className={classes.blog}
            style={{ margin: '25px 0 0 0' }}
          >
            Features
          </Typography>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Retrieve all that you copied from the clipboard history
            </Typography>
            <p className={classes.p}>
              Everything of that you have copied to your windows 10 clipboard,
              will also get copied and saved permanently in Clips. Regardless of
              how much time passes, you can always open Clipt to retrieve it
              again. You can also have label you favorite items for a quick
              retrieval.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Light and Dark Themes
            </Typography>
            <p className={classes.p}>
              This application is available in both light and dark themes, for
              Windows, macOS, and Linux. You can change the themes depending on
              your choice at any time you like.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Search Between Formats
            </Typography>
            <p className={classes.p}>
              This application comes with a powerful search engine that allows
              you to get to your previous saves instantly. You can search
              through texts, images, RTF, HTML subsequently.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Instant Clean-up
            </Typography>
            <p className={classes.p}>
              If you feel like you do not need your previous copied stuff
              anymore, you can remove them instantly with just a single click.
              Or if you prefer, you can remove each item by selecting them one
              by one. It helps you to manage your Clips better and is suitable
              for privacy.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Benefits
            </Typography>
            <ul className={classes.p}>
              <li>
                You will not have to waste time searching for the webpage or
                directory again where you have copied a text or file from.
              </li>
              <li>
                If you lose what you copied forever, this will cause a lot of
                agony for you. However, with Clips, you will not lose it again,
                unless you clear the list manually.
              </li>
              <li>
                This application ensures your privacy by keeping your saves
                secured. You can get them removed at any time.
              </li>
            </ul>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Real-World scenarios
            </Typography>
            <p className={classes.p}>
              Let&apos;s say you have to complete an essay given to you as an
              assignment. To complete that essay, you have 100s of tabs open,
              and you are copy-pasting stuff to add to your assignment. You
              copied a text to add, but forgot to paste it, and copied something
              again. Now, you&apos;ve lost your previous copy, and you cannot
              find it from the 100s of tabs you have opened. In such a scenario,
              if you have clips, you can go to the application and see your
              previous copies, and get it directly from there. It saved you the
              effort and hours that would have been wasted otherwise.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Final Thoughts
            </Typography>
            <p className={classes.p}>
              Available for Windows, macOS, and Linux, Clips will make our life
              easier, thanks to the various features it facilitates our daily
              work. Now, you won&apos;t have to worry about losing your saved
              items ever again.
            </p>
          </div>

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
