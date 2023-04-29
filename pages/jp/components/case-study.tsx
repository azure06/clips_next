import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from '@material-ui/lab';
import { Avatar, Button, CardActions, CardHeader } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.common.white,
    },
    media: {
      height: 10,
      backgroundColor: theme.palette.primary.main,
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function CaseStudy(props: unknown): JSX.Element {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.card} elevation={24}>
      {<Skeleton animation="wave" variant="rect" className={classes.media} />}
      <CardHeader
        avatar={<Avatar className={classes.avatar}>F</Avatar>}
        action={null}
        color="primary"
        title="フラビア・アガペトスの"
        subheader="事例紹介"
      />
      <CardContent style={{ padding: '8px 16px' }}>
        <Typography
          variant="body1"
          style={{ padding: '16px', fontWeight: 500 }}
        >
          フラビア・アガペトスは、毎日何時間もかけて、住所録の書類を探していたそうです。
        </Typography>
        <Typography variant="h6" style={{ padding: '16px', fontWeight: 700 }}>
          解決方法
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: '8px 16px', fontWeight: 500 }}
        >
          フラビアはClipsを導入し、顧客の住所を直接クリイプボードに保存するようになりました。
          以前まで何時間もかけて探していたのが嘘のようです。
        </Typography>
        <Typography variant="h6" style={{ padding: '16px', fontWeight: 700 }}>
          メリット
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: '8px 16px', fontWeight: 500 }}
        >
          Clipsを使うことでフラビアは以前の8倍の速さで仕事を終わらせることができました。
        </Typography>
      </CardContent>
      <CardActions
        style={{ display: 'flex', justifyContent: 'center', padding: 25 }}
      >
        <Button
          color="primary"
          variant="contained"
          disableElevation
          onClick={e =>
            router.push({
              pathname: '/download',
            })
          }
          style={{ boxShadow: '0 3px 8px 1px rgba(0,91,255, .3)' }}
        >
          <Typography
            variant="body2"
            style={{ fontWeight: 700, fontSize: '0.7rem', padding: '5px 10px' }}
          >
            Clipsをダウンロード
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
