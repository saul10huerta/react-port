import { Grid } from '@material-ui/core';
import React from 'react';
import projectList from  '../ProjectList/index';
import MediaCard from "../ProjectList/projectsCard";

const Project = () => {
    const getProjectCards = (projectsObj) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard { ...projectsObj } />
        </Grid>
      );
    };
    return (
      <Grid container spacing={4}>
          {projectList.map(projectsObj => getProjectCards(projectsObj))}
      </Grid>
      
  );
}
export default Project;