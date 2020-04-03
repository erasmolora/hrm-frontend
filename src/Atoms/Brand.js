import React from "react";
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import logo from '../assets/media/logo.svg';


class Brand extends React.Component {
    
    render() {
        return (
            <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
                <Link className="kt-header__brand-logo" to='/'>
                    <Image src={logo} fluid />
                </Link>
            </div>
        );
    }
}
        
export default Brand;