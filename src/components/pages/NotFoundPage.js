import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <section>
      <h3>Error 404</h3>
      <p>The requested page does not seem to exist.</p>
      <p><Link to='/'>&laquo; Go Back Home</Link></p>
    </section>
  )
}
