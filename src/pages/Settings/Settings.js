import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Settings.scss';

export default function Settings() {
    return(<Container id="settings-page">
        <Row style={{height: '2.5vh'}} noGutters/>
        <Row>
            <div className="headline-container">
                <h3>App Settings</h3>
            </div>
        </Row>
        <Row style={{height: '5vh'}}>
           
        </Row>
        <Row style={{height: '65vh'}}>
            <div className="main-container">
                
            </div>
        </Row>
    </Container>)
}