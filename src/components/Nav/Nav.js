import React from 'react'
import './Nav.scss';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
    <>
        <Row style={{height: '4vh'}}/>
        <div className="nav-container">
            <nav>
                <ul className="nav-list">
                    <NavLink to="/tasks">Tasks</NavLink>
                    <NavLink to="/insights">Insights</NavLink>
                    <NavLink to="/settings">Settings</NavLink>
                </ul>
            </nav>
        </div>
    </>)
}