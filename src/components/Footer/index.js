import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';

const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "90px",
    backgroundColor: "#3f51b5"
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction label="GitHub" href="https://github.com/saul10huerta" target="_blank" rel="noreferrer" icon={<GitHubIcon fontSize="Large"/>} />
      <BottomNavigationAction label="LinkedIn" href="https://www.linkedin.com/in/saul10huerta/" target="_blank" rel="noreferrer" icon={<LinkedInIcon fontSize="Large"/>} />
      <BottomNavigationAction label="StackOverflow" href="https://stackoverflow.com/users/12970784/saul10huerta?tab=profile" target="_blank" rel="noreferrer" icon={<ReorderSharpIcon fontSize="Large"/>} />
    </BottomNavigation>
  );
}
