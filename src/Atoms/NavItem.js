import React from 'react';
import { Link } from 'react-router-dom';


class NavItem extends React.Component {
  render() {
    return (
      <li className="kt-menu__item" aria-haspopup="true">
        <Link className="kt-menu__link kt-menu__toggle" to={this.props.href }>
          <span className="kt-menu__link-text">{this.props.name}</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </Link>
      </li>
    )
  }
}

export default NavItem;