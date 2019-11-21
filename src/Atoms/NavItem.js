import React from 'react';


class NavItem extends React.Component {
  render() {
    return (
      <li className="kt-menu__item  kt-menu__item--here" aria-haspopup="true">
        <a href={this.props.href} className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-text">{this.props.name}</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
      </li>
    )
  }
}

export default NavItem;