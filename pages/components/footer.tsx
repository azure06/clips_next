import {
  Divider,
  Link,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import Image from 'next/image';

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

export function Footer(props: unknown): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <footer style={{ width: '100%' }}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.gridList}>
            <div>
              <Typography style={{ fontWeight: 900, padding: '5px 0' }}>
                Blog
              </Typography>
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
                href="https://www.electronjs.org/apps/infiniti-clips"
              >
                Electron
              </Link>
              <Link
                className={classes.gridItems}
                target="_blank"
                href="https://www.softpedia.com/get/Office-tools/Clipboard/Infiniti-Clips.shtml"
              >
                Softpedia
              </Link>
            </div>
          </div>
          <div className={classes.gridList}>
            <div>
              <Typography style={{ fontWeight: 900, padding: '5px 0' }}>
                Resources
              </Typography>
              <Link className={classes.gridItems} href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className={classes.gridItems} href="/contact">
                Contact Us
              </Link>
              <Link className={classes.gridItems} href="/about">
                About
              </Link>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ filter: 'grayscale(1) opacity(0.4)' }}>
            <Image src="/clips.svg" alt="Clips" width={50} height={50} />
          </div>
          <Typography
            variant="body2"
            style={{
              padding: '15px 0',
              fontWeight: 500,
              color: theme.palette.text.secondary,
            }}
          >
            Copyright © 2021 Infiniti Inc. —{' '}
            <span style={{ fontWeight: 700 }}> All rights reserved. </span>
          </Typography>
        </div>
        <Divider />
        <Typography
          variant="body2"
          style={{ textAlign: 'center', padding: '15px 0' }}
        >
          Copyright — <span style={{ fontWeight: 700 }}> 2021 </span>
        </Typography>
      </div>
    </footer>
  );
}
