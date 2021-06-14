import React, { memo } from "react";
import { BaseURL } from "../../costant/AppConfig";
import { OnlineAssessmentLayout } from "../../components/layout/layout";

const EventDetails = memo((props) => {
  const { event } = props;
  if (!event?.id) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <OnlineAssessmentLayout
        children={
          <div>
            <h1>Event Details-</h1>
            <h1>{event?.id}</h1>
            <h1>{event?.eventName}</h1>
            <h1>{event?.eventDate}</h1>
            <h1>{event?.eventDescription}</h1>
          </div>
        }
      />
    </>
  );
});

export async function getStaticProps(context) {
  const { eventId } = context.params;
  // fetch api call to get sigle event
  const res = await fetch(`${BaseURL}/events/${eventId}`);
  const data = await res.json();

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      testMesssage: "working !!! ",
      event: data,
    },
  };
}

// dynamic path generation
export async function getStaticPaths(context) {
  return {
    paths: [{ params: { eventId: "1" } }],
    fallback: true, // youcan also use blocking
  };
}

export default EventDetails;
