import React from "react";

import styles from './statistic.module.scss';

const statData = [
    {
        name: 'Active',
        count: 60
    },
    {
        name: 'Online',
        count: 16
    },
    {
        name: 'Filtered',
        count: 43
    },
    {
        name: 'Banned',
        count: 64
    }
]

function StatisticSection() {
    return (
    <div className={styles.statistic}>
        {statData.map((item) => (
            <div key={item.name} className={`${styles.statistic_item} grid-item`}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.count}>{item.count}</div>
            </div>
        ))}
    </div>
    );
}

export default StatisticSection;