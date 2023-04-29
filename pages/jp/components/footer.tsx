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
                ブログ
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
                Clips について
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
                Clips の中身
              </Link>
            </div>
          </div>
          <div className={classes.gridList}>
            <div>
              <Typography style={{ fontWeight: 900, padding: '5px 0' }}>
                メディア
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
                リソース
              </Typography>
              <Link
                className={classes.gridItems}
                href="/jp/privacy"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/jp/privacy',
                  });
                }}
              >
                プライバシーポリシー
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
                お問い合わせ
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
                CLIPS について
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
