import React, { useState, useEffect } from 'react';
import TaskTap from '../../components/TaskTap/TaskTap';
import { Container, Row } from 'react-bootstrap';
import './TaskInput.scss';

function TimeShift(props) {
    return (
        <div class="timeshift">
            {props.displayVal}
        </div>
    );
}

export default function TaskInput() {
    const timeframes = [['Today', 'day'], ['This week', 'week'], ['This month', 'month']];
    const [activeTimeframe, setActiveTimeframe] = useState('day');

    return(<Container>
        <Row style={{height: '2.5vh'}} noGutters/>
        <Row>
            <div class="headline-container">
                <h2>What have you done</h2>
            </div>
        </Row>
        <Row style={{height: '10vh'}}>
            <div class="timeshift-container">
                {timeframes.map(([displayVal, timeframe]) => {
                    return <TimeShift
                                displayVal={displayVal}
                                time={timeframe} 
                                selected={timeframe === activeTimeframe} 
                                onClick={setActiveTimeframe}
                            />;
                })}
            </div>
        </Row>
        <Row style={{height: '60vh'}}>
            <div class="main-container">
                <TaskTap/>
            </div>
        </Row>
    </Container>
    );
}