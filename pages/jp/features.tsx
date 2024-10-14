import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {
  Button,
  Divider,
  fade,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Header from '../jp/components/header';
import Footer from '../jp/components/footer';
import { Email } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  pattern: {
    zIndex: -1,
    position: 'absolute',
    top: '-250px',
    left: '0',
    width: '100%',
    height: '850px',
    transform: 'skewY(-12deg)',
    background: theme.palette.secondary.main,
  },
  pair: {
    maxWidth: 1300,
    display: 'flex',
    justifyContent: 'center',
    flex: '1 2 auto',
    // flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flex: 'none',
      flexWrap: 'wrap',
      '&.reverse': {
        flexWrap: 'wrap-reverse',
      },
    },
    padding: '16px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    '&.center': {
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&.content1': {
      marginTop: 350,
      [theme.breakpoints.down('md')]: {
        marginTop: 150,
      },
    },
    '&.content2': {
      marginTop: 150,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
      },
    },
    '&.content3': {
      marginTop: 150,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
      },
    },
  },
  image: {
    maxWidth: '740px',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      padding: '25px 0',
      maxWidth: '85vw',
    },
  },
  text: {
    padding: 16,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  title: {
    fontSize: '5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem',
    },
    color: fade(theme.palette.common.white, 0.9),
    fontWeight: 900,
  },
}));

function whenBrowser<T>(func: (window: Window) => T, defaultValue: T): T {
  return typeof window !== 'undefined' ? func(window) : defaultValue;
}

