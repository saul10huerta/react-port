import React from 'react';
import { Grid } from '@material-ui/core'
import Project from '../Project';


function Portfolio() {
    return (
        <Grid container direction="column">
            <Grid item><h1 id="about">Portfolio</h1></Grid>
            <Grid item container>
                <Grid item xs={0} sm={1}/>
                <Grid item xs={12} sm={10}>
                    <Project/>
                </Grid>
                <Grid item xs={0} sm={1}/>
            </Grid>
        </Grid>
    );
  }
  
  export default Portfolio;