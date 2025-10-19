// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import '../styles/index.css'
import { RouterProvider } from 'react-router';
import { AppRoutes } from './routes/AppRoutes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRoutes}></RouterProvider>
  </StrictMode>,
)