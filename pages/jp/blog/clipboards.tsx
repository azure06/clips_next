import Head from 'next/head';
import styles from '@/styles/Home.module.css';
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
            Clipboard Apps
          </Typography>
          <Typography
            variant="body2"
            style={{
              margin: '35px 0',
              color: theme.palette.text.secondary,
              textAlign: 'center',
            }}
          >
            Monday, February 27th 2023
          </Typography>
          <Divider style={{ width: '100%', margin: '30px 0' }} />

          <p className={classes.p}>
            Clipboard apps have become an indispensable tool for many people in
            today&apos;s digital world. These apps allow users to store multiple
            pieces of text and images in a virtual clipboard, which they can
            then easily access and use in various applications. Whether you are
            a student, a professional, or a casual computer user, a clipboard
            app can help simplify your daily work and improve your productivity.
            In this article, we will explore the benefits of using a clipboard
            app and introduce some popular options, including Clips.
          </p>
          <Typography
            variant="h4"
            className={classes.blog}
            style={{ margin: '25px 0 0 0' }}
          >
            Why use a clipboard app?
          </Typography>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Save time
            </Typography>
            <p className={classes.p}>
              One of the main benefits of using a clipboard app is the ability
              to save time. With a clipboard app, you can easily copy and paste
              multiple pieces of text or images without having to switch back
              and forth between different applications. This can be especially
              useful for tasks that require a lot of copying and pasting, such
              as data entry, content creation, or research.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Reduce errors
            </Typography>
            <p className={classes.p}>
              Using a clipboard app can also help reduce errors. When you copy
              and paste text or images, it&apos;s easy to accidentally overwrite
              or lose important information. A clipboard app allows you to keep
              track of all the items you&apos;ve copied, so you can easily
              retrieve them if you need to. This can be especially useful when
              working on complex projects or when dealing with large amounts of
              data.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Improve organization
            </Typography>
            <p className={classes.p}>
              Clipboard apps can also help improve organization. With a
              clipboard app, you can categorize your copied items by topic,
              date, or project, making it easier to find and use them later.
              This can be especially useful if you work on multiple projects at
              once or if you frequently use similar pieces of text or images.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Popular clipboard apps
            </Typography>
            <Typography variant="h6" className={classes.blog}>
              Clips
            </Typography>
            <p className={classes.p}>
              Clips is a powerful clipboard app that allows you to store and
              manage multiple items in a virtual clipboard. With Clips, you can
              easily copy and paste text, images, and even files between
              different applications. The app also features a built-in search
              function, allowing you to quickly find the items you need. Clips
              also offers several advanced features, such as the ability to
              create templates for frequently used items and the ability to sync
              your clipboard across multiple devices. The app is available for
              Windows, macOS, making it a versatile option for users who work
              across multiple platforms.
            </p>
            <Typography variant="h6" className={classes.blog}>
              Ditto
            </Typography>
            <p className={classes.p}>
              Ditto is another popular clipboard app that allows you to store
              and manage multiple items in a virtual clipboard. With Ditto, you
              can easily copy and paste text, images, and files between
              different applications. The app also features a built-in search
              function and the ability to categorize your items by topic or
              project. Ditto also offers several advanced features, such as the
              ability to preview items before pasting them and the ability to
              synchronize your clipboard across multiple devices. The app is
              available for Windows and is free to use.
            </p>
            <Typography variant="h6" className={classes.blog}>
              CopyQ
            </Typography>
            <p className={classes.p}>
              CopyQ is a powerful clipboard manager that allows you to store and
              manage multiple items in a virtual clipboard. With CopyQ, you can
              easily copy and paste text, images, and files between different
              applications. The app also features a built-in search function and
              the ability to categorize your items by topic or project. CopyQ
              also offers several advanced features, such as the ability to edit
              and manipulate copied items before pasting them and the ability to
              create custom commands for frequently used items. The app is
              available for Windows, macOS, and Linux and is free to use.
            </p>
          </div>

          <div style={{ margin: '25px 0 0 0' }}>
            <Typography variant="h5" className={classes.blog}>
              Conclusion
            </Typography>
            <p className={classes.p}>
              Clipboard apps are a simple yet powerful tool that can help
              simplify your daily work and improve your productivity. Whether
              you&apos;re a student, a professional, or a casual computer user,
              a clipboard app can help you save time, reduce errors, and improve
              organization. Clips, Ditto, and CopyQ are just a few examples
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
