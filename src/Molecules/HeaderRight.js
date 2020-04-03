import React from 'react';
import TopBarWelcome from '../Atoms/TopBarWelcome';
import UserCardSkinLight from '../Atoms/UserCardSkinLight';



class HeaderRight extends React.Component {

    render() {
        return (
            <div className="kt-header__topbar kt-grid__item">
                <div className="kt-header__topbar-item kt-header__topbar-item--user">
                    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
                        <span className="kt-header__topbar-welcome kt-visible-desktop">Hi,</span>
                        <TopBarWelcome />
                        <img alt="Pic" src="./assets/media/users/300_21.jpg" />
                    </div>
                    <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
                        <UserCardSkinLight />
                        <div className="kt-notification">
                            <div className="kt-notification__custom kt-space-between">
                                <button className="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</button>
                                <a href="demo9/custom/user/login-v2.html" target="_blank" className="btn btn-clean btn-sm btn-bold">Upgrade Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kt-header__topbar-item" data-toggle="kt-tooltip" title="Quick panel" data-placement="top">
                    <div className="kt-header__topbar-wrapper">
                        <span className="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn"><i className="flaticon2-cube-1"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderRight;