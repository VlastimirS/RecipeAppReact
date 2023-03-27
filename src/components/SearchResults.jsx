export default function SearchResults() {
  return (
    <>
      <ul className="results">
        <li className="preview">
          <a className="preview__link preview__link--active" href="#23456">
            <figure className="preview__fig">
              <img src="" alt="Test" />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">Pasta with Tomato Cream ...</h4>
              <p className="preview__publisher">The Pioneer Woman</p>
              <div className="preview__user-generated"></div>
            </div>
          </a>
        </li>
      </ul>

      <div className="pagination">
        <button className="btn--inline pagination__btn--prev">
          <span>Page 1</span>
        </button>
        <button className="btn--inline pagination__btn--next">
          <span>Page 3</span>
        </button>
      </div>
    </>
  );
}
