import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";
import useDebounce from "../hooks/useDebouce";
import useQuery from "../hooks/useQuery";
function LandingPage() {
  const query = useQuery();
  const search = query.get("search"); //Escycha cualquier cambio de esa url
  const debouncedSearch = useDebounce(search, 600);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}

export default LandingPage;
