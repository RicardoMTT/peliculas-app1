import { useParams } from "react-router";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setmovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => [
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=4e3c2742d7cac62ecffb820ccdd05d83"
      )
        .then((result) => result.json())
        .then((data) => {
          console.log("data", data);
          setIsLoading(false);
          setmovie(data);
        })
        .catch((err) => {
          console.log("err", err);
        }),
    ],
    [movieId]
  );
  if (isLoading) {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    <div>
      lorem10 <Spinner />;
    </div>;
  }
  if (!movie) {
    console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    return null;
  }

  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3k5ZKBH_i24u_n1S00omphZiKiR1tyEmRg&usqp=CAU";

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genre:</strong>{" "}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
