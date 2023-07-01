import { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchAppBar from "./components/SearchAppBar";
import MovieContainer from "./components/MovieContainer";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?apikey=1c1d5ece";

const RANDOM_SEARCH = [
  "robin",
  "batman",
  "romance",
  "demon",
  "spiderman",
  "superman",
  "every",
  "love",
  "funny",
  "bond",
  "gun",
  "forever",
  "child",
  "zombie",
];

export default function App() {
  const [movies, setMovies] = useState([]);
  let isMounted = useRef(true);

  const searchMovies = async (movieTitle) => {
    var response = null;
    if (!movieTitle || movieTitle === "") {
      const random =
        RANDOM_SEARCH[Math.floor(Math.random() * RANDOM_SEARCH.length)];
      response = await fetch(`${API_URL}&s=${random}`);
    } else {
      response = await fetch(`${API_URL}&s=${movieTitle}`);
    }
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  const getMovieDetails = async (movieID) => {
    console.log(movieID);
    const response = await fetch(`${API_URL}&i=${movieID}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      searchMovies(
        RANDOM_SEARCH[Math.floor(Math.random() * RANDOM_SEARCH.length)]
      );
    }
  }, []);

  return (
    <>
      <SearchAppBar searchMovies={searchMovies} />
      <Box>
        {movies?.length > 0 ? (
          <Grid container padding={"5rem"} rowSpacing={5} columnSpacing={5}>
            {movies.map((movie, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                <MovieContainer
                  movie={movie}
                  getMovieDetails={getMovieDetails}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <h1>No movies found</h1>
          </Box>
        )}
      </Box>
    </>
  );
}
