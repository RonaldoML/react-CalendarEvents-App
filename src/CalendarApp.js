import React from 'react';
import {Provider} from 'react-redux';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';


//5. Proveer el store
export const CalendarApp = () => {
    return (
        <Provider store={ store}>
            <AppRouter/>
        </Provider>
    )
}
