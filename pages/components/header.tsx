import {
  AppBar,
  Button,
  ButtonBase,
  fade,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type DefaultColors =
  | 'inherit'
  | 'transparent'
  | 'default'
  | 'primary'
  | 'secondary';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children?: React.ReactElement;
  headerColor?: DefaultColors | string;
}

function isDefaultColor(arg?: string): arg is DefaultColors {
  switch (arg) {
    case 'inherit':
      return true;
    case 'transparent':
      return true;
    case 'default':
      return true;
    case 'primary':
      return true;
    case 'secondary':
      return true;
    default:
      return false;
  }
}

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: '35px',
    minWidth: 100,
  },
  toolbarBtn: {
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      height: '54px',
    },
    height: '64px',
    padding: '0 15px',
    borderRadius: 0,
  },
  hideSmDown: {
    [theme.breakpoints.down('sm')]: { visibility: 'hidden' },
  },
}));

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export function Header(props: Props): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          color={
            isDefaultColor(props.headerColor) ? props.headerColor : 'default'
          }
          style={
            isDefaultColor(props.headerColor)
              ? {}
              : { backgroundColor: props.headerColor }
          }
        >
          <Toolbar>
            <ButtonBase style={{ color: theme.palette.common.white }} href="/">
              <div className={classes.logo}>
                <Image src="/logo.svg" alt="Clips" width="100" height="32" />
              </div>
            </ButtonBase>

            <React.Fragment>
              <Button
                color={router.pathname === '/features' ? 'primary' : 'inherit'}
                disableElevation
                className={classes.toolbarBtn}
                href="/features"
              >
                Features
              </Button>
              <Button
                color={router.pathname === '/premium' ? 'primary' : 'inherit'}
                disableElevation
                className={classes.toolbarBtn}
                href="/premium"
              >
                Premium
              </Button>
              <Button
                color={router.pathname === '/blog' ? 'primary' : 'inherit'}
                disableElevation
                className={classes.toolbarBtn}
                href="/blog"
              >
                Blog
              </Button>
              <Button
                color={router.pathname === '/about' ? 'primary' : 'inherit'}
                disableElevation
                className={classes.toolbarBtn}
                href="/about"
              >
                About
              </Button>
              {/* Space */}
              <Typography variant="h6" className={classes.title}></Typography>
              {/* Space */}
              <Button
                color="inherit"
                disableElevation
                className={classes.toolbarBtn}
                target="_blank"
                href="https://github.com/azure06/clips"
              >
                GitHub
              </Button>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Typography
        variant="subtitle2"
        style={{
          position: 'absolute',
          top: 64,
          height: 48,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.secondary.main,
          color: fade(theme.palette.common.white, 0.75),
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: fade(theme.palette.common.white, 0.9),
          }}
        >
          {'Black Lives Matter. '}
        </span>{' '}
        &nbsp; Support the Equal Justice Initiative.
      </Typography>
    </React.Fragment>
  );
}
