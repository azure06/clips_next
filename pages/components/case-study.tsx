import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from '@material-ui/lab';
import { Avatar, Button, CardActions, CardHeader } from '@material-ui/core';

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

export function CaseStudy(props: unknown): JSX.Element {
  const classes = useStyles();

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
      <Typography
        variant="body1"
        style={{ padding: '8px 16px', fontWeight: 200 }}
      >
        Flavia Agapetos used to spend hours chasing documents with the list of
        addresses she was looking for.
      </Typography>
      <CardContent style={{ padding: '8px 16px' }}>
        {
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        }
        <Typography variant="h6" style={{ padding: '16px', fontWeight: 700 }}>
          SOLUTION
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: '8px 16px', fontWeight: 200 }}
        >
          Flavia installed Clips to save the clipboard history. Now she collects
          the list of addresses instantly.
        </Typography>
        <Typography variant="h6" style={{ padding: '16px', fontWeight: 700 }}>
          IMPACT
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: '8px 16px', fontWeight: 200 }}
        >
          By using Clips Flavia was able to finish her work 8 times faster than
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
          href="/download"
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
