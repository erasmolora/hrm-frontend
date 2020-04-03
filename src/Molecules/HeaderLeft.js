import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


export default function HeaderLeft() {
  const { url } = useRouteMatch();

  return (
    <div className="kt-header-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_header_menu_wrapper" style={{ opacity: 1 }}>
      <button className="kt-aside-toggler kt-aside-toggler--left" id="kt_aside_toggler"><span /></button>
      <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile ">
        <ul className="kt-menu__nav ">
          <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel">
            <Link to={`${url}/payroll`} className="kt-menu__link">
              <span className="kt-menu__link-text">Nomina</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
