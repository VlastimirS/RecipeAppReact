import React, { useEffect, useState, useContext } from "react";
import { Result } from "./Result";
import { selectedContext } from "./HomePage";
import {
  IoRestaurantOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

export const SearchResult = ({ res }) => {
  const { page, setPage, spinner } = useContext(selectedContext);
  const [newRes, setNewRes] = useState([]);
  let numPage;

  if (res) {
    // Check total pages ( 10result/page)
    numPage = Math.floor(1 + res.data.recipes.length / 10);
  }

  useEffect(() => {
    // Create a new Results that contain 10 result depend on "page"
    if (res) {
      const start = (page - 1) * 10;
      const end = page * 10;
      setNewRes(res.data.recipes.slice(start, end));
    }
  }, [res, page]);

  return (
    <div className="search-results">
      {spinner.search ? (
        <div className="spinner">
          <IoRestaurantOutline />
        </div>
      ) : (
        <ul className="results">
          {newRes ? (
            newRes.map((rec, i) => <Result key={i} data={rec} />)
          ) : (
            <></>
          )}
        </ul>
      )}

      <div className="pagination">
        {page !== 1 ? (
          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="btn--inline pagination__btn--prev"
          >
            <IoArrowBackOutline />
            <span>{`Page ${page - 1}`}</span>
          </button>
        ) : (
          ""
        )}
        {page !== numPage && numPage ? (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="btn--inline pagination__btn--next"
          >
            <span>{`Page ${page + 1}`}</span>
            <IoArrowForwardOutline />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
