import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded border border-line bg-base px-4 py-2 text-sm text-ink transition-all duration-300 placeholder:text-muted focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
