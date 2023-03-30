import React, { Suspense } from 'react'
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData('eventsDetails');
  return (
    <>
      {/* <h1>EventDetailPage</h1>
      <p>Event ID : {params.eventId} <Link to='edit' relative='path'>Edit Page</Link></p>
      <Link to='..' relative='path'>Back</Link> */}
      <Suspense fallback={<h2 style={{ textAlign: 'center' }}>Loading...</h2>}>
        <Await resolve={event}>
          {loadEvent => <EventItem event={loadEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<h2 style={{ textAlign: 'center' }}>Loading...</h2>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage
const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    return json(
      { message: "Couldn't find events" },
      { status: 500 }
    )

  } else {
    const resData = await response.json();
    return resData.events;
  }
}

const loadEvent = async (id) => {

  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json(
      { message: "Couldn't find details for the associated event" },
      { status: 500 }
    )

  } else {
    const resData = await response.json();
    return resData.event;
  }
}

export const loader = async ({ params }) => {
  const id = params.eventId
  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
}

export const action = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id, { method: request.method });
  if (!response.ok) {
    throw json(
      { message: "Couldn't Delete the event" },
      { status: 500 }
    )

  } else {
    return redirect('/events');
  }
}