import moment from "moment";
import { types } from "../types/types";



const initialState = {
    events: [
        {
            title: 'Cumpleaños',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            notes: 'Comprar el pastel',
            user: {
                _id: '123',
                name: 'Ron'
            }
        }
    ],
    activeEvent: null
};



export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };
        case types.eventSetInactive:
            return {
                ...state,
                activeEvent: null
            };
        default:
            return state;
    }

}