import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import RootLayout from './pages/Root'
import EventsRootLayout from './pages/EventsRoot'
import EventsPage, { loader as eventsLoader } from './pages/Events'
import EventDetailPage, { loader as eventsDetailsLoader } from './pages/EventDetail'
import NewEventPage from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', errorElement: <ErrorPage />, element: <RootLayout />, children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events', element: <EventsRootLayout />, children: [
            { index: true, element: <EventsPage />, loader: eventsLoader },
            {
              path: ':eventId',id:'eventsDetails', element: <EventDetailPage />, loader: eventsDetailsLoader, children: [
                { path: 'edit', element: <EditEventPage /> }
              ]
            },
            { path: 'new', element: <NewEventPage /> }

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