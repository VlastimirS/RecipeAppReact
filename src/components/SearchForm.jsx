export default function SearchForm() {
  return (
    <>
      <form className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button className="btn search__btn">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}
