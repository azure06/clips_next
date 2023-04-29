import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Button, fade, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Header from '../jp/components/header';
import Pattern from '../components/pattern';
import Clips from '../jp/components/clips';
import Footer from '../jp/components/footer';
import clsx from 'clsx';
import Premium from '../jp/components/premium';
import CaseStudy from '../jp/components/case-study';
import {
  ViewAgenda,
  Search,
  Sync,
  DeleteOutline,
  Star,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

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
    marginTop: '112px', // 64 + 48
    [theme.breakpoints.down('md')]: {
      marginTop: '102px', // 54 + 48
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
  const router = useRouter();
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
            <img
              src="/logo_text.svg"
              alt="Clips"
              style={{ width: 140, height: 50 }}
            />
            <Typography variant="h4" style={{ fontWeight: 600, textShadow }}>
              クリップボードを超えた
            </Typography>
            <Typography variant="h4" style={{ fontWeight: 600, textShadow }}>
              クリップボード
            </Typography>
            <Typography variant="h6">
              マルチな機能でサクサク動作。環境を選ばず使える。
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
              onClick={() =>
                router.push({
                  pathname: 'download',
                })
              }
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
            シンプルで頼もしいクリップボード
          </Typography>
          <Typography
            variant="h5"
            style={{
              padding: '36px 0 0',
              maxWidth: '900px',
              textAlign: 'center',
            }}
          >
            Clipsはユーザが管理せずとも、自動でコピーデータが保存される誰もが使いやすいクリップボードアプリ
          </Typography>
          <Typography
            variant="h5"
            style={{
              maxWidth: '860px',
              textAlign: 'center',
            }}
          >
            あなたがコピーしたすべての履歴に いつでも どこでも アクセス可能
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
              <p>Windows、MacOS、Linux環境で使うことができます</p>
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
        <div style={{ padding: '0 16px' }}>
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
              検索 保存 もう必要ない
            </Typography>
            <Typography
              variant="h5"
              style={{
                padding: '36px 0 0 0',
                maxWidth: '790px',
                textAlign: 'center',
              }}
            >
              ブラウザがあなたの検索履歴を保存するなら、クリップボードも履歴を保存する方がいい。
            </Typography>
            <Typography
              variant="h5"
              style={{
                maxWidth: '850px',
                textAlign: 'center',
              }}
            >
              Clipsなら、履歴から検索することで簡単に欲しいものを見つけられ、
            </Typography>
            <Typography
              variant="h5"
              style={{
                padding: '0px 36px 0 0',
                maxWidth: '780px',
                textAlign: 'center',
              }}
            >
              Googleドライブでサインインすれば、あなたが使うすべてのデバイスで履歴を共有できる。
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
              { title: 'マルチフォーマット', icon: ViewAgenda },
              { title: 'ラベル', icon: Star },
              { title: '検索', icon: Search },
              { title: '同期', icon: Sync },
              { title: 'データ削除', icon: DeleteOutline },
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
        <div className={styles.main} style={{ padding: '48px 16px' }}>
          <div>
            <Typography
              variant="h2"
              className={styles.description}
              style={{ fontWeight: 700 }}
            >
              Clipsについてもっと詳しく
            </Typography>
          </div>

          <div className={styles.grid}>
            <a
              onClick={e => {
                e.preventDefault();
                router.push({
                  pathname: '/features',
                });
              }}
              href="/features"
              className={styles.card}
            >
              <h3>Point &rarr;</h3>
              <p>Clipsの機能について</p>
            </a>

            <a
              onClick={e => {
                e.preventDefault();
                router.push({
                  pathname: '/premium',
                });
              }}
              href="/premium"
              className={styles.card}
            >
              <h3>Plan &rarr;</h3>
              <p>無料プランと有料プランを選択</p>
            </a>

            <a
              onClick={e => {
                e.preventDefault();
                router.push({
                  pathname: '/download',
                });
              }}
              href="/download"
              className={styles.card}
            >
              <h3>Download &rarr;</h3>
              <p>無料プランは Windows、macOSで利用可能</p>
            </a>

            <a
              onClick={e => {
                e.preventDefault();
                router.push({
                  pathname: '/blog',
                });
              }}
              href="/blog"
              className={styles.card}
            >
              <h3>Blog &rarr;</h3>
              <p>Clipsの魅力について、記事を掲載中💌</p>
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
                  面倒なことはすべてClipsにおまかせ
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    padding: '35px 0 0 0',
                    maxWidth: '860px',
                    textAlign: 'center',
                  }}
                >
                  色々なサイトからドキュメントを探す作業はもう必要ない
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    padding: '0px 0',
                    maxWidth: '860px',
                    textAlign: 'center',
                  }}
                >
                  なぜならすべてClipsに保存されているから
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
            シンプル・厳重・速い
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
            style={{
              padding: '10px 16px 0  16px',
              fontWeight: 300,
              fontSize: '0.85rem',
            }}
          >
            <span style={{ fontWeight: 700 }}> Google ドライブ</span>
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
            搭載で
          </Typography>
          <Typography
            variant="body1"
            style={{ fontWeight: 700, padding: '0px 16px 0  16px' }}
          >
            常にバックアップ可能
          </Typography>
        </div>
      </div>

      <div style={{ width: '100%', marginTop: '125px' }}>
        <Footer />
      </div>
    </div>
  );
}
