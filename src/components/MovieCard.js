import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3k5ZKBH_i24u_n1S00omphZiKiR1tyEmRg&usqp=CAU";
  return (
    <li className={styles.movieCard} key={movie.id}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt="Imagen"
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}

export default MovieCard;
