import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 240
    },
    cardContentBottom: {
      backgroundColor: "#bdbdbd"
    }
});

const MediaCard = props => {
  const classes = useStyles();
  const { name, image, weblink, githubrepo, date } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent className={classes.cardContentBottom}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardContentBottom}>
        <Button size="small" color="black" href={weblink}>
          Website Link
        </Button>
        <Button size="small" color="black" href={githubrepo}>
          GitHub Repo
        </Button>
      </CardActions>
    </Card>
    
  );
}

export default MediaCard;