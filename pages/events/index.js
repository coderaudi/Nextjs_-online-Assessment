import React, { memo } from "react";
import { BaseURL } from '../../costant/AppConfig';
import EventList from "../../components/events/event-list";
import { OnlineAssessmentLayout } from "../../components/layout/layout";
OnlineAssessmentLayout
const Events = memo((props) => {
  const {eventList, message} =props;
  return (
    <>
      <OnlineAssessmentLayout
        children={
          <div>
            <h1>testin{message}</h1>
          <EventList eventList={eventList} />

          </div>
        }
      />
    </>
  );
});


export async function getStaticProps(){
  const res = await fetch(`${BaseURL}/events`);
  const data = await res.json()
  return {
    props: {
      message:"message from props",
      eventList: data
    },
    revalidate:10
  }
}

export default Events;
