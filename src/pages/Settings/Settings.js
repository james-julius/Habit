import React, {useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import './Settings.scss';

export default function Settings() {
    const [theme, setTheme] = useState('Forest Green');


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
                    <div>
                        <h5>What task do you want to track?</h5>
                        <input type="text" placeholder="Enter task name here"/>
                    </div>
                    <div>
                        <h5>Choose your theme</h5>
                        <h5>Currently Active: {theme}</h5>
                        <select>
                            <option value="">Select...</option>
                            <option value="times">Times</option>
                            <option value="minutes">Minutes</option>
                            <option value="hours">Hours</option>
                            <option value="km">KM</option>
                            <option value="pages">Pages</option>
                            <option value="custom">Other...</option>
                        </select>
                    </div>
                </div>
        </Row>
    </Container>)
}