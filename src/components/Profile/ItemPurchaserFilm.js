import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "1rem auto",
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.urlImg}
          title={props.EN_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.EN_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.VN_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Link to={`/edit-film/${props.id_phim}`} className={classes.link}> */}
          <Button variant="contained" size="small" color="secondary">
            Edit
          </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}
