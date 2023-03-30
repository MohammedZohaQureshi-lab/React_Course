import EventsList from '../components/EventsList';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
function EventsPage() {
  const data = useLoaderData();
  //if (data.isError) <h2>{data.msg}</h2>
  const events = data.events;

  return (
    <Suspense fallback={<h2 style={{ textAlign: 'center' }}>Loading...</h2>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    //*****MANUALLY WRITING ERRO MESSAGE RESPONSE*****///
    //**Method 1:
    //return { isError: true, msg: "Error Occured" }

    //**Method 2:
    //throw new Response(JSON.stringify({ message: "Couldn't find events" }), { status: 500 })

    //*****JSON UTILITY FUNCTION RESPONSE*****///
    return json(
      { message: "Couldn't find events" },
      { status: 500 }
    )

  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = () => {
  return defer({
    events: loadEvents()
  })
}