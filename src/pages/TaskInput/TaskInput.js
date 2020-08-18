import React, { useState, useEffect } from 'react';
import TaskTap from '../../components/TaskTap/TaskTap';
import { Container, Row } from 'react-bootstrap';
import moment from 'moment';
import './TaskInput.scss';

function TimeShift(props) {
    return (
        <div className={props.active ? 'timeshift active': 'timeshift'} onClick={() => props.setActiveTimeframe(props.time)}>
            {props.displayVal}
        </div>
    );
}

const initTask = {
    name: "", 
    trackingUnit: "",
    customTrackingUnit: false,
    updateCount: 0
};


export default function TaskInput() {
    const timeframes = [['Today', 'day'], ['This week', 'week'], ['This month', 'month']];
    const [activeTimeframe, setActiveTimeframe] = useState('day');
    const [tasks, setTasks] = useState([{
        name: "Brush teeth", 
        trackingUnit: "Times",
        customTrackingUnit: false,
        updateCount: 0
    },{
        name: "Read", 
        trackingUnit: "Pages",
        customTrackingUnit: false,
        updateCount: 0
    }]);
    ;

    const [newTask, setNewTask] = useState(initTask);
    const [mainMode, setMainMode] = useState('createTask');

    const handleAddTask = (task) => {
        console.log(task);
        if (!task.name || !task.trackingUnit) {
            return alert('Please ensure your task has a name and unit to track.');
        } else {
            setTasks([...tasks, task]);
            setMainMode('displayTasks');
        }
    }

    return(<Container>
        <Row style={{height: '2.5vh'}} noGutters/>
        <Row>
            <div className="headline-container">
                <div className="date-block">
                    <span className="day">
                        <h3>{moment().format('DD')}</h3>
                    </span>
                    <span className="month"><h6>{moment().format('MMM')}</h6></span>
                </div>
                <h2>Tap completed tasks</h2>
            </div>
        </Row>
        <Row style={{height: '10vh'}}>
            <div className="timeshift-container">
                {timeframes.map(([displayVal, timeframe]) => {
                    return <TimeShift
                                displayVal={displayVal}
                                key={timeframe}
                                time={timeframe} 
                                active={timeframe === activeTimeframe} 
                                setActiveTimeframe={setActiveTimeframe}
                            />;
                })}
            </div>
        </Row>
        <Row style={{height: '61vh'}}>
            {/*=================* Default mode - Display Tasks and input progress*============*/}
            <div className="main-container">
                {(mainMode === 'displayTasks') && <>
                    <div className="tasks-container">
                        {tasks.map(task => {
                            return <TaskTap taskName={task.name} trackingUnit={task.trackingUnit} tasks={tasks} setTasks={setTasks}/>
                        })}
                    </div>
                </>}
            {/*=================* Creation mode - Create Tasks and set tracking properties *============*/}
                {(mainMode === 'createTask' && <>
                        <Container className="create-task-container">
                            {/* <div className="back-button" onClick={() => setMainMode('displayTasks')}>Go back</div> */}
                            <Row>
                                <h5>What task do you want to track?</h5>
                                <input type="text" value={newTask.name} onChange={(e) => {setNewTask({...newTask, name: e.target.value})}} placeholder="Enter task name here"/>
                            </Row>
                            <Row>
                                <h5>What unit should we track it in?</h5>
                                <select value={newTask.trackingUnit} onChange={(e) => {
                                    if (e.target.value === 'custom') {
                                        setNewTask({...newTask, trackingUnit: e.target.value, customTrackingUnit: true})
                                    } else {
                                        setNewTask({...newTask, trackingUnit: e.target.value, customTrackingUnit: false})
                                    }
                                    }}>
                                    <option value="">Select...</option>
                                    <option value="times">Times</option>
                                    <option value="minutes">Minutes</option>
                                    <option value="hours">Hours</option>
                                    <option value="km">KM</option>
                                    <option value="pages">Pages</option>
                                    <option value="custom">Other...</option>
                                </select>
                                {(newTask.trackingUnit === 'custom') && <input value={newTask.trackingUnit} onChange={e => setNewTask({...newTask, customTrackingUnit: true, trackingUnit: e.target.value})}/>}
                            </Row>
                        </Container>
                </>)}
                <div className="action-container">
                    {mainMode === 'displayTasks' && <> 
                            <div className="action-button left" onClick={() => setMainMode('createTask')}>Add new Task</div>
                            <div className="action-button right">Update</div>
                    </>}
                    {(mainMode === 'createTask') && <>
                            <div className="action-button left" 
                                onClick={() => 
                                handleAddTask(newTask)}>
                                Add Task
                            </div>
                            <div className="action-button right" 
                                onClick={() => {
                                    setMainMode('displayTasks');
                                    setNewTask(initTask);
                                }}
                                >Cancel</div>
                    </>}
                </div>
            </div>
        </Row>
    </Container>
    );
}