import React, { useContext, useEffect, useState } from "react";
import { selectedContext } from "./HomePage";
import { Canvas } from "@react-three/fiber";
import Models from "../models";
import {
  IoBookmark,
  IoTimerOutline,
  IoPeopleOutline,
  IoBookmarkOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoPerson,
  IoCheckmarkOutline,
  IoRestaurantOutline,
  IoHeartOutline,
} from "react-icons/io5";

export const Recipe = () => {
  const {
    selected,
    setSelected,
    bookmarked,
    setBookmarked,
    beginSpinner,
    stopSpinner,
    spinner,
  } = useContext(selectedContext);
  const [recipe, setRecipe] = useState();
  const [serving, setServing] = useState("");
  const id = window.location.hash.slice(1);

  const check = bookmarked?.some((marked) => marked.recipe.id === id);

  useEffect(() => {
    if (!selected) setSelected(id);
  }, [selected, setSelected, id]);

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
  }, [bookmarked]);

  useEffect(() => {
    if (!selected) return;
    beginSpinner("recipe");
    document.location.href = `/#${selected}`;
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${selected}?key=1979b5e5-9bcd-4fe8-a64a-95767347a842
      `
    ).then((res) =>
      res
        .json()
        .then((re) => {
          if (re.status === "fail") throw new Error(`${re.message}`);
          stopSpinner("recipe");
          setRecipe(re.data?.recipe);
          setServing(re.data.recipe?.servings);
        })
        .catch((err) => alert(`We have some error with sever`))
    );
  }, [selected]);

  return (
    <div className="recipe">
      {spinner.recipe ? (
        <div className="spinner">
          <IoRestaurantOutline />
        </div>
      ) : !recipe ? (
        <div className="message">
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 600,
              position: [-4, 3, 6],
            }}
          >
            <Models />
          </Canvas>
        </div>
      ) : (
        <>
          <figure className="recipe__fig">
            <img src={recipe.image_url} alt="Tomato" className="recipe__img" />
            <h1 className="recipe__title">
              <span>{recipe.title}</span>
            </h1>
          </figure>

          <div className="recipe__details">
            <div className="recipe__info">
              <IoTimerOutline className="recipe__info-icon" />
              <span className="recipe__info-data recipe__info-data--minutes">
                {recipe.cooking_time}
              </span>
              <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
              <IoPeopleOutline className="recipe__info-icon" />
              <span className="recipe__info-data recipe__info-data--people">
                {serving}
              </span>
              <span className="recipe__info-text">servings</span>

              <div className="recipe__info-buttons">
                <button
                  onClick={() => setServing(serving + 1)}
                  className="btn--tiny btn--increase-servings"
                >
                  <IoAddCircleOutline className="recipe__info-icon" />
                </button>
                <button
                  onClick={() => serving !== 1 && setServing(serving - 1)}
                  className="btn--tiny btn--increase-servings"
                >
                  <IoRemoveCircleOutline className="recipe__info-icon" />
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                // ADD and REmove bookmark
                if (!check) {
                  setBookmarked((prev) => {
                    return [...prev, { recipe, id: recipe.id }];
                  });
                } else {
                  setBookmarked((prev) => {
                    return prev.filter((pre) => pre.id !== id);
                  });
                }
              }}
              className="btn--round"
            >
              {check ? (
                <IoBookmark className="recipe__info-icon__bookmark"></IoBookmark>
              ) : (
                <IoBookmarkOutline className="recipe__info-icon__bookmark" />
              )}
            </button>
          </div>
          <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
              {recipe.ingredients.map((ing, i) => {
                return (
                  <li className="recipe__ingredient" key={i}>
                    <IoCheckmarkOutline className="recipe__icon" />
                    <div className="recipe__quantity">
                      {ing.quantity
                        ? (ing.quantity * serving) / recipe.servings
                        : ""}
                    </div>
                    <div className="recipe__description">
                      <span className="recipe__unit"> {ing.unit}</span>{" "}
                      {ing.description}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <p className="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span className="recipe__publisher"> {recipe.publisher}</span>.
              Please check out directions at their website.
            </p>
            <a
              className="btn--small recipe__btn"
              href={recipe.source_url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Directions</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
};
