// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import '../styles/index.css'
import { RouterProvider } from 'react-router';
import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRoutes}></RouterProvider>
    <Toaster position='top-right'></Toaster>
  </StrictMode>,
)