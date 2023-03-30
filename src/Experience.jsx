import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import SearchResults from "./components/SearchResults";
import AddRecipe from "./pages/AddRecipe";

export default function Experience() {
  return (
    <> 
      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route path="/addrecipe" element={< AddRecipe />}/>
      </Routes>
    </>
  );
}
