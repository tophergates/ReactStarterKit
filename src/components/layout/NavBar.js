import React from 'react';

import NavLink from './NavLink';

export default () => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/redux'>Redux Example</NavLink>
      </ul>
    </nav>
  )
}
