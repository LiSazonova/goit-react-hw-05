const SearchBar = ({ query, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
