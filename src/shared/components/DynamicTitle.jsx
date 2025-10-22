import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';

const DynamicTitle = () => {
    const location = useLocation()
    const { id } = useParams()
    useEffect(() => {
        let title = 'law.bd';

        switch (location.pathname) {
            case '/':
                title = 'Home';
                break;
            case '/bookings':
                title = 'Law.BD | Bookings';
                break;
            case '/blogs':
                title = 'Law.BD | Blogs';
                break;
            case '/contact-us':
                title = 'Law.BD | Contact-Us';
                break;
            case '/contact-now':
                title = 'Law.BD | Contact-Now';
                break;
            default:
                title = '404 Not Found'
        }

        if (location.pathname.startsWith('/lawyers-details')) {
            title = `Law.bd | Lawyers-Details | ${id}`;
        }


        document.title = title;


    }, [location, id])

    return null
};

export default DynamicTitle;