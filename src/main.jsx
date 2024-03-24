import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import UserData from './Components/UserData/UserData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserData>
      <RouterProvider router={router}></RouterProvider>
    </UserData>
  </React.StrictMode>,
)
