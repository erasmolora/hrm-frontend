import React from 'react';


class Rute extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-6">

                    <div className="kt-portlet kt-portlet--height-fluid">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h3 className="kt-portlet__head-title">Timeline v3</h3>
                            </div>
                        </div>
                        <div className="kt-portlet__body">
                            <div className="kt-scroll ps ps--active-y" data-scroll="true" data-height="380" data-mobile-height="300">

                                <div className="kt-timeline-v2">
                                    <div className="kt-timeline-v2__items  kt-padding-top-25 kt-padding-bottom-30">
                                        <div className="kt-timeline-v2__item">
                                            <span className="kt-timeline-v2__item-time">10:00</span>
                                            <div className="kt-timeline-v2__item-cricle">
                                                <i className="fa fa-genderless kt-font-danger"></i>
                                            </div>
                                            <div className="kt-timeline-v2__item-text  kt-padding-top-5">
                                                Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br />
                                                incididunt ut labore et dolore magna
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="ps__rail-x" style="left: 0px; bottom: 0px;">
                                    <div className="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                </div>
                                <div className="ps__rail-y" style="top: 0px; height: 380px; right: 0px;">
                                    <div className="ps__thumb-y" tabindex="0" style="top: 0px; height: 300px;"></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rute;