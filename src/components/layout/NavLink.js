import React, { Component } from 'react';
import { Link } from 'react-router';

const ACTIVE_CLASSNAME = 'active';

class NavLink extends Component {
  render(){
    const isActive = this.context.router.isActive(this.props.to, true);
    const className = isActive ? ACTIVE_CLASSNAME : '';

    return (
      <li className={className}>
        <Link {...this.props} />
      </li>
    )
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object
};

export default NavLink;
