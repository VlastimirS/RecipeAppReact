export default function SearchResults() {
  return (
    <>
      <ul className="results">
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
