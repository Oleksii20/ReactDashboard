import React from "react";

import styles from './tickets.module.scss';

const tickets = [
    {
        name: 'Waiting on Feature Request',
        count: 4238
    },
    {
        name: 'Awaiting Customer Response',
        count: 1005
    },
    {
        name: 'Awaiting Developer Fix',
        count: 914
    },
    {
        name: 'Pending',
        count: 281
    },
]

function Tickets() {
    return (
        <div className={`${styles.tickets} grid-item`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h3>Unresolved tickets</h3>
                    <p>
                        Group: <span>Support</span>
                    </p>
                </div>
                <a href="/">View details</a>
            </div>
            {tickets.map((ticket) => (
                <div key={ticket.count} className={styles.ticket}>
                    <div className={styles.name}>{ticket.name}</div>
                    <div className={styles.count}>{ticket.count}</div>
                </div>
            ))}
        </div>
    );
}

export default Tickets;