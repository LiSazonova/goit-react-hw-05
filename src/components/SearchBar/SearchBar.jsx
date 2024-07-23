const SearchBar = ({ query, onSubmit, error }) => {
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SearchBar;
