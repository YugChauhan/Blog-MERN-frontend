import React from 'react'
import SearchResults from './SearchResult'

function PostDetails() {
  const searchResults = [
    {
      title: 'Result 1',
      description: 'Description for Result 1',
      // Add more fields as needed
    },
    {
      title: 'Result 2',
      description: 'Description for Result 2',
      // Add more fields as needed
    },
    // Add more results here
  ];

  return (
    <div>
      <SearchResults results={searchResults} />
    </div>
  );
};


export default PostDetails