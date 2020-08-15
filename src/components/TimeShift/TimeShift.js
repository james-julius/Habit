import React from 'react';

export default function TaskTap(props) {
    return (
        <div className="tasktap">
            {props.taskName}
            <input type="number" /> {props.trackingUnit}
        </div>
    );
}