import React, { useEffect, useState, createContext } from "react";
import { Navbar } from "./Navbar";
import { Recipe } from "./Recipe";
import { SearchResult } from "./SearchResult";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const selectedContext = createContext();
export const HomePage = () => {
  const [results, setResults] = useState();

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState();
  const [bookmarked, setBookmarked] = useState(
    localStorage.getItem("bookmarked")
      ? JSON.parse(localStorage.getItem("bookmarked"))
      : []
  );

  const [recipeCreated, setRecipeCreated] = useState();
  const [spinner, setSpinner] = useState({
    search: false,
    recipe: false,
  });

  const beginSpinner = (view) => {
    setSpinner((prev) => {
      return { ...prev, [view]: true };
    });
  };
  const stopSpinner = (view) => {
    setSpinner((prev) => {
      return { ...prev, [view]: false };
    });
  };

  const value = {
    selected,
    setSelected,
    page,
    setPage,
    results,
    setResults,
    bookmarked,
    setBookmarked,
    recipeCreated,
    setRecipeCreated,
    spinner,
    beginSpinner,
    stopSpinner,
  };

  useEffect(() => {
    if (!recipeCreated) return;
    setBookmarked((prev) => [
      ...prev,
      { recipe: recipeCreated, id: recipeCreated.id },
    ]);
    setSelected(recipeCreated.id);
  }, [recipeCreated]);

  return (
    <selectedContext.Provider value={value}>
      <div className="container">
        <Navbar />
        <div className="container-main">
          <SearchResult res={results} />
          <Recipe />
        </div>
      </div>
    </selectedContext.Provider>
  );
};
