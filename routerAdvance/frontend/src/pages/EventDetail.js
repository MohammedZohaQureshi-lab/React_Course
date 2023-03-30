import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetailPage = () => {
  const data = useRouteLoaderData('eventsDetails');
  return (
    <>
      {/* <h1>EventDetailPage</h1>
      <p>Event ID : {params.eventId} <Link to='edit' relative='path'>Edit Page</Link></p>
      <Link to='..' relative='path'>Back</Link> */}
      <EventItem event={data.event} />
    </>
  )
}

export default EventDetailPage

export const loader = async ({ params }) => {
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json(
      { message: "Couldn't find details for the associated event" },
      { status: 500 }
    )

  } else {
    return response;
  }
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