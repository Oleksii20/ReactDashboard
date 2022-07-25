import React from "react";
import CustomCheckbox from "../../../../components/CustomCheckbox";

import styles from './tasks.module.scss';

const tasks = [
    {
        name: 'Finish ticket update',
        type: 'urgent'
    },
    {
        name: 'Awaiting Customer Response',
        type: 'new'
    },
    {
        name: 'Awaiting Developer Fix',
        type: 'default'
    },
]

function Tasks() {
    return (
        <div className={`${styles.tickets} grid-item`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h3>Tasks</h3>
                    <p>Today</p>
                </div>
                <a href="/">View all</a>
            </div>
            <div className={`${styles.create_task} ${styles.task}`}>
                <input type="text" placeholder="Create new task"/>
                <button>
                    <i className="icon-plus"></i>
                </button>
            </div>
            {tasks.map((task) => (
                <div key={task.name} className={styles.task}>
                    <div className={styles.name}>
                        <CustomCheckbox />
                        <span>{task.name}</span>
                    </div>
                    <div className={`${styles.type} ${task.type}`}>{task.type}</div>
                </div>
            ))}
        </div>
    );
}

export default Tasks;