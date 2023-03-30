import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import RootLayout from './pages/Root'
import EventsRootLayout from './pages/EventsRoot'
import EventsPage, { eventsLoader } from './pages/Events'
import EventDetailPage from './pages/EventDetail'
import NewEventPage from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', errorElement: <ErrorPage />, element: <RootLayout />, children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events', element: <EventsRootLayout />, children: [
            { path: '', element: <EventsPage />, loader: eventsLoader },
            { path: ':eventId', element: <EventDetailPage /> },
            { path: 'new', element: <NewEventPage /> },
            { path: ':eventId/edit', element: <EditEventPage /> }
          ]
        },

      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App