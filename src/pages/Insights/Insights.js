import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Container, Row } from 'react-bootstrap';
import API from '../../hooks/API';
import { Chart } from 'react-charts';
import moment from 'moment';
import './Insights.scss';


export default function Insights() {
    const [tasksLoading, setTasksLoading] = useState(API.getTasks());
    const [tasks, setTasks] = useState('');
    const [dataReady, setDataReady] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [userID, setUserID] = useState(0);

    function createChartData() {
        if (tasks !== '') {
            let inputs = tasks[currentTaskIndex].inputs;
            let chartData = [];
            chartData.push({
                label: tasks[currentTaskIndex].name,
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
    }

    useEffect(() => {
        console.log('taskLoading useEffect called with: ', tasksLoading)
            const load = async () => {
                const loadedData = await API.getTasks()
                    .then((data) => {
                        setTasks(data.tasks);
                        setDataReady(true);
                    })
            }
            load();
    }, [tasksLoading]);

    const createdChartData = useMemo(createChartData, [dataReady, currentTaskIndex]);


    const chartAxes = React.useMemo(() => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ], [] );

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
                        {dataReady && tasks.map((task) => {
                            return <div onClick={() => {setCurrentTaskIndex(task.taskID)}} class="task-button">{task.name}</div>
                        })}
                    </div>
                    <div className="chart-container">
                        {dataReady && <Chart data={createdChartData} axes={chartAxes}/>}
                    </div>
                </div>
        </Row>
    </Container>);
}
