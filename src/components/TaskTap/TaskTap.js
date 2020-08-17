import React, { useState } from 'react';
import './TaskTap.scss';

export default function TaskTap({taskName, value, trackingUnit, tasks, setTasks}) {
    const taskIndex = tasks.findIndex(element => element.name === taskName);

    const handleChange = (value = 0) => {
        let updatedTasks = [...tasks];
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            value: value
        };
        setTasks(updatedTasks);
    }

    return (
        <div className="tasktap">
            {taskName}
            <input 
                type="number" 
                min="1" 
                value={value}
                onClick={(e) => handleChange(tasks[taskIndex].value + 1)}
                onChange={(e) => handleChange(e.target.value)}/> 
                {trackingUnit}
        </div>
    );
}