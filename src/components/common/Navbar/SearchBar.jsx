import React from 'react';
import {useSearch} from './useSearch';


export function SearchBar() {
  const { searchTerm, handleSearchChange, handleSubmit } = useSearch();

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}


