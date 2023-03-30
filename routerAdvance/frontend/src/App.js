import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import RootLayout from './pages/Root'
import EventsRootLayout from './pages/EventsRoot'
import EventsPage, { loader as eventsLoader } from './pages/Events'
import EventDetailPage, { loader as eventsDetailsLoader, action as deleteEventAction } from './pages/EventDetail'
import NewEventPage from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'
import { action as manipulateActions } from './components/EventFormActions';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', errorElement: <ErrorPage />, element: <RootLayout />, children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events', element: <EventsRootLayout />, children: [
            { index: true, element: <EventsPage />, loader: eventsLoader },
            {
              path: ':eventId', id: 'eventsDetails', loader: eventsDetailsLoader, children: [
                { index: true, element: <EventDetailPage />, action: deleteEventAction },
                { path: 'edit', action: manipulateActions, element: <EditEventPage /> }
              ]
            },
            { path: 'new', action: manipulateActions, element: <NewEventPage /> }

          ]
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App