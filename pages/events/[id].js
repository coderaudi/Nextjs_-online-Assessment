import React, { memo } from "react";
import { useRouter } from "next//router";
import EventItem from "../../components/events/event-item";
import {getEventDetailsByid} from '../../dummy-db';
const EventDetails = memo(() => {
  const router = useRouter();
  const { id } = router.query;
  const eventDetails = getEventDetailsByid(id);
  console.log("wer are in single finder", router.query,
  eventDetails
  )

  return (
    <div>
      <h1> Event Details .. </h1>
      <EventItem event={eventDetails} />
    </div>
  );
});

export default EventDetails;
