import React from 'react'
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm'

const EditEventPage = () => {
  const data = useRouteLoaderData('eventsDetails');
  debugger;
  return <EventForm event={data.event} />
}

export default EditEventPage