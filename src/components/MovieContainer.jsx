import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function MovieContainer({ movie, getMovieDetails }) {
  return (
    <Card sx={{ width: "100" }} id={movie.imdbID}>
      <CardMedia
        sx={{ height: 500 }}
        image={movie.Poster}
        title={movie.Title}
      />
      <CardContent sx={{ height: 50 }}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", columnGap: 3 }}>
        <Typography size="small" color={"#1976d2"} fontWeight={500}>
          {movie.Year}
        </Typography>
        <Typography
          size="small"
          color={"#1976d2"}
          fontWeight={500}
          textTransform={"capitalize"}
        >
          {movie.Type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={(e) => {
            const movieID = e.target.parentElement.parentElement.id;
            getMovieDetails(movieID);
          }}
        >
          See more
        </Button>
      </CardActions>
    </Card>
  );
}

MovieContainer.propTypes = {
  movie: PropTypes.object,
  getMovieDetails: PropTypes.func,
};
