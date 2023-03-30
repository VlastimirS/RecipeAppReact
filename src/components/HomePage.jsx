import Navbar from "./Navbar";
import Recipe from "./Recipe";
import SearchResults from "./SearchResults";

export default function HomePage() {
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
