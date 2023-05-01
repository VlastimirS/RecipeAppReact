import React, { useEffect, useState, useContext } from "react";
import { Bookmark } from "./Bookmark";
import { selectedContext } from "./HomePage";
import { IoSearchOutline, IoAddCircleOutline } from "react-icons/io5";

export const Navbar = () => {
  const { setPage, setResults, beginSpinner, stopSpinner } =
    useContext(selectedContext);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (!searchValue && searchValue !== "") return;
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchValue}&key=1979b5e5-9bcd-4fe8-a64a-95767347a842
      `
    ).then((res) =>
      res
        .json()
        .then((re) => {
          setResults(re);
          stopSpinner("search");
          setSearchValue(undefined);
          if (re.status === "fail") throw new Error(`${re.message}`);
        })
        .catch((err) => alert(`We have some error with server`))
    );

    setSearch("");
  }, [searchValue, setResults]);

  return (
    <header className="header">
      <img src="../assets/logo.png" alt="Logo" className="header__logo" />
      <form className="search">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setSearchValue(search); //change searchvalue to make a api call to get recipes.
            setPage(1); // set page to 1
            beginSpinner("search"); //spin effect
          }}
          className="btn search__btn"
        >
          <IoSearchOutline />
          <span>Search</span>
        </button>
      </form>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <IoAddCircleOutline />
              <span>Add recipe</span>
            </button>
          </li>
          <Bookmark />
        </ul>
      </nav>
    </header>
  );
};
