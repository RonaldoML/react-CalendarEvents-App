import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { calendarReducer } from './calendarReducer';

import { uiReducer } from './uiReducer';

//3. Reducer que une todos los reducers para hacer el provide del context

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
})