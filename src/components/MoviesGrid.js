import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useLocation } from "react-router";
import useQuery from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";

function MoviesGrid() {
  // let movies = [];
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const query = useQuery();
  const search = query.get("search");
  useEffect(() => {
    const searchUrl = search
      ? "  https://api.themoviedb.org/3/search/movie?api_key=4e3c2742d7cac62ecffb820ccdd05d83&language=en-US&page=" +
        page +
        "&include_adult=false&query=" +
        search
      : "https://api.themoviedb.org/3/discover/movie?api_key=4e3c2742d7cac62ecffb820ccdd05d83&page=" +
        page;
    return [
      fetch(searchUrl)
        .then((result) => result.json())
        .then((data) => {
          setIsLoading(false);
          setHasMore(data.page < data.total_pages);
          setmovies((prevMovies) => prevMovies.concat(data.results));
        }),
    ];
  }, [search, page]);
  // if (isLoading) {
  //   return <Spinner />;
  // }

  if (movies.length == 0) {
    return <Empty />;
  }
  console.log(movies);
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={() => setPage((prePage) => prePage + 1)}
      hasMore={true}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default MoviesGrid;
