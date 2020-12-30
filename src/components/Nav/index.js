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
                  <MenuItem onClick={() => handleMenuClick('/about')}>About Me</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/portfolio')}>Portfolio</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/resume')}>Resume</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/contact')}>Contact Me</MenuItem>
                </Menu>
                </>
                ): (
                    <div className={classes.NavOptions}>
                        <Button variant="contained" onClick={() => handleButtonClick('/about')}>About Me</Button>
                        <Button variant="contained" onClick={() => handleButtonClick('/portfolio')}>Portfolio</Button>
                        <Button variant="contained" onClick={() => handleButtonClick('/resume')}>Resume</Button>
                        <Button variant="contained" onClick={() => handleButtonClick('/contact')}>Contact</Button>
                    </div>
                )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Nav);
// import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import { Link } from 'react-router-dom';

// function Nav() {
//   return (
//     <header className="flex-row">
//         <h2 className="mx-3 my-2">
//             <Link to='/'>
//                 <a>Saul Huerta</a>
//             </Link>
//         </h2>
//         <nav>
//             <ul className="flex-row my-8">
//                 <Link to='/about'>
//                     <li><span>About Me</span></li>
//                 </Link>
//                 <Link to='/portafolio'>
//                     <li><span>Portafolio</span></li>
//                 </Link>
//                 <Link to='/contact'>
//                     <li><span>Contact</span></li>
//                 </Link>
//                 <Link to='/resume'>
//                     <li><span>Resume</span></li>
//                 </Link>
//             </ul>
//         </nav>
//     </header>
//   );
// }

// export default Nav;