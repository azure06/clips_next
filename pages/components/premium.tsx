import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from '@material-ui/lab';
import { Button, CardActions } from '@material-ui/core';
import { paletteLight } from '../../src/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 245,
      backgroundColor: theme.palette.common.white,
    },
    media: {
      height: 10,
      backgroundColor: theme.palette.primary.main,
    },
  })
);

function Media(props: unknown) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={24}>
      {<Skeleton animation="wave" variant="rect" className={classes.media} />}
      <Typography variant="h5" style={{ padding: '8px 16px', fontWeight: 700 }}>
        Product Edition
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
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          href="/premium"
        >
          <Typography
            variant="body2"
            style={{ fontWeight: 700, fontSize: '0.7rem', padding: '5px 10px' }}
          >
            Get Premium
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export function Premium(): JSX.Element {
  return <Media />;
}