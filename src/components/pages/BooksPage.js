import React from 'react';

import BookList from '../../containers/BookList';
import BookDetail from '../../containers/BookDetail';

export default () => {
  return (
    <article>
      <section>
        <h3>Redux Example</h3>
        <p>
          The following book list selector is an example of redux to illustrate
          sharing application state between container components.
        </p>
      </section>
      <section className='books'>
        <BookList />
        <BookDetail />
      </section>
    </article>
  )
}
