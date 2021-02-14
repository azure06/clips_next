import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Button, Divider, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

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
    fontWeight: 400,
    fontSize: '1rem',
  },
}));

export default function Introduction(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.mainWithMargin} style={{ maxWidth: 850 }}>
        <div className={classes.flexColumn}>
          <Typography variant="h3" className={classes.blog}>
            Everything you need to know about Clips
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.text.secondary, textAlign: 'center' }}
          >
            Monday, February 15th 2021
          </Typography>
          <Divider style={{ width: '100%', margin: '50px 0' }} />

          <p className={classes.p}>
            When using our devices, we all have to copy some text, pictures, or
            files now and then. However, our operating systems do not have a
            clipboard with storage. That means, once we copy another thing, the
            previous copy is gone forever, and it can be a problem if we cannot
            find it again. The clipboard Manager application &quot;CLIPS&quot;
            is here to help you out in this type of situation.
          </p>
          <Typography
            variant="h4"
            className={classes.blog}
            style={{ margin: '25px 0 0 0' }}
          >
            Features of this Clipboard Manager Application:
          </Typography>
          <Typography variant="h5" style={{ margin: '10px 0 0 0' }}>
            Here are some technical features of Clips clipboard with storage:
          </Typography>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Retrieve all that you copied from History
            </Typography>
            <p className={classes.p}>
              All of that you have copied to your windows 10 clipboard, will
              also get copied and saved permanently in Clips. Regardless of how
              much time passes, you can always open the Clips software to
              retrieve it again. You can also have your favorite copies starred
              for quick retrieval. So, all in all, it can be great for your
              windows 10 clipboard.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Light and Dark Themes Available
            </Typography>
            <p className={classes.p}>
              This application is available in both light and dark themes, for
              both Mac OS and Windows. You can change the themes depending on
              your choice at any time you like.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Search Engine to search Between Formats
            </Typography>
            <p className={classes.p}>
              This application comes with a powerful search engine that can be
              used to get to your previous saves fast with keywords. Also note
              that you can save things beyond texts, e.g., files and pictures.
              The search engine allows you to go to all texts, all pictures, or
              files subsequently.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Instant Clean-up whenever you want to
            </Typography>
            <p className={classes.p}>
              If you feel like you do not have your previous copied stuff
              anymore, you can remove them instantly with just a single click.
              Or, you can remove selected items too. It helps manage your Clips
              better and is suitable for privacy.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Benefits You need to know about it:
            </Typography>
            <ul>
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
              Real-Life Example of How it&apos;s Used:
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
              Final Thoughts:
            </Typography>
            <p className={classes.p}>
              Mac OS and Windows clipboard will make our life easier, because of
              the various features and facilities it provides us with. Now, you
              want to have to worry about losing your saved items ever again.
            </p>
          </div>

          <Divider style={{ width: '100%', margin: '50px 0' }} />

          <Button
            variant="contained"
            color="primary"
            href="/blog"
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
