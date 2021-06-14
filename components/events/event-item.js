import React, { memo } from 'react';
import Link from 'next/link';
import styles from './event-item.module.css';
const EventItem = memo((props) => {
    const {id, eventName ,eventDescription, eventDate } = props.event;

    return (
        <div className={styles.item}>
            <h1>{id}</h1>
            <h1>{eventName}</h1>
            <h1>{eventDate}</h1>
            <h1>{eventDescription}</h1>

            <Link href={`/events/${id}`}>Check Details</Link>
        </div>
    );
});

export default EventItem;