import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      [theme.breakpoints.down('xs')]: {
          flexGrow: 1
      }
  },
  NavOptions: {
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",

  },
  button: {
      color: "white",
      border: "none",

  }
}));

const Nav = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    };

    const menuItems = [
        {
            menuTitle: 'About',
            pageURL: '/about',
        },
        {
            menuTitle: 'Portfolio',
            pageURL: '/portfolio',
        },
        {
            menuTitle: 'Resume',
            pageURL: '/resume',
        },
        {
            menuTitle: 'Contact',
            pageURL: '/contact',
        },
    ];

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Saul Huerta
            </Typography>
                {isMobile ? (
                    <>
                    <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit"
                    onClick={handleMenu} 
                    aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    >
                        {menuItems.map(menuItem => {
                            const {menuTitle, pageURL} = menuItem;
                            return (
                                <MenuItem onClick={() => handleMenuClick(pageURL)}>{menuTitle}</MenuItem>
                            )
                        })}
                    </Menu>
                    </>
                    ): (
                        <div className={classes.NavOptions}>
                            {menuItems.map(menuItem => {
                            const {menuTitle, pageURL} = menuItem;
                            return (
                                <Button className={classes.button} onClick={() => handleButtonClick(pageURL)}>{menuTitle}</Button>
                            )
                            })}
                        </div>
                    )}
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default withRouter(Nav);