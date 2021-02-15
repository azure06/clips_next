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
        title="Flavia Agapetos"
        subheader="CASE STUDY"
      />
      <CardContent style={{ padding: '8px 16px' }}>
        <Typography
          variant="body1"
          style={{ padding: '16px', fontWeight: 500 }}
        >
          Flavia Agapetos used to spend hours every day searching through her
          documents for lists of addresses.
        </Typography>
        <Typography variant="h6" style={{ padding: '16px', fontWeight: 700 }}>
          SOLUTION
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: '8px 16px', fontWeight: 500 }}
        >
          Flavia installed Clips to begin saving her clients’ addresses directly
          into her clipboard history. Her hours of searching are now a thing of
          the past.
        </Typography>
        <Typography variant="h6" style={{ padding: '16px', fontWeight: 700 }}>
          IMPACT
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: '8px 16px', fontWeight: 500 }}
        >
          By using Clips Flavia was able to finish her work eight times faster than
          usual.
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
            Download Clips
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
