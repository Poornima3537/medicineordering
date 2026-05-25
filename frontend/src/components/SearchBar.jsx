function SearchBar({
  search,
  handleSearch,
}) {

  return (

    <input
      type="text"
      className="form-control"
      placeholder="Search Medicines..."
      value={search}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;