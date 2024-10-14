/* eslint-disable react/jsx-no-target-blank */
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
  li: {
    fontFamily: 'charter, Georgia, Cambria, "Times New Roman", Times, serif',
    fontWeight: 400,
    fontSize: '1.2rem',
    padding: '8px 0',
  },
  img: {
    maxWidth: '100%',
    // [theme.breakpoints.down('md')]: {
    //   maxWidth: '100%',
    // },
    borderRadius: '10px',
    // minWidth: '300px',
    objectFit: 'contain',
    margin: '10px 0',
  },
}));

export default function XKey(): JSX.Element {
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
            XKey is Changing How You Create Presentations
          </Typography>
          <Typography
            variant="body2"
            style={{
              margin: '35px 0',
              color: theme.palette.text.secondary,
              textAlign: 'center',
            }}
          >
            Monday, October 13th 2024
          </Typography>
          <Divider style={{ width: '100%', margin: '30px 0' }} />

          <p className={classes.p}>
            Creating presentations shouldn’t feel like a struggle. With XKey,
            that’s exactly what we set out to fix—giving you the tools to make
            your PowerPoint workflow smoother, faster, and more efficient. 🚀
          </p>
          <Typography
            variant="h4"
            className={classes.blog}
            style={{ margin: '25px 0 0 0' }}
          >
            What is XKey?
          </Typography>

          <div style={{ margin: '25px 0 0 0' }}>
            <p className={classes.p}>
              XKey is a smart enhancement for Microsoft PowerPoint. It&apos;s
              built for anyone who values efficiency—whether you&apos;re a
              professional, an educator, or a creative—helping you save time and
              focus on delivering your message.
            </p>
          </div>

          <img src="/xkey-ribbon.gif" alt="xkey" className={classes.img} />

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Why Use XKey?
            </Typography>
            <ul style={{ padding: '0 8px' }}>
              <li className={classes.li}>
                Smart Shortcuts: PowerPoint is powerful, but navigating endless
                menus isn’t. XKey’s shortcuts give you instant access to
                essential features, letting you skip the hassle and focus on
                your content.
              </li>

              <li className={classes.li}>
                Customizable Ribbon: With XKey, you can shape PowerPoint to fit
                your workflow. Organize your most-used tools the way you like,
                so everything you need is just a click away.
              </li>

              <li className={classes.li}>
                Boosted Productivity: When you’re not wasting time on technical
                details, you can focus on what matters. XKey helps you finish
                your presentations faster, letting you work more efficiently and
                effectively.
              </li>

              <li className={classes.li}>
                User-Friendly: XKey is easy to pick up and use right away. No
                steep learning curve—just tools that make your work faster and
                smoother from day one.
              </li>
            </ul>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h4" className={classes.blog}>
              The Time to Start is Now
            </Typography>
            <p className={classes.p}>
              When you're working on presentations, every second you save adds
              up. XKey is built to remove the small frustrations that slow you
              down, letting you focus on what really counts: delivering a clear,
              impactful message. XKey is not about doing more—it's about doing
              it better, faster, and without the usual hassle.
            </p>
            <p className={classes.p}>
              Others are already discovering how much smoother their workflow
              can be with XKey. It's not about getting ahead—it's about keeping
              up and staying productive in a fast-paced world.
            </p>
            <Typography variant="h5" className={classes.blog}>
              Don’t Miss Out
            </Typography>
            <p className={classes.p}>
              Others are already discovering how much smoother their workflow
              can be with XKey. It's not about getting ahead—it's about keeping
              up and staying productive in a fast-paced world.
            </p>
          </div>

          <div className={classes.p}>
            See how XKey can make your presentations more efficient. Visit{' '}
            <a
              style={{
                color: 'rgba(0,90,250,1)',
              }}
              target="_blank"
              href="https://xkey.infiniticlips.com"
            >
              https://xkey.infiniticlips.com
            </a>{' '}
            and experience it for yourself.
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
