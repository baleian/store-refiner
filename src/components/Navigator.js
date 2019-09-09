import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

import './Navigator.css';

const Navigator = () => {
    return (
        <div className="Navigator">
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link as={NavLink} to={process.env.REACT_APP_PUBLIC_URL + "/Gps"}>GPS Refiner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to={process.env.REACT_APP_PUBLIC_URL + "/Store"}>Store Refiner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to={process.env.REACT_APP_PUBLIC_URL + "/Address"}>Address Refiner</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navigator;
