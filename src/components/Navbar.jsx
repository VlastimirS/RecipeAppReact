import SearchForm from "./SearchForm";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <img src="../assets/logo.png" alt="Logo" className="header__logo" />
        
        <SearchForm />

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__btn nav__btn--add-recipe">
                <span>Add recipe</span>
              </button>
            </li>
            <li className="nav__item">
              <button className="nav__btn nav__btn--bookmarks">
                <span>Bookmarks</span>
              </button>
              <div className="bookmarks">
                <ul className="bookmarks__list">
                  <div className="message">
                    <div>
                    </div>
                    <p>
                      No bookmarks yet. Find a nice recipe and bookmark it :)
                    </p>
                  </div>

                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
