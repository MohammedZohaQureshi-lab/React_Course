import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';
function EventsPage() {
  const data = useLoaderData();
  if (data.isError) <h2>{data.msg}</h2>
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
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
    return response;
  }
}