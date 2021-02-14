import {
  Avatar,
  Card,
  CardContent,
  createStyles,
  Divider,
  fade,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core';
import {
  Laptop,
  FolderShared,
  AccountCircle,
  ViewList,
  Search,
  Sync,
  MoreVert,
  DeleteOutlined,
  Star,
} from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { paletteLight } from '../../src/theme';

const drawerWidth = 54;
const toolbarHeight = 48;
const searchbarHeight = 48;

const borderColor = (theme: Theme) => fade(theme.palette.common.white, 0.25);
const shadow24 = (color: string) =>
  `0px 11px 15px -7px ${fade(color, 0.5)}, 0px 24px 38px 3px ${fade(
    color,
    0.35
  )}, 0px 9px 46px 8px ${fade(color, 0.35)}`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    animationColor: {
      animation: `$animationEffect 30000ms ${theme.transitions.easing.easeInOut} infinite`,
    },
    '@keyframes animationEffect': {
      '0%': {
        color: theme.palette.secondary.main,
      },
      '12.5%': {
        color: theme.palette.secondary.main,
      },
      '25%': {
        color: theme.palette.primary.main,
      },
      '37.5%': {
        color: theme.palette.primary.main,
      },
      '50%': {
        color: paletteLight.redFire,
      },
      '62.5%': {
        color: paletteLight.redFire,
      },
      '75%': {
        color: paletteLight.yellowCanary,
      },
      '87%': {
        color: paletteLight.yellowCanary,
      },
      '100%': {
        color: theme.palette.secondary.main,
      },
    },
    animationBackground: {
      animation: `$animationEffect2 30000ms ${theme.transitions.easing.easeInOut} infinite`,
    },
    '@keyframes animationEffect2': {
      '0%': {
        background: theme.palette.secondary.main,
        boxShadow: shadow24(theme.palette.secondary.main),
      },
      '12.5%': {
        background: theme.palette.secondary.main,
        boxShadow: shadow24(theme.palette.secondary.main),
      },
      '25%': {
        background: theme.palette.primary.main,
        boxShadow: shadow24(theme.palette.primary.main),
      },
      '37.5%': {
        background: theme.palette.primary.main,
        boxShadow: shadow24(theme.palette.primary.main),
      },
      '50%': {
        background: paletteLight.redFire,
        boxShadow: shadow24(paletteLight.redFire),
      },
      '62.5%': {
        background: paletteLight.redFire,
        boxShadow: shadow24(paletteLight.redFire),
      },
      '75%': {
        background: paletteLight.yellowCanary,
        boxShadow: shadow24(paletteLight.yellowCanary),
      },
      '87%': {
        background: paletteLight.yellowCanary,
        boxShadow: shadow24(paletteLight.yellowCanary),
      },
      '100%': {
        background: theme.palette.secondary.main,
        boxShadow: shadow24(theme.palette.secondary.main),
      },
    },
    //
    root: {
      position: 'relative',
      display: 'flex',
      maxWidth: '700px',
      minHeight: '380px',
      maxHeight: '380px',
      zIndex: 10,
      padding: '0',
    },
    avatar: {
      backgroundColor: theme.palette.common.white,
      width: '35px',
      height: '35px',
    },
    icon: {
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.05),
      },
    },
    divider: {
      background: borderColor(theme),
      width: '75%',
      marginTop: '15px',
      padding: '0 5px',
    },
    cardContent: {
      padding: '0 !important',
    },
    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    sideContainer: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    drawer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: `${drawerWidth}px`,
      height: '100%',
      padding: '10px 0',
      borderRight: `1px solid ${borderColor(theme)}`,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      height: `${toolbarHeight}px`,
      justifyContent: 'space-between',
      borderBottom: `1px solid ${borderColor(theme)}`,
      color: theme.palette.common.white,
      padding: '0 15px',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'flex-end',
      //   padding: theme.spacing(0, 1),
    },
    searchbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: `${searchbarHeight}px`,
      borderTop: `1px solid ${borderColor(theme)}`,
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingTop: '12px',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      color: theme.palette.common.white,
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      height: '38px',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: theme.palette.common.white,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
      height: `calc(100% - ${toolbarHeight + searchbarHeight}px)`,
    },
    listRoot: {
      color: fade(theme.palette.common.white, 0.7),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
  })
);

export function Clips(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={clsx(classes.root, classes.animationBackground)}>
      <CardContent
        className={clsx(classes.cardContent, classes.animationBackground)}
      >
        <div className={classes.container}>
          <div className={classes.drawer}>
            <Avatar
              className={clsx(classes.avatar, classes.animationColor)}
              sizes="small"
              src="/person.jpg"
            >
              α
            </Avatar>
            <Divider className={classes.divider} />
            <IconButton className={classes.icon} aria-label="Laptop">
              <Laptop />
            </IconButton>
            <IconButton className={classes.icon} aria-label="Google Drive">
              <FolderShared />
            </IconButton>
            <IconButton className={classes.icon} aria-label="Google Drive">
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sideContainer}>
            <div className={classes.toolbar}>
              <div>
                <div style={{ fontWeight: 700 }}>CLIPS</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {' '}
                  February 09, 2021{' '}
                </div>
              </div>
              <div style={{ fontWeight: 900, fontSize: '12px' }}>
                15 <span style={{ fontWeight: 500 }}>Items</span>
              </div>
            </div>
            <div className={classes.content}>
              <main>
                <List component="nav" aria-label="contacts">
                  <ListItem
                    button
                    className={[classes.icon, classes.listRoot].join(' ')}
                  >
                    <ListItemText>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '12px',
                          color: theme.palette.common.white,
                        }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                      </div>
                      <div
                        style={{
                          color: fade(theme.palette.common.white, 0.7),
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        a few seconds ago
                      </div>
                    </ListItemText>
                    <IconButton
                      className={classes.icon}
                      aria-label="Google Drive"
                    >
                      <Star />
                    </IconButton>
                  </ListItem>
                  <ListItem
                    button
                    className={[classes.icon, classes.listRoot].join(' ')}
                  >
                    <ListItemText>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '12px',
                          color: theme.palette.common.white,
                        }}
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae
                      </div>
                      <div
                        style={{
                          color: fade(theme.palette.common.white, 0.7),
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        a few seconds ago
                      </div>
                    </ListItemText>
                    <IconButton
                      className={classes.icon}
                      aria-label="Google Drive"
                    >
                      <Star />
                    </IconButton>
                  </ListItem>
                </List>
              </main>
            </div>
            <div className={classes.searchbar}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div>
                <IconButton className={classes.icon} aria-label="ViewList">
                  <ViewList />
                </IconButton>
                <IconButton className={classes.icon} aria-label="Delete">
                  <DeleteOutlined />
                </IconButton>
                <IconButton className={classes.icon} aria-label="Sync">
                  <Sync />
                </IconButton>
                <IconButton className={classes.icon} aria-label="More Vert">
                  <MoreVert />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
