import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import SundarBans from '../shared/SundarBans/SundarBans';
import Sreemangal from '../shared/Sreemangal/Sreemangal';
import CoxBooking from '../Booking/CoxBooking/CoxBooking';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }, 
    {
        path:'/sreemangal',
        element: <Sreemangal></Sreemangal>
    },
    {
        path:'/sundarbans',
        element: <SundarBans></SundarBans>
    },
    {
        path:'/time',
        element: <CoxBooking></CoxBooking>
    },
    {
        path: '/coxbooking',
        element: <CoxBooking></CoxBooking>
    }
])

