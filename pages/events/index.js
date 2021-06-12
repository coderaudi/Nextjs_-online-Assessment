import React, { memo } from "react";
import { getFeaturedEvents } from "../../dummy-db";
import EventList from "../../components/events/event-list";
const Events = memo(() => {
  const dbEventList = getFeaturedEvents();
  return (
    <div>
      <EventList
       eventList={dbEventList} />
    </div>
  );
});

export default Events;
