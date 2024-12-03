import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import './index.css'
import MeetupDetails from './page/MeetupDetails.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([{
  path: "/",
  element:<App/>
}, {
  path: "/meetupDetails/:eventId",
  element:<MeetupDetails/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
