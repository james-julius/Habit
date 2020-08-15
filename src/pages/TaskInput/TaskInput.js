import React, { useState, useEffect } from 'react';
// import TaskTap from '../../components/TaskTap/TaskTap';
import { Container, Row } from 'react-bootstrap';
import './TaskInput.scss';

function TimeShift(props) {
    return (
        <div class={props.active ? 'timeshift active': 'timeshift'}>
            {props.displayVal}
        </div>
    );
}

function TaskTap(props) {
    return (
        <div class="tasktap" onClick={props.addTask}>
            {props.taskName}
        </div>
    );
}

export default function TaskInput() {
    const timeframes = [['Today', 'day'], ['This week', 'week'], ['This month', 'month']];
    const [activeTimeframe, setActiveTimeframe] = useState('day');
    const [tasks, setTasks] = useState(['Brush teeth', 'Read']);
    const [createNewtask, createNewTask] = useState();

    return(<Container>
        <Row style={{height: '2.5vh'}} noGutters/>
        <Row>
            <div class="headline-container">
                <h2>Tap completed tasks</h2>
            </div>
        </Row>
        <Row style={{height: '10vh'}}>
            <div class="timeshift-container">
                {timeframes.map(([displayVal, timeframe]) => {
                    return <TimeShift
                                displayVal={displayVal}
                                time={timeframe} 
                                active={timeframe === activeTimeframe} 
                                onClick={setActiveTimeframe}
                            />;
                })}
            </div>
        </Row>
        <Row style={{height: '61vh'}}>
            <div class="main-container">
                <div class="tasks-container">
                    {tasks.map(task => {
                        return <TaskTap taskName={task}/>
                    })}
                </div>
                <div class="action-container">
                        <div class="action-button" onClick={createNewTask}>Add new Task</div>
                        <div class="action-button">Update</div>
                </div>
            </div>
        </Row>
    </Container>
    );
}