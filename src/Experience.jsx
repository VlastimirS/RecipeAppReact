import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipe from "./pages/AddRecipe";
import NotFound from "./pages/NotFound";

export default function Experience() {
  return (
    <> 
      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route path="/addrecipe" element={< AddRecipe />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
