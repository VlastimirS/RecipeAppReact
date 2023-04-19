import React, { useEffect, useState, createContext } from "react";
import { Navbar } from "./Navbar";
import { Recipe } from "./Recipe";
import { SearchResult } from "./SearchResult";

export const selectedContext = createContext();
export const HomePage = () => {
  // const [data, setData] = useState("");
  const [results, setResults] = useState();

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState();
  const [bookmarked, setBookmarked] = useState(
    localStorage.getItem("bookmarked")
      ? JSON.parse(localStorage.getItem("bookmarked"))
      : []
  );
  const [openModal, setOpenModal] = useState(false);
  const [recipeCreated, setRecipeCreated] = useState();
  const [spinner, setSpinner] = useState({
    search: false,
    recipe: false,
    modal: false,
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
    openModal,
    setOpenModal,
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
    // Auto close modal when updated data
    // setTimeout(() => {
    //   setOpenModal((prev) => {
    //     return !prev;
    //   });
    // }, 800);
  }, [recipeCreated]);

  return (
    <selectedContext.Provider value={value}>
      <div className="container">
        <Navbar />
        <SearchResult res={results} />
        <Recipe />
      </div>
    </selectedContext.Provider>
  );
};