export default function Home(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [isMac, setIsMac] = useState(false);
  const [emailState, setEmailState] = useState(null);
  const [isSubmitted, setSubmission] = useState(false);
  useEffect(() => {
    const _isMac = whenBrowser(
      win => /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.platform),
      false
    );
    setIsMac(_isMac);
  }, []);

  const encode = (data: { [key: string]: any }) =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const subscribe = async (e: any) => {
    if (emailState) {
      if (/.+@.+\..+/.test(emailState))
        await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: encode({
            'form-name': 'contact-form',
            name: 'Subscribe',
            email: emailState,
            message: '',
          }),
        });
      setSubmission(true);
      setEmailState(null);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerColor="secondary" />
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
          <Typography className={classes.title}>
            {isMac ? '⌘' : 'Ctrl'} + {isMac ? 'shift' : 'alt'} + V
          </Typography>
          <Typography className={classes.title}>Clips を起動</Typography>
          <Typography
            variant="h5"
            style={{ color: fade(theme.palette.common.white, 0.5) }}
          >
            起動のためのショートカットキーはカスタムできる
          </Typography>
        </div>

        {/* Content1 */}
        <div className={clsx(classes.flexColumn, 'center', 'content1')}>
          <div className={classes.pair}>
            <div className={classes.text}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                必要なものはすべてコピーできる
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                Clipsはどんなアプリよりも簡単に、テキスト、画像、HTML、すべてのものをコピーします。
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 700 }}>
                ぺたっと貼り付け！
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                コピーしたアイテムをクリックするだけ。これで好きなものを好きなところで好きなだけ貼り付けできる。
              </Typography>
            </div>
            <img
              src="/app.png"
              alt="Clips"
              style={{
                transform: 'perspective( 2500px ) rotateY( -35deg )',
              }}
              className={classes.image}
            />
          </div>
        </div>

        {/* Content2 */}
        <div className={clsx(classes.flexColumn, 'center', 'content2')}>
          <div className={clsx(classes.pair, 'reverse')}>
            <img
              src="/label.png"
              alt="Clips"
              className={classes.image}
              style={{
                transform: 'perspective( 2500px ) rotateY( 35deg )',
              }}
            />
            <div className={classes.text}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                ラベル機能でクリップボードを整理整頓
              </Typography>
              <div
                style={{ fontWeight: 500, padding: '16px 0', fontSize: '1rem' }}
              >
                クリップボードを簡単に整理できる！
                <ul>
                  <li>カスタムラベルを作成</li>
                  <li>作成したラベルをコピーアイテムに追加</li>
                  <li>ラベルでコピーアイテムを絞り込み</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Content3 */}
        <div className={clsx(classes.flexColumn, 'center', 'content3')}>
          <div className={classes.pair}>
            <div className={classes.text}>
              <Typography variant="h3" style={{ fontWeight: 700 }}>
                Clips をGoogle ドライブに同期
              </Typography>
              <div
                style={{ fontWeight: 500, padding: '16px 0', fontSize: '1rem' }}
              >
                Google ドライブにサインインすることであなたのすべてのデバイスを同期させる
                <ul>
                  <li>あなたの大切なデータを定期的にバックアップ</li>
                  <li>いつでもデータを復元可能</li>
                  <li>デバイス間でデータを自動同期*</li>
                </ul>
                <p
                  style={{
                    marginTop: 50,
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    color: theme.palette.text.secondary,
                  }}
                >
                  *プレミアムプランでのみ利用できる機能です。
                </p>
              </div>
            </div>
            <img
              src="/drive.png"
              alt="Clips"
              className={classes.image}
              style={{
                transform: 'perspective( 2500px ) rotateY( -35deg )',
              }}
            />
          </div>
        </div>

        {/* Content 4 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 16px',
            margin: '64px 0',
          }}
        >
          <Typography variant="h3" style={{ fontWeight: 700 }}>
            強力なイメージの編集機能
          </Typography>
          <div
            style={{
              fontWeight: 500,
              padding: '16px 0',
              marginTop: 10,
              fontSize: '1rem',
              maxWidth: 700,
            }}
          >
            Clipsには、コピーした画像のトリミング、リサイズ、テキスト追加などが可能な画像編集のエディターが付属。
            画像をコピーしたら、鉛筆アイコンからエディターが表示可能！ *
            <p
              style={{
                marginTop: 50,
                fontSize: '0.85rem',
                fontWeight: 300,
                color: theme.palette.text.secondary,
              }}
            >
              *プレミアムプランでのみ全機能を利用可能です。
            </p>
          </div>
          <img
            src="/image-editor.png"
            alt="Image Editor"
            className={classes.image}
          />
        </div>

        {/* Content 5 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 16px',
            margin: '64px 0',
          }}
        >
          <Typography variant="h3" style={{ fontWeight: 700 }}>
            さらなるClipsの進化...
          </Typography>
        </div>

        {/* Content 5 */}
        <div className={clsx(classes.flexColumn, 'center')}>
          <div className={classes.pair}>
            <div className={classes.text} style={{ maxWidth: 600 }}>
              <Typography variant="h4" style={{ fontWeight: 700 }}>
                Clips は毎日進化しています —
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 700 }}>
                常に新しい機能をあなたに！
              </Typography>
              <Typography style={{ fontWeight: 500, padding: '16px 0' }}>
                Clips のメールマガジンに登録して、最新の機能、ガイド、ケーススタディなどのリリース情報をゲット！
              </Typography>
            </div>
            <div
              className={clsx(classes.flexColumn, 'center')}
              style={{ padding: 16 }}
            >
              {!isSubmitted ? (
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    you@domain.com
                  </InputLabel>
                  <OutlinedInput
                    style={{
                      width: '240px',
                    }}
                    id="outlined-adornment-amount"
                    // label="you@domain.com"
                    startAdornment={
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    }
                    margin="dense"
                    labelWidth={130}
                    onChange={e => setEmailState(e.target.value)}
                    error={emailState !== null && emailState === ''}
                  />
                  <Button
                    style={{
                      width: 240,
                      fontWeight: 700,
                      padding: '10px 25px',
                      margin: '10px 0',
                      boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)',
                    }}
                    onClick={subscribe}
                    color="primary"
                    variant="contained"
                    disableElevation
                  >
                    メルマガ登録
                  </Button>
                </FormControl>
              ) : (
                <Typography variant="h6">ご登録ありがとうございます！最新の情報をお楽しみに！</Typography>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
