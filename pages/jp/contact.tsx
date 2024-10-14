import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  pattern: {
    zIndex: -1,
    position: 'absolute',
    top: '-250px',
    left: '0',
    width: '100%',
    height: '850px',
    transform: 'skewY(-12deg)',
    background: 'rgba(243,252,255,1)',
  },
  root: {
    minWidth: 570,
    [theme.breakpoints.down('xs')]: {
      minWidth: 320,
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  grid: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 24px 0',
    // flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexDirection: 'column',
    },
  },
}));

export default function Contact(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();

  const [formState, setFormState] = useState({
    name: null,
    email: null,
    message: null,
  });
  const [isSubmitted, setSubmission] = useState(false);

  const encode = (data: { [key: string]: any }) =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const contact = (e: any) => {
    if (
      formState.name &&
      formState.email &&
      formState.message &&
      /.+@.+\..+/.test(formState.email)
    ) {
      return fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': 'contact-form',
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      }).then(_ => {
        setSubmission(true);
      });
    } else {
      setFormState({
        name: formState.name || '',
        email: formState.email || '',
        message: formState.message || '',
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerColor="rgba(243,252,255,1)" />
      <main className={styles.mainWithMargin}>
        <div className={classes.pattern} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 16px',
          }}
        >
          <Typography variant="h3" style={{ fontWeight: 700 }}>
            お問い合わせ
          </Typography>
          <Typography
            variant="h4"
            style={{ color: theme.palette.text.secondary }}
          >
            {"皆様からのご意見をお待ちしております。"}
          </Typography>
        </div>
        <Card
          elevation={24}
          style={{
            backgroundColor: theme.palette.common.white,
            marginTop: 48,
          }}
        >
          {isSubmitted ? (
            <CardContent>
              <Typography style={{ textAlign: 'center', paddingTop: 10 }}>
                お問い合わせいただき、ありがとうございます。{' '}
              </Typography>
            </CardContent>
          ) : (
            <React.Fragment>
              <CardContent>
                <form className={classes.root} autoComplete="off">
                  <Typography
                    variant="body2"
                    style={{ padding: '16px 4px', fontWeight: 500 }}
                  >
                    お問い合わせ
                  </Typography>
                  <div className={classes.grid}>
                    <div
                      style={{
                        width: '100%',
                        flexBasis: '0 2 auto',
                        padding: '0 8px',
                      }}
                    >
                      <TextField
                        error={formState.name !== null && formState.name === ''}
                        helperText={
                          formState.name !== null && formState.name === ''
                            ? '氏名は必須です。'
                            : ''
                        }
                        style={{
                          width: '100%',
                        }}
                        id="outlined-basic"
                        label="氏名"
                        margin="dense"
                        variant="outlined"
                        onChange={e =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div
                      style={{
                        width: '100%',
                        flexBasis: '0 2 auto',
                        padding: '0 8px',
                      }}
                    >
                      <TextField
                        error={
                          formState.email !== null &&
                          !/.+@.+\..+/.test(formState.email)
                        }
                        helperText={
                          formState.email !== null && formState.email === ''
                            ? 'メールアドレスは必須です。'
                            : !/.+@.+\..+/.test(formState.email)
                            ? '有効なメールアドレスを入力してください。'
                            : ''
                        }
                        style={{
                          width: '100%',
                        }}
                        id="outlined-basic"
                        label="メールアドレス"
                        margin="dense"
                        variant="outlined"
                        onChange={e =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Divider />
                    <Typography
                      variant="body2"
                      style={{ padding: '16px 4px', fontWeight: 500 }}
                    >
                      お問い合わせ内容
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="お問い合わせ内容"
                      margin="dense"
                      variant="outlined"
                      multiline
                      style={{ width: '100%' }}
                      rows={8}
                      rowsMax={10}
                      onChange={e =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      error={
                        formState.message !== null && formState.message === ''
                      }
                      helperText={
                        formState.message !== null && formState.message === ''
                          ? 'お問い合わせ内容が入力されていません。'
                          : ''
                      }
                    />
                    <Typography
                      variant="body2"
                      style={{ padding: '16px 4px', fontWeight: 500 }}
                    >
                      こちらのメールアドレスにメールを送信いただくことも可能です。
                      {' '}
                      <a href="mailto: infiniticlips@proton.me">
                        infiniticlips@proton.me
                      </a>
                    </Typography>
                    <Divider />
                  </div>
                </form>
              </CardContent>
              <CardActions
                style={{ background: theme.palette.secondary.main, height: 64 }}
              >
                <Button
                  style={{ color: theme.palette.common.white, fontWeight: 700 }}
                  onClick={contact}
                >
                  送信
                </Button>
              </CardActions>
            </React.Fragment>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
}
