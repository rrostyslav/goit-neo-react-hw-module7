import { useEffect, useState } from 'react';

const useSearch = (data, searchBy) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      searchBy(item).toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setFiltered(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- to not memoize `searchBy`
  }, [searchQuery, data]);

  return {
    searchQuery,
    setSearchQuery,
    filtered,
    setFiltered,
    isSearchMode: searchQuery.length > 0 || filtered.length > 0,
  };
};

export default useSearch;
