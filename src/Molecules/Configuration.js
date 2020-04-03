import React from 'react';
// import NavItem from '../Atoms/NavItem';
import { Link } from 'react-router-dom';


class Configuration extends React.Component {
    render() {
        return (
        <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--rel kt-mkt-menu__item--open-dropdown enu__item--hover" data-ktmenu-submenu-toggle="click">
            <a  aria-haspopup="true"href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <span className="kt-menu__link-text">Configuración</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
                <div className="kt-menu__submenu  kt-menu__submenu--fixed kt-menu__submenu--left" style={{ width: "1000px" }}>
                    <div className="kt-menu__subnav">
                        <ul className="kt-menu__content">
                            <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle">
                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                    <span className="kt-menu__link-text">Evaluaciones</span>
                                    <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                </h3>
                                <ul className="kt-menu__inner">
                                    <li className="kt-menu__item " aria-haspopup="true">
                                        <Link to={'/rute'} className="kt-menu__link" >
                                            <i className="kt-menu__link-icon flaticon-map"></i>
                                            <span className="kt-menu__link-text">Rute</span>
                                        </Link>
                                    </li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon-user"></i><span className="kt-menu__link-text">HR Reports</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon-clipboard"></i><span className="kt-menu__link-text">IPO Reports</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon-graphic-1"></i><span className="kt-menu__link-text">Finance Margins</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon-graphic-2"></i><span className="kt-menu__link-text">Revenue Reports</span></a></li>
                                </ul>
                            </li>
                            <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle"><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Objetivos</span><i className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                                <ul className="kt-menu__inner">
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Coca Cola CRM</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Delta Airlines Booking Site</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Malibu Accounting</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Vineseed Website Rewamp</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Zircon Mobile App</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Mercury CMS</span></a></li>
                                </ul>
                            </li>
                            <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle"><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">HR Reports</span><i className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                                <ul className="kt-menu__inner">
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Staff Directory</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Client Directory</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Salary Reports</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Staff Payslips</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Corporate Expenses</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Project Expenses</span></a></li>
                                </ul>
                            </li>
                            <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle"><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Reporting Apps</span><i className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                                <ul className="kt-menu__inner">
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Report Adjusments</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Sources &amp; Mediums</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Reporting Settings</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Conversions</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Report Flows</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Audit &amp; Logs</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}

export default Configuration;