import React, { useEffect, useState, useMemo } from 'react'
import { Container, Row } from 'react-bootstrap';
import API from '../../hooks/API';
import { Chart } from 'react-charts';
import moment from 'moment';
import './Insights.scss';

const tasks = [{
    taskID: 0,
    name: "Brush teeth",
    trackingUnit: "Times",
    customTrackingUnit: false,
    inputs: [{
        inputID: 0,
        date:  new moment('2020-08-01'),
        value: 2
    },
    {
        inputID: 0,
        date:  new moment('2020-08-02'),
        value: 1
    },
    {
        inputID: 0,
        date:  new moment('2020-08-03'),
        value: 2
    }]
},{
    taskID: 1,
    name: "Reading",
    trackingUnit: "pages",
    customTrackingUnit: false,
    inputs: [{
        inputID: 0,
        date:  new moment('2020-08-01'),
        value: 50
    },
    {
        inputID: 0,
        date:  new moment('2020-08-02'),
        value: 85
    },
    {
        inputID: 0,
        date:  new moment('2020-08-03'),
        value: 170
    }]
},{
    taskID: 2,
    name: "Workouts",
    trackingUnit: "minutes",
    customTrackingUnit: false,
    inputs: [{
        inputID: 0,
        date:  new moment('2020-08-01'),
        value: 30
    },
    {
        inputID: 0,
        date:  new moment('2020-08-02'),
        value: 15
    },
    {
        inputID: 0,
        date:  new moment('2020-08-03'),
        value: 20
    },
    {
        inputID: 0,
        date:  new moment('2020-08-03'),
        value: 10
    }]
}];


export default function Insights() {
    const [taskResults, setTaskResults] = useState(tasks);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [userID, setUserID] = useState(0);

    function createChartData() {
        let inputs = taskResults[currentTaskIndex].inputs;
        let chartData = [];
        chartData.push({
            label: taskResults[currentTaskIndex].name,
            data: []
        });
        let xAxisIncrementor = 0;
        console.log(inputs);
        for (let index in inputs) {
            chartData[0].data.push({
                x: xAxisIncrementor,
                y: inputs[index].value
            });
            xAxisIncrementor++
        }
        console.log(chartData);
        return chartData;
    }

    const createdChartData = useMemo(
        createChartData, 
        [tasks, currentTaskIndex]
    );


    const chartAxes = React.useMemo(() => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ], [] );

    useEffect(() => {
        if (taskResults === "") {
            setTaskResults(API.getTasks(userID));
            console.log('ACTIVE TASKS: ', taskResults);
        }
    }, [taskResults, userID]);

    return (<Container id="insights-page">
        <Row style={{height: '2.5vh'}} noGutters/>
        <Row>
            <div className="headline-container">
                <h3>Habit insights</h3>
            </div>
        </Row>
        <Row style={{height: '5vh'}}/>
        <Row style={{height: '65vh'}}>  
                <div className="main-container">
                    <div className="task-selector">
                        {tasks.map((task) => {
                            return <div onClick={() => {setCurrentTaskIndex(task.taskID)}} class="task-button">{task.name}</div>
                        })}
                    </div>
                    <div className="chart-container">
                        <Chart data={createdChartData} axes={chartAxes}/>
                    </div>
                </div>
        </Row>
    </Container>);
}
