import { useState } from 'react';

function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: 여기에 검색어를 처리하는 로직을 추가하세요.
    console.log(searchTerm);
  }

  return {
    searchTerm,
    handleSearchChange,
    handleSubmit,
  };
}

export default useSearch;
