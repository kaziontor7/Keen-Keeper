import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import FriendContext from './Context/FriendContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContext>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </FriendContext>
  </StrictMode>,
)
