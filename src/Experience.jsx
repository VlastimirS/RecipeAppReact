import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import SearchResults from "./components/SearchResults";

export default function Experience() {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className="search-results">
          <SearchResults />
        </div>

        <div className="recipe">
          <Recipe />
        </div>
      </div>
    </>
  );
}
