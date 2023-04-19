import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import NotFound from "./pages/NotFound";
import AddRecipe from "./pages/AddRecipe";

export default function Experience() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
