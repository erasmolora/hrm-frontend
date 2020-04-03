import React from 'react';


class SubHeader extends React.Component {
  render() {
    return (
      <div className="kt-subheader   kt-grid__item" id="kt_subheader">
        <div className="kt-container ">
          <div className="kt-subheader__main">
            <h3 className="kt-subheader__title">

                            Alerts
              {' '}
            </h3>

            <span className="kt-subheader__separator kt-hidden" />
            <div className="kt-subheader__breadcrumbs">
              <a href="#" className="kt-subheader__breadcrumbs-home"><i className="flaticon2-shelter" /></a>
              <span className="kt-subheader__breadcrumbs-separator" />
              <a href="" className="kt-subheader__breadcrumbs-link">
                                Components
                {' '}
              </a>
              <span className="kt-subheader__breadcrumbs-separator" />
              <a href="" className="kt-subheader__breadcrumbs-link">
                                Base
                {' '}
              </a>
              <span className="kt-subheader__breadcrumbs-separator" />
              <a href="" className="kt-subheader__breadcrumbs-link">
                                Alerts
                {' '}
              </a>
              <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span>
            </div>
          </div>
          <div className="kt-subheader__toolbar">
            <div className="kt-subheader__wrapper">
              <a href="#" className="btn kt-subheader__btn-primary">
                                Actions &nbsp;
                <i className="flaticon2-calendar-1" />
              </a>

              <div className="dropdown dropdown-inline" data-toggle="kt-tooltip" title="" data-placement="left" data-original-title="Quick actions">
                <a href="#" className="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="flaticon2-plus" />
                </a>
                <div className="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
                  <ul className="kt-nav">
                    <li className="kt-nav__head">
                                            Add anything or jump to:
                      <i className="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more..." />
                    </li>
                    <li className="kt-nav__separator" />
                    <li className="kt-nav__item">
                      <a href="#" className="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-drop"></i>
                                                <span class="kt-nav__link-text">Order</span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-calendar-8"></i>
                                                <span class="kt-nav__link-text">Ticket</span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-telegram-logo"></i>
                                                <span class="kt-nav__link-text">Goal</span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-new-email"></i>
                                                <span class="kt-nav__link-text">Support Case</span>
                                                <span class="kt-nav__link-badge">
                                                    <span class="kt-badge kt-badge--success">5</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__separator"></li>
                                        <li class="kt-nav__foot">
                                            <a class="btn btn-label-brand btn-bold btn-sm" href="#">Upgrade plan</a>
                                            <a class="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more...">Learn more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default SubHeader;