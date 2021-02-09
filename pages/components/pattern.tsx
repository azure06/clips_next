import { fade, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { paletteLight } from '../../src/theme';

const baseHeight = 950;

const useStyles = makeStyles(theme => ({
  main: {
    left: '0',
    width: '100%',
    height: baseHeight,
    background: theme.palette.background.paper,
    position: 'relative',
  },
  block: {
    top: baseHeight - 250,
    right: '0',
    width: '50vw',
    height: '250px',
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      visibility: 'hidden',
    },
  },
  blockShadow: {
    top: baseHeight,
    right: '0',
    width: '25vw',
    height: '125px',
    position: 'absolute',
  },
  blockAnimation: {
    animation: `$animationEffect 30000ms ${theme.transitions.easing.easeInOut} infinite`,
  },
  '@keyframes animationEffect': {
    '0%': {
      background: fade(theme.palette.secondary.main, 0.25),
    },
    '12.5%': {
      background: fade(theme.palette.secondary.main, 0.25),
    },
    '25%': {
      background: fade(theme.palette.primary.main, 0.25),
    },
    '37.5%': {
      background: fade(theme.palette.primary.main, 0.25),
    },
    '50%': {
      background: fade(paletteLight.redFire, 0.25),
    },
    '62.5%': {
      background: fade(paletteLight.redFire, 0.25),
    },
    '75%': {
      background: fade(paletteLight.yellowCanary, 0.25),
    },
    '87%': {
      background: fade(paletteLight.yellowCanary, 0.25),
    },
    '100%': {
      background: fade(theme.palette.secondary.main, 0.25),
    },
  },
  blockShadowAnimation: {
    animation: `$animationEffect2 30000ms ${theme.transitions.easing.easeInOut} infinite`,
  },
  '@keyframes animationEffect2': {
    '0%': {
      background: fade(theme.palette.secondary.main, 0.1),
    },
    '12.5%': {
      background: fade(theme.palette.secondary.main, 0.1),
    },
    '25%': {
      background: fade(theme.palette.primary.main, 0.1),
    },
    '37.5%': {
      background: fade(theme.palette.primary.main, 0.1),
    },
    '50%': {
      background: fade(paletteLight.redFire, 0.1),
    },
    '62.5%': {
      background: fade(paletteLight.redFire, 0.1),
    },
    '75%': {
      background: fade(paletteLight.yellowCanary, 0.1),
    },
    '87%': {
      background: fade(paletteLight.yellowCanary, 0.1),
    },
    '100%': {
      background: fade(theme.palette.secondary.main, 0.1),
    },
  },
}));

export function Pattern(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={clsx(classes.block, classes.blockAnimation)}></div>
      <div
        className={clsx(classes.blockShadow, classes.blockShadowAnimation)}
      ></div>
    </div>
  );
}
