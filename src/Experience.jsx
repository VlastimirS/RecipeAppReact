import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import SearchResults from "./components/SearchResults";

export default function Experience() {

    return <>
        <div className="container bg-primary w-full rounded-r-xl bg-gray-100 overflow-hidden">
            <div className="">
                <div className="">
                    <Navbar />
                </div>
            </div>

            <div className="">
                <div className="">
                    <SearchResults />
                </div>
            </div>

            <div className="">
                <div className="">
                    <Recipe />
                </div>
            </div>
        </div>
    </>
}