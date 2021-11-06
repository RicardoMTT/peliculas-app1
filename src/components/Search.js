import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useQuery from "../hooks/useQuery";
function Search() {
  const history = useHistory();

  const query = useQuery();
  const search = query.get("search");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}

export default Search;
