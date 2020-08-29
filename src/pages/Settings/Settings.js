import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import themes from '../../hooks/themes';
import './Settings.scss';

export default function Settings() {
    const [theme, setTheme] = useState('Royal Sky');

    useEffect(() => {
        themes.setTheme(theme);
    }, [theme]);

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
                        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                            <option value="Forest Green" selected>Forest Green</option>
                            <option value="Royal Sky">Royal Sky</option>
                            <option value="Burnt Orange">Burnt Orange</option>
                        </select>
                    </div>
                </div>
        </Row>
    </Container>)
}
