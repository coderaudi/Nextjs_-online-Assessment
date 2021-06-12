import React, { memo } from 'react';
import EventItem from './event-item'; '../../components/events/event-item';
const EventList = memo((props) => {
 const {eventList} = props;

    return (
        <div>
            {eventList.map((e,index)=>{
                return <EventItem 
                key={index} event={e} />
            })}
        </div>
    );
});

export default EventList;