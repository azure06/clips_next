import {
  Divider,
  Link,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    gridAutoRows: 'minmax(250px, auto)',
  },
  gridList: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 0',
    alignItems: 'center',
  },
  gridItems: {
    display: 'block',
    padding: '4px 0',
    fontWeight: 500,
  },
}));

export default function Footer(props: unknown): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  return (
    <footer style={{ width: '100%' }}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.gridList}>
            <div>
              <Typography style={{ fontWeight: 900, padding: '5px 0' }}>
                Blog
              </Typography>
              <Link
                className={classes.gridItems}
                href="/blog/introduction"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/blog/introduction',
                  });
                }}
              >
                Introduction to Clips
              </Link>
              <Link
                className={classes.gridItems}
                href="/blog/technology"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/blog/technology',
                  });
                }}
              >
                Clips under the hood
              </Link>
            </div>
          </div>
          <div className={classes.gridList}>
            <div>
              <Typography style={{ fontWeight: 900, padding: '5px 0' }}>
                External Links
              </Typography>
              <Link
                className={classes.gridItems}
                target="_blank"
                href="https://apps.apple.com/us/app/clips-clipboard-manager/id1549350243"
              >
                App Store
              </Link>
              <Link
                className={classes.gridItems}
                target="_blank"
                href="https://www.electronjs.org/apps"
              >
                Electron
              </Link>
              <Link
                className={classes.gridItems}
                target="_blank"
                href="https://snapcraft.io/infiniti-clips"
              >
                Snapcraft
              </Link>
              <Link
                className={classes.gridItems}
                target="_blank"
                href="https://www.softpedia.com/get/Office-tools/Clipboard/Infiniti-Clips.shtml"
              >
                Softpedia
              </Link>
              <Link
                className={classes.gridItems}
                target="_blank"
                href="https://www.majorgeeks.com/files/details/clips.html"
              >
                Major Geeks
              </Link>
            </div>
          </div>
          <div className={classes.gridList}>
            <div>
              <Typography style={{ fontWeight: 900, padding: '5px 0' }}>
                Resources
              </Typography>
              <Link
                className={classes.gridItems}
                href="/privacy"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/privacy',
                  });
                }}
              >
                Privacy Policy
              </Link>
              <Link
                className={classes.gridItems}
                href="/contact"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/contact',
                  });
                }}
              >
                Contact
              </Link>
              <Link
                className={classes.gridItems}
                href="/about"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/about',
                  });
                }}
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ filter: 'grayscale(1) opacity(0.4)' }}>
            <img
              src="/clips.svg"
              alt="Clips"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <Typography
            variant="body2"
            style={{
              padding: '15px 0',
              fontWeight: 500,
              color: theme.palette.text.secondary,
            }}
          >
            Copyright © 2023 Infiniti Co., Ltd —{' '}
            <span style={{ fontWeight: 700 }}> All rights reserved. </span>
          </Typography>
        </div>
        <Divider />
        <Typography
          variant="body2"
          style={{ textAlign: 'center', padding: '15px 0' }}
        >
          Copyright — <span style={{ fontWeight: 700 }}> 2023 </span>
        </Typography>
      </div>
    </footer>
  );
}
