import React, { useContext } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { selectedContext } from "./HomePage";
import { Result } from "./Result";

export const Bookmark = () => {
  const { bookmarked } = useContext(selectedContext);
  return (
    <>
      <li className="nav__item">
        <button className="nav__btn nav__btn--bookmarks">
          <IoBookmarkOutline />
          <span>Bookmarks</span>
        </button>
        <div className="bookmarks">
          <ul className="bookmarks__list">
            {bookmarked.map((mark, i) => {
              return <Result key={i} data={mark.recipe} />;
            })}
          </ul>
        </div>
      </li>
    </>
  );
};
