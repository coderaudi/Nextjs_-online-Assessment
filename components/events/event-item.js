import React, { memo } from 'react';
import Link from 'next/link';
import styles from './event-item.module.css';
const EventItem = memo((props) => {
    const {title, address, date , id} = props.event;

    return (
        <div className={styles.item}>
            <h1>{title}</h1>
            <h1>{address}</h1>
            <h1>{date}</h1>
            <Link href={`/events/${id}`}>Check Details</Link>
        </div>
    );
});

export default EventItem;