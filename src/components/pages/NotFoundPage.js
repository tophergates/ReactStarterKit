import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <section>
      <h3>Oh No!</h3>
      <p>The page you requested was not found.</p>
      <p><Link to='/'>Go Back Home</Link></p>
    </section>
  )
}
