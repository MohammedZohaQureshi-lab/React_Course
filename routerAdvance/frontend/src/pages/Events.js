import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';
function EventsPage() {
  const data = useLoaderData();
  if(data.isError) <h2>{data.msg}</h2>
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    return { isError: true, msg: "Error Occured" }
  } else {
    return response;
  }
}