import React from 'react';
import PageHeader from './PageHeader';
import BookRows from './BookRows';

function Home() {
  return (
    <div>
      <PageHeader />
      <h1>Books</h1>
      <BookRows />
    </div>
  );
}

export default Home;
