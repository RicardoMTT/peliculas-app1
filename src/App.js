import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      {" "}
      <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
          {/* <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link> */}
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route>
            {/* <Route path="/users">users</Route> */}
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>{" "}
      </Router>
    </div>
  );
}

export default App;
