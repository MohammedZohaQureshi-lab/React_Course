import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailPage = () => {
  const params = useParams()
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID : {params.eventId} <Link to='edit' relative='path'>Edit Page</Link></p>
      <Link to='..' relative='path'>Back</Link>
    </>
  )
}

export default EventDetailPage