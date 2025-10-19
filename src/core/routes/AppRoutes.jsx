import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../../pages/HomePage";
import BookingPage from "../../pages/BookingPage";
import BlogsPage from "../../pages/BlogsPage";
import LawyersDetailsPage from "../../pages/LawyersDetailsPage";
import ErrorPage from "../../pages/ErrorPage";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                // index: true,
                path: '/',
                Component: HomePage
            },
            {
                path: '/lawyers-details/:id',
                Component: LawyersDetailsPage
            },
            {
                path: '/bookings',
                Component: BookingPage
            },
            {
                path: '/blogs',
                Component: BlogsPage
            },
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])